import React from 'react';
import ReactDOM from 'react-dom';
import from './Header';

it('Feader  renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
