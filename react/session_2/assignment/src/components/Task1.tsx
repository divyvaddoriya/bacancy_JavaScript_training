import { useState } from "react";

// question 1

// Add a new component that has two pieces of state:name(string) andage(number). Render them and add buttons to increment age and update name from an input.

const Task1 = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [tempName, setTempName] = useState<string>(name);
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => {
          setAge((a) => a + 1);
        }}
      >
        Increment Age
      </button>

      <button onClick={() => setShow(true)}>Update Name</button>

      {show && (
        <div>
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <button
            onClick={() => {
              setShow(false);
              setName(tempName);
            }}
          >
           submit
          </button>
        </div>
      )}
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
};

export default Task1;
