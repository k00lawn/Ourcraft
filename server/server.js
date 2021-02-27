const http = require("http");

const websocketServer = require("websocket").server;
const httpServer = http.createServer();
httpServer.listen(9090, () => console.log("Listening.. on 9090"));
//hashmap clients
const clients = {};
const games = {};

const wsServer = new websocketServer({
  httpServer: httpServer,
});
wsServer.on("request", (request) => {
  //connect
  const connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("opened!"));
  connection.on("close", () => console.log("closed!"));
  connection.on("message", (message) => {
    const result = JSON.parse(message.utf8Data);
    console.log(result);
    //I have received a message from the client
    //a user want to create a new game
    if (result.method === "create") {
      const clientId = result.clientId;
      const gameId = guid();
      games[gameId] = {
        id: gameId,
        host: clientId,
        clients: [],
      };

      const payLoad = {
        method: "create",
        game: games[gameId],
      };

      const con = clients[clientId].connection;
      con.send(JSON.stringify(payLoad));
    }

    //a client want to join
    if (result.method === "join") {
      if (!result.gameId) {
        return;
      }

      const clientId = result.clientId;
      const gameId = result.gameId;
      const game = games[gameId];
      game.clients.push({
        clientId: clientId,
      });
      //start the game
      if (game.clients.length > 0) updateGameState();

      const payLoad = {
        method: "join",
        game: game,
      };
      //loop through all clients and tell them that people has joined
      game.clients.forEach((c) => {
        clients[c.clientId].connection.send(JSON.stringify(payLoad));
      });
    }
    //a user plays
    if (result.method === "play") {
      const gameId = result.gameId;

      // if (!gameId) return;
      let cubePos = result.cube.cubePos;
      let cubeType = result.cube.cubeType;
      let key = result.cube.key;
      let state = games[gameId].state;
      if (!state)
        state = {
          cubes: [],
        };
      state.cubes.push({ key: key, pos: cubePos, texture: cubeType });
      games[gameId].state = state;
      console.log(state.cubes);
    }
  });

  //generate a new clientId
  const clientId = guid();
  clients[clientId] = {
    connection: connection,
  };

  const payLoad = {
    method: "connect",
    clientId: clientId,
  };
  //send back the client connect
  connection.send(JSON.stringify(payLoad));
});

function updateGameState() {
  //{"gameid", fasdfsf}
  for (const g of Object.keys(games)) {
    const game = games[g];
    const payLoad = {
      method: "update",
      game: game,
    };

    game.clients.forEach((c) => {
      clients[c.clientId].connection.send(JSON.stringify(payLoad));
    });
  }

  setTimeout(updateGameState, 5000);
}

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

// then to call it, plus stitch in '4' in the third group
const guid = () =>
  (
    S4() +
    S4() +
    "-" +
    S4() +
    "-4" +
    S4().substr(0, 3) +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  ).toLowerCase();
