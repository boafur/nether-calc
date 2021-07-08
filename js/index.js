const form1 = document.querySelector('#form1');
const inputX = document.getElementById('inputX');
const inputY = document.getElementById('inputY');
const inputZ = document.getElementById('inputZ');
const dim = document.querySelector('#dimension');
const msg = document.querySelector('#msg');
const display = document.querySelector('#display');

const whitespace = /^\s*$/;

form1.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let coordX = inputX.value.trim();
  let coordY = inputY.value.trim();
  let coordZ = inputZ.value.trim();

  if (coordX.match(whitespace) || coordZ.match(whitespace) || isNaN(coordX) || isNaN(coordY) || isNaN(coordZ)) {
    if (!msg.classList.contains('error')) {
      msg.classList.add('error');
      msg.innerHTML = isNaN(coordY) ? 'Please input valid coordinates' : 'Please input valid X and Z coordinates';

      setTimeout(() => { msg.classList.remove('error'); msg.innerHTML = ''; }, 3000);
    }
  } else if (dim.value !== 'nether' && dim.value !== 'overworld') {
    if (!msg.classList.contains('error')) {
      msg.classList.add('error');
      msg.innerHTML = 'Please select a dimension';

      setTimeout(() => { msg.classList.remove('error'); msg.innerHTML = ''; }, 3000);
    }
  } else if (dim.value === 'nether') {
    display.innerHTML = coordY.match(whitespace) ? `Portal in Nether should be at: ${coordX} ${coordZ}<br><br>Portal in Overworld should be at: ${parseInt(coordX) * 8} ${parseInt(coordZ) * 8}` : `Portal in Nether should be at: ${coordX} ${coordY} ${coordZ}<br><br>Portal in Overworld should be at: ${parseInt(coordX) * 8} ${parseInt(coordY)} ${parseInt(coordZ) * 8}`;
  } else if (dim.value === 'overworld') {
    display.innerHTML = coordY.match(whitespace) ? `Portal in Nether should be at: ${parseInt(coordX) / 8} ${parseInt(coordZ) / 8}<br><br>Portal in Overworld should be at: ${coordX} ${coordZ}` : `Portal in Nether should be at: ${parseInt(coordX) / 8} ${coordY} ${parseInt(coordZ) / 8}<br><br>Portal in Overworld should be at: ${coordX} ${coordY} ${coordZ}`;
  }
}
