function simulateTask(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} in ${delay} ms`);
      resolve(name);
    }, delay);
  });
}


async function runSeq() {

    let start = Date.now()

  await simulateTask("Task 1", 1000);
  await simulateTask("Task 2", 2000);
  await simulateTask("Task 3", 1500);

  console.log(Date.now()  - start + "for ]async");
}

runSeq();


async function runPar() {
  let start = Date.now()

  await Promise.all([
    simulateTask("Task 1", 1000),
    simulateTask("Task 2", 2000),
    simulateTask("Task 3", 1500),
  ]);
  console.log(Date.now()  - start + "for promise");
}

runPar();
