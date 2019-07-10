// import _ from 'lodash'; // bad, not tree-shakeable
// import { join } from 'lodash'; // bad, not tree-shakeable
// import _ from 'lodash-es'; // bad, using the default export which is not tree-shakeable
// import * as _ from 'lodash-es'; // bad (would be good if the default export wasn't also included in this)
// import { join, curry, debounce, delay } from 'lodash-es'; // ok to do since the unused methods are tree-shakeable (but really you wouldn't do this because why would you)
import { join } from 'lodash-es'; // good, tree-shakeable

import dayjs from 'dayjs';

console.log('section 3 loaded!');

const createSection3 = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  const section3 = document.createElement('div');
  section3.innerHTML = '<p>I am Section 3. I rely on the following third-party dependencies: lodash, dayjs. I share the following third-party dependencies with Section 4: lodash, dayjs.</p>';
  
  const joinContainer = document.createElement('p');
  joinContainer.innerHTML = `Some text joined by _.join: ${join(['Look', 'at', 'me!'], ' ')}`;
  section3.appendChild(joinContainer);

  const dayjsContainer = document.createElement('p');
  dayjsContainer.innerHTML = `Today's date from dayjs: ${dayjs().format('D MMMM YYYY')}`;
  section3.appendChild(dayjsContainer);

  parentElement.appendChild(section3);
};

export default createSection3;
