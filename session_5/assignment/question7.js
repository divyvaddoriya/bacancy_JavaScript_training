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

