import React from 'react';
import ReactDOM from 'react-dom';
import from './Content';

it('Content renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Content/> , div);
    ReactDOM.unmountComponentAtNode(div);
});
