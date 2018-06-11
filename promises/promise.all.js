let promiseAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject(`Can't add ${a} and ${b}`);
    }
  });
};

let promiseSquare = number => {
  return new Promise((resolve, reject) => {
    if (typeof number === 'number') {
      resolve(Math.pow(number, 2));
    } else {
      reject(`Can't square a non-number ${number}`);
    }
  });
};

// Chained - one depends on the other
promiseAdd(2, 3)
  .then(result => promiseSquare(result))
  .then(result => console.log('Promise Math', result))
  .catch(err => console.log('Promise Error', err));

let arrayOfPromises = [];
arrayOfPromises.push( promiseAdd(2,3) );
arrayOfPromises.push( promiseSquare(3) );

Promise.all(arrayOfPromises).then( ([added, squared]) => {
  console.log('Added', added);
  console.log('Squared', squared);
});