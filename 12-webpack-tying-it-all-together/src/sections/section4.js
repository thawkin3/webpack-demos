// import _ from 'lodash'; // bad, not tree-shakeable
// import { join } from 'lodash'; // bad, not tree-shakeable
// import _ from 'lodash-es'; // bad, using the default export which is not tree-shakeable
// import * as _ from 'lodash-es'; // bad (would be good if the default export wasn't also included in this)
// import { join, curry, debounce, delay } from 'lodash-es'; // ok to do since the unused methods are tree-shakeable (but really you wouldn't do this because why would you)
import { join } from 'lodash-es'; // good, tree-shakeable

import dayjs from 'dayjs';

import axios from 'axios';

// import * as d3 from 'd3'; // bad, it's huge!
// import { scaleSequential, interpolateRainbow, randomNormal } from 'd3'; // bad, still huge!
// much better. d3 recommends using their individual smaller libraries:
import { scaleSequential } from 'd3-scale';
import { interpolateRainbow } from 'd3-scale-chromatic';
import { randomNormal } from 'd3-random';

import './section4.css';

console.log('section 4 loaded!');

const createSection4 = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  const section4 = document.createElement('div');
  section4.innerHTML = 'I am Section 4. I rely on the following dependencies: axios, lodash, dayjs, d3. I share the following dependencies with Section 2: axios. I share the following dependencies with Section 3: lodash, dayjs.';

  const joinContainer1 = document.createElement('p');
  joinContainer1.innerHTML = `Text joined by _.join: ${join(['Look', 'at', 'me!'], ' ')}`;
  section4.appendChild(joinContainer1);

  const joinContainer2 = document.createElement('p');
  joinContainer2.innerHTML = `More text joined by _.join: ${join(['No,', 'really,', 'look!'], ' ')}`;
  section4.appendChild(joinContainer2);

  const dayjsContainer = document.createElement('p');
  dayjsContainer.innerHTML = `Today's date from dayjs: ${dayjs().format('D MMMM YYYY')}`;
  section4.appendChild(dayjsContainer);

  const fetchingContainer = document.createElement('p');
  fetchingContainer.innerHTML = 'Fetching GitHub user...';
  section4.appendChild(fetchingContainer);

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

      section4.appendChild(responseContainer);
    })
    .catch(error => {
      const errorContainer = document.createElement('p');
      errorContainer.textContent = error.toString();
      section4.appendChild(errorContainer);
    });

  const d3Container = document.createElement('p');
  d3Container.innerHTML = 'Interactive display from d3:';
  section4.appendChild(d3Container);

  const canvasElement = document.createElement('canvas');
  canvasElement.width = 300;
  canvasElement.height = 300;
  section4.appendChild(canvasElement);

  parentElement.appendChild(section4);

  /**
   * Reproduced with love from https://bl.ocks.org/mbostock/e6f9e160585c153fa5ec543bd12b81e9
   */
  var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height,
    color = scaleSequential(interpolateRainbow).domain([0, 1000]),
    randomX = randomNormal(0.3),
    randomY = randomNormal(0);

  render();

  canvas.onclick = render;

  function render() {
    var x0 = width / 20,
      y0 = height / 2,
      mainWalk = randomWalk(x0, y0, 1000);

    context.clearRect(0, 0, width, height);
    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 1.5;
    context.strokeStyle = "black";
    renderWalk(mainWalk);

    context.globalCompositeOperation = "multiply";
    context.lineWidth = 1;
    for (var i = 0; i < mainWalk.length; i += 2) {
      var branchStart = mainWalk[i],
        x0 = branchStart[0],
        y0 = branchStart[1];
      for (var j = 0; j < 1; ++j) {
        context.strokeStyle = color(i + (Math.random() - 0.5) * 50);
        var x1 = x0, y1 = y0;
        for (var k = 0, m = 20; k < m; ++k) {
          context.globalAlpha = (m - k - 1) / m;
          var pieceWalk = randomWalk(x1, y1, 10),
            pieceEnd = pieceWalk[pieceWalk.length - 1];
          renderWalk(pieceWalk);
          x1 = pieceEnd[0];
          y1 = pieceEnd[1];
        }
        context.globalAlpha = 1;
      }
    }
  }

  function renderWalk(walk) {
    var i, n = walk.length;
    context.beginPath();
    context.moveTo(walk[0][0], walk[0][1]);
    for (i = 1; i < n; ++i) {
      context.lineTo(walk[i][0], walk[i][1]);
    }
    context.stroke();
  }

  function randomWalk(x0, y0, n) {
    var points = new Array(n), i;
    points[0] = [x0, y0];
    for (i = 1; i < n; ++i) {
      points[i] = [
        x0 += randomX() * 2,
        y0 += randomY() * 2
      ];
    }
    return points;
  }
};

export default createSection4;
