import { useState } from "react";

export default function Hello() {
  //state, state를 변경해주는 함수, 초기값
  const [name, setName] = useState("Mike");
  function changeName() {
    //const newName = name === "Mike" ? "Jane" : "Mike";
    //setName(newName);
    //setName(name === "Mike" ? "Jane" : "Mike");
  }
  return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  );
}
