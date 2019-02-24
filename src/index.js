import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

import { Provider } from 'react-redux';

import Base from './base.js';

import './styles.css';

const store = createStore(rootReducer);
//const unsubscribe = store.subscribe(() => console.log(store.getState()));

class App extends React.Component {
    componentDidMount = () => {
        console.log('%ccomponentDidMount', 'color: purple');
        //console.log(this.myRef.current);
        //const target = this.myRef.current;
        var target = document.querySelector('body');
        console.log(target);
        // создаем экземпляр наблюдателя
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                console.log('%cmutation', 'color: blue', mutation.type);
                console.log(mutation)
            });
        });

        // настраиваем наблюдатель
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };

        // передаем элемент и настройки в наблюдатель
        observer.observe(target, config);

        // позже можно остановить наблюдение
        //observer.disconnect();
    };

    render() {
        console.log('App render');
        return (
            <Provider store={store}>
                <Base />
            </Provider>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
