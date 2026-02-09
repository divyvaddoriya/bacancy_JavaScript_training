const promise = new Promise((resolve) => {
    resolve(5);
});

promise
    .then(num => num * 2)
    .then(num => num + 20)
    .then(result => {
        console.log(result);
    });
