// Change Text Content
document.getElementById('changeTextBtn').onclick = function() {
  document.getElementById('text').textContent = 'The text has been changed!';
}

// Change Background Color
document.getElementById('changeColorBtn').onclick = function() {
  document.body.style.backgroundColor = 'lightblue';
}

// Add New Element
document.getElementById('addElementBtn').onclick = function() {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new paragraph!';
  document.getElementById('container').appendChild(newElement);
}

// Remove Last Element
document.getElementById('removeElementBtn').onclick = function() {
  const container = document.getElementById('container');
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}
