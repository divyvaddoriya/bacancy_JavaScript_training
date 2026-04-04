// Create a function tossCoin() that returns a Promise.
// Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
// Consume the promise using .then() and .catch().


function tossCoin() {
    return new Promise((resolve, reject) => {
        const randVal = Math.random();

        if (randVal > 0.5) {
            resolve('Heads');
        } else {
            reject('Tails');
        }
    });
}

tossCoin()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

