//HTML elements
let clientId = null;
let gameId = null;
let playerColor = null;

let ws = new WebSocket("ws://localhost:9090")
const btnCreate = document.getElementById("btnCreate");
const btnJoin = document.getElementById("btnJoin");
const txtGameId = document.getElementById("txtGameId");
const divPlayers = document.getElementById("divPlayers");
const divBoard = document.getElementById("divBoard");

let state = [];

// Create Game
function createGame (client_Id) {
    const payLoad = {
        "method": "create",
        "clientId": clientId
    }

    ws.send(JSON.stringify(payLoad));
}

btnCreate.addEventListener("click", e => {

    // const payLoad = {
    //     "method": "create",
    //     "clientId": clientId
    // }

    // ws.send(JSON.stringify(payLoad));
    createGame()
})

function joinGame (game_Id) {
    if (gameId === null)
        gameId = txtGameId.value;
    
    const payLoad = {
        "method": "join",
        "clientId": clientId,
        "gameId": gameId
    }

    ws.send(JSON.stringify(payLoad));
}


//wiring events
btnJoin.addEventListener("click", e => {

    // if (gameId === null)
    //     gameId = txtGameId.value;
    
    // const payLoad = {
    //     "method": "join",
    //     "clientId": clientId,
    //     "gameId": gameId
    // }

    // ws.send(JSON.stringify(payLoad));
    joinGame()

})



ws.onmessage = message => {
    //message.data
    const response = JSON.parse(message.data);
    //connect
    if (response.method === "connect"){
        clientId = response.clientId;
        console.log("Client id Set successfully " + clientId)
    }

    //create
    if (response.method === "create"){
        gameId = response.game.id;
        console.log("game successfully created with id " + response.game.id)  
    }


    // Updating state 
    if (response.method === "update"){

        if (!response.game.state) return;
       

        for(const b of Object.keys(response.game.state))
        {
            state = response.game.state.cubes;
            for(let i in state) {
                console.log(i)
            } 
            console.log(state)
        }

    }

    //join
    if (response.method === "join"){
        const game = response.game;

        // Displaying html for players nothing fancy
        while(divPlayers.firstChild)
            divPlayers.removeChild (divPlayers.firstChild)

        game.clients.forEach (c => {

            const d = document.createElement("div");
            d.style.width = "200px";
            d.style.background = c.color
            d.textContent = c.clientId;
            divPlayers.appendChild(d);

            if (c.clientId === clientId) playerColor = c.color;
        })


        // Ignore this code
        while(divBoard.firstChild)
        divBoard.removeChild (divBoard.firstChild)
        const b = document.createElement("button");
        b.textContent = "block"
        b.style.width = "150px"
        b.style.height = "150px"


        // Call this function when block is placed
        function onBlockPlaced (cubePos, cubeType) {
            const payLoad = {
                "method": "play",
                "clientId": clientId,
                "gameId": gameId,
                "cube" : {
                    "cubePos": cubePos,
                    "cubeType": cubeType 
                } 
            }
            ws.send(JSON.stringify(payLoad))
        }

        b.addEventListener("click", e => {
            const cubePos = [0, 0, 0];
            const cubeType = "dirt";
            onBlockPlaced(cubePos, cubeType)
            
        })
        divBoard.appendChild(b);
    }
}