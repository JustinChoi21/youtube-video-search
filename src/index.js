import React from 'react';
import ReactDOM from 'react-dom'; // 실제로 Dom에 그리는 역할을 한다
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app'; // react, react-dom 같이 npm 패키지로 설치돈 것은 그냥 이름만 입력하면 babel이 node-module에서 찾아주지만, 내가 직접 만든 컴포넌트는 상대경로를 정확히 명시해주어야 한다.
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render( // Dom에 그리기 위해 ReactDom 사용, <App /> 하면 App 클래스 컴포넌트를 인스턴스화 시키게 된다. 실제로 React.createElement()를 호출하게 된다.
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container')); // ReactDom.render의 2번째 인자는 render할 Dom
