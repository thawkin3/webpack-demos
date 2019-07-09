function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = 'Hello webpack'
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = () => import(/* webpackChunkName: "print" */ './print')
    .then(module => {
      const print = module.default;
      print();
    })
    .catch(error => 'An error occurred while calling the print method');

  return element;
}

document.body.appendChild(component());
