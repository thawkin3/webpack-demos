import axios from 'axios';
import './section2.css';

console.log('section 2 loaded!');

const createSection2 = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  const section2 = document.createElement('div');
  section2.innerHTML = 'I am Section 2. I rely on the following third-party dependencies: axios. I share the following dependencies with Section 4: axios';

  const fetchingContainer = document.createElement('p');
  fetchingContainer.innerHTML = 'Fetching GitHub user...';
  section2.appendChild(fetchingContainer);

  parentElement.appendChild(section2);

  axios.get(`https://api.github.com/users/thawkin3`)
    .then(response => {
      const responseContainer = document.createElement('div');

      const avatar = new Image();
      avatar.src = response.data.avatar_url;
      avatar.classList.add('avatar');
      responseContainer.appendChild(avatar);

      const usernameContainer = document.createElement('p');
      usernameContainer.innerHTML = response.data.name;
      usernameContainer.classList.add('username');
      responseContainer.appendChild(usernameContainer);

      section2.appendChild(responseContainer);
    })
    .catch(error => {
      const errorContainer = document.createElement('p');
      errorContainer.textContent = error.toString();
      section2.appendChild(errorContainer);
    });
};

export default createSection2;
