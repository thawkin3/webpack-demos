import _ from 'lodash';

console.log('The print.js module has loaded! See the network tab in dev tools...');

export default () => {
  console.log('Button Clicked: Here\'s some text!');
  const element = document.createElement('div');
  element.innerHTML = _.join(['Text', 'joined', 'by', 'lodash'], ' ');
  document.body.appendChild(element);
};
