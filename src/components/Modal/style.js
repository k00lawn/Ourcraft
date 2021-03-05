export default {
    modal: {
        backgroundColor: '#FBF8E8'
    },
    closeButton: {
        width: '80%',
        backgroundColor: '#0E4194',
        margin: '2% 10%',
        color: '#fff',
        borderRadius: '30px'
    },

    modalWrap: {
        position: 'absolute',
        width: '95vw',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px'
    },
    modalHeader: {
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 600,
        color: '#fff',
        textTransform: 'capitalize',
        borderBottom: '2px solid #D1D1D1'
    },
    closeIcon: {
        position: 'absolute',
        right: -10,
        top: -10,
        transform: 'scale(1.3)',
        color: '#0E4194',
        backgroundColor: 'white',
        borderRadius: '20px',
        width: '25px',
        height: '25px',
        border: '1px solid #0E4194',
        alignSelf: 'center'
    },

    modalBody: {
        fontSize: 16,
        maxHeight: '70vh',
        '& .marginRight30': {
            marginRight: '30px !important'
        }
    },
    modalFooter: {
        minHeight: '55px'
    }
};