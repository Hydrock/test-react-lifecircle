export const echoAC = text => {
    console.log('echoAC Action');
    return {
        type: 'ECHO',
        payload: {
            text: text
        }
    };
};
