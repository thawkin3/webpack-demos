console.log('section 3 loaded!');

const createSection3 = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  const section3 = document.createElement('div');
  section3.innerHTML = 'I am Section 3. I rely on the following dependencies: [todo]. I share the following dependencies with Section 4: [todo].';
  parentElement.appendChild(section3);
};

export default createSection3;
