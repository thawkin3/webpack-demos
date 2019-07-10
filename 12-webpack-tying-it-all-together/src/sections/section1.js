// import math from '../util/math'; // bad
import { cube, square } from '../util/math'; // good
// import * as math from '../util/math'; // good

console.log('section 1 loaded!');

const createSection1 = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  const section1 = document.createElement('div');
  section1.innerHTML = '<p>I am Section 1. I have minimal JS and don\'t rely on any third-party packages. I do use some math utility functions from a file in this project.</p>';
  
  const cubeContainer = document.createElement('p');
  cubeContainer.innerHTML = `5 cubed is ${cube(5)}.`;
  section1.appendChild(cubeContainer);

  const squareContainer = document.createElement('p');
  squareContainer.innerHTML = `3 squared is ${square(3)}.`;
  section1.appendChild(squareContainer);

  parentElement.appendChild(section1);
};

export default createSection1;
