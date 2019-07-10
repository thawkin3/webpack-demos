console.log('section 4 loaded!');

const createSection4 = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  const section4 = document.createElement('div');
  section4.innerHTML = 'I am Section 4. I rely on the following dependencies: [todo]. I share the following dependencies with Section 3: [todo].';
  parentElement.appendChild(section4);
};

export default createSection4;
