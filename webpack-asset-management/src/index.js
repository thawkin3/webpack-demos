import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import XmlData from './data.xml';
import CsvData from './data.csv';

function component() {
  const element = document.createElement('div');
  
  // Use Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  // Parsed JSON from the XML file
  console.log(XmlData);

  // Parsed JSON from the CSV file
  console.log(CsvData);

  return element;
}

document.body.appendChild(component());
