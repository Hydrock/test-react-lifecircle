const sayEcho = (state = { echoCount: 0 }, action) => {
    console.log('sayEcho reducer');
    switch (action.type) {
        case 'ECHO':
            return {
                echoCount: state.echoCount + 1,
                text: action.payload.text
            };
        default:
            return state;
    }
};

export default sayEcho;
