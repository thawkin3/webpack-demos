// non-dynamic loading
// import createSection1 from './sections/section1'
// import createSection2 from './sections/section2'
// import createSection3 from './sections/section3'
// import createSection4 from './sections/section4'

import Icon from './assets/webpack-icon.png';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function createButton(id, text, clickHandler) {
  const button = document.createElement('button');
  button.id = id;
  button.innerHTML = text;
  button.onclick = clickHandler;
  return button;
}

function createHomePage() {
  const container = document.createElement('div');
  container.classList.add('container');

  const heading = document.createElement('h1');
  heading.innerHTML = 'Webpack Demo - Tying it all together';

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('icon');
  container.appendChild(myIcon);

  const navContainer = document.createElement('nav');
  navContainer.classList.add('navContainer');

  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('sectionContainer');
  sectionContainer.innerHTML = 'Click one of the section buttons to load some new content.';

  function button0ClickHandler() {
    sectionContainer.innerHTML = 'Click one of the section buttons to load some new content.';
  }

  function button1ClickHandler() {
    // createSection1(sectionContainer);
    import(/* webpackChunkName: "section1" */ './sections/section1')
      .then(module => module.default(sectionContainer))
      .catch(error => 'An error occurred while loading section 1');
  }
  
  function button2ClickHandler() {
    // createSection2(sectionContainer);
    import(/* webpackChunkName: "section2" */ './sections/section2')
      .then(module => module.default(sectionContainer))
      .catch(error => 'An error occurred while loading section 2');
  }
  
  function button3ClickHandler() {
    // createSection3(sectionContainer);
    import(/* webpackChunkName: "section3" */ './sections/section3')
      .then(module => module.default(sectionContainer))
      .catch(error => 'An error occurred while loading section 3');
  }
  
  function button4ClickHandler() {
    // createSection4(sectionContainer);
    import(/* webpackChunkName: "section4" */ './sections/section4')
      .then(module => module.default(sectionContainer))
      .catch(error => 'An error occurred while loading section 4');
  }

  const navButton0 = createButton('navButton0', 'Home', button0ClickHandler);
  const navButton1 = createButton('navButton1', 'Section 1', button1ClickHandler);
  const navButton2 = createButton('navButton2', 'Section 2', button2ClickHandler);
  const navButton3 = createButton('navButton3', 'Section 3', button3ClickHandler);
  const navButton4 = createButton('navButton4', 'Section 4', button4ClickHandler);
  navContainer.appendChild(navButton0);
  navContainer.appendChild(navButton1);
  navContainer.appendChild(navButton2);
  navContainer.appendChild(navButton3);
  navContainer.appendChild(navButton4);

  container.appendChild(heading);
  container.appendChild(navContainer);
  container.appendChild(sectionContainer);

  return container;
}

document.body.appendChild(createHomePage());
