// Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
// Call them in sequence using nested callbacks.
// Log "All steps finished" only after step3 completes.


function step1(fn) {
    setTimeout(() => {
        console.log('Step 1 completed');
        fn();
    }, 1000);
}

function step2(fn) {
    setTimeout(() => {
        console.log('Step 2 completed');
        fn();
    }, 1000);
}

function step3(fn) {
    setTimeout(() => {
        console.log('Step 3 completed');
        fn();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log('All steps finished');
        });
    });
});

