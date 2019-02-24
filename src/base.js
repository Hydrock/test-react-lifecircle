import React from 'react';
import { connect } from 'react-redux';

import { echoAC } from './actions/index.js';

class Base extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            count: 1
        };
    }

    static getDerivedStateFromProps = nextProps => {
        console.log('getDerivedStateFromProps');

        if (nextProps.echoCount < 2) {
            console.log('getDerivedStateFromProps action');
            nextProps.echoAC('');
        }

        if (nextProps.echoCount > 5 && nextProps.echoCount < 7) {
            console.log('20 times getDerivedStateFromProps action ');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
            nextProps.echoAC('');
        }
        //console.log(nextProps);
        return null;
    };

    sendAction = () => {
        console.log('sendAction Button');
        //console.log(echoAC('Learn about actions'));
        this.props.echoAC('Learn about actions');
    };

    render() {
        console.log('%cBase render', 'color: red');
        return (
            <div className="App" ref={this.myRef}>
                <span>{this.props.echoCount}</span>
                <button onClick={this.sendAction}>button</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { echo } = state;
    return { echoCount: echo.echoCount };
}

function mapDispatchToProps(dispatch) {
    return {
        echoAC: text => {
            dispatch(echoAC(text));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Base);
