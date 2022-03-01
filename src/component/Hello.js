import { useState } from "react";

export default function Hello({ age }) {
  //state, state를 변경해주는 함수, 초기값
  const [name, setName] = useState("Mike");
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
  return (
    <div>
      <h1>state</h1>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
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
