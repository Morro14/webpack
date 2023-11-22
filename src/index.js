import _ from 'lodash';
import './style.css';


const req = new XMLHttpRequest();
req.open('GET', 'http://ip.jsontest.com/');
req.onload = function() {
  const result = JSON.parse(req.response);
  console.log('Done. Got', result);
};
req.send();


function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}


function getJSONdata(url, callback) {
  console.log('getting JSON');
  const req = new XMLHttpRequest();

  req.open('GET', url);

  req.onload = function() {
    const result = JSON.parse(req.response);
    console.log('Done, result:', result);
    if (callback) {
      callback(result);
    }
  };

  req.onerror = function() {
    console.log('Error! Status: ', req.status);
  };

  req.send();
  console.log('Status: ', req.status);
}

function displayData(data) {
  console.log(data);
  let items = '';
  data.forEach((item)=> {
    const item_ = `<tr><td class="post-list">${item.title} by ${item.author}</td></tr>`;
    console.log(item_);
    items = items + item_;
  });
  console.log(items);

  const displayNode = document.createElement('table');
  const tHead = document.createElement('tHead');
  tHead.innerHTML = 'JSON Data:\n';
  displayNode.innerHTML = items;
  displayNode.appendChild(tHead);

  document.body.appendChild(displayNode);
}


document.body.appendChild(component());
getJSONdata('http://localhost:3000/posts/', displayData);


