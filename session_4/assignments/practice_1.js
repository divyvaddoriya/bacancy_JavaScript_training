const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);


console.log(registry.active.length); // 2
console.log(registry.active[0].name); // gamma
console.log(registry.version);       // undefined

// first active will have reference of non primitive data type so changes in that will affect in its main data object from we are copying 
// version in primitive data type so changes in that can affect the main data points