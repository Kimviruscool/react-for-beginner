import {useState, useEffect, use} from  "react";

function Hello() {

  function ByFn(){
    console.log("Bye")
  }

  function HiFn(){
    console.log("created!")
    return ByFn;
  }
  useEffect(HiFn, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return <div>
    {showing ? <Hello /> : null }
    <button onClick={onClick} >{showing ? "Hide" : "Show"}</button>
  </div>

}

export default App;

// useEffect 는 호출을 반복하지않고 한번만 할수있게 도와준다.
//state 가 어떤변화가 생기던 서버 실행시 단 한번만 호출된다 API 사용시 자주사용됨
// [value 입력된 값 , value modify 입력된 값을 기반으로 수정한값]

// useEffect(() => {
//   console.log("message");  
// }, [조건])
// function 생성 
//   기능 구현
// 실행조건