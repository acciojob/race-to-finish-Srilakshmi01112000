window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
}

const promises = [
  new Promise(resolve => setTimeout(() => resolve(1), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve(2), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve(3), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve(4), getRandomTime())),
  new Promise(resolve => setTimeout(() => resolve(5), getRandomTime())),
];

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `The first resolved promise: ${result}`;
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
