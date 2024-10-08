const date = new Date();

function checkTime() {
  let hours = date.getHours();
  console.log('__', hours);
  if (hours >= 12 && hours < 17) {
    return 'GOOD AFTERNOON';
  } else if (hours >= 17 && hours <= 24) {
    return 'GOOD EVENING';
  } else {
    return 'GOOD MORNING';
  }
}
document.getElementById('Greetings').innerHTML = checkTime();
let clickmeButton = document.getElementById('clickmeButton');

clickmeButton.onclick = function () {
  let x = document.getElementById('mainBox');
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
};

let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('todoButton');
let notesbtn = document.getElementById('notesButton');
let textarea = document.getElementById('wrapperBox');

// Get the <span> element that closes the modal
let span = document.getElementById('close');
let header = document.getElementById('header');

let mainBox = document.getElementById('mainBox');
let backButton = document.getElementById('backButton');

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
  header.style.display = 'none';

  mainBox.style.display = 'none';
};
notesbtn.onclick = function () {
  textarea.style.display = 'block';
  header.style.display = 'none';

  mainBox.style.display = 'none';
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  console.log('close');

  modal.style.display = 'none';
};
backButton.onclick = function () {
  header.style.display = 'block';
  mainBox.style.display = 'flex';
  textarea.style.display = 'none';
  document.getElementById('card').style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    header.style.display = 'block';
    mainBox.style.display = 'flex';
  }
};

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('close');
let element;
for (element = 0; element < close.length; element++) {
  close[element].onclick = function () {
    console.log('closee++');
    let div = this.parentElement;
    div.style.display = 'none';
    header.style.display = 'block';
    mainBox.style.display = 'flex';
  };
}

// Add a "checked" symbol when clicking on a list item
let checked = document.querySelector('ul');
checked.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false
);

function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('myInput').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      console.log('closee##');
      header.style.display = 'block';
      mainBox.style.display = 'flex';
      div.style.display = 'none';
    };
  }
}

function editField() {
  let listItems = document.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].contentEditable = true;
  }
}
function done() {
  let listItems = document.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].contentEditable = false;
  }
}

function addButton() {
  let wrapperBoxValue = document.getElementById('freeform').value;
  document.getElementById('card-text').innerHTML = wrapperBoxValue;
  document.getElementById('freeform').value = '';
  document.getElementById('card').style.display = 'block';
  document.getElementById('card-header').innerHTML = 'Contents';
}
