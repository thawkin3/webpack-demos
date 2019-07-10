console.log('section 2 loaded!');

const createSection2 = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  const section2 = document.createElement('div');
  section2.innerHTML = 'I am Section 2. I rely on the following third-party dependencies: [todo]. I don\'t have any shared dependencies with any other sections though.';
  parentElement.appendChild(section2);
};

export default createSection2;
