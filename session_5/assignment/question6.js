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

