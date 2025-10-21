import {useState, useEffect, use} from  "react";

function App() {
  const [counter, setValue] = useState(0);

  const [keyword, setKeyword] = useState("")
  
  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);
  
  //상태가 변할때만 콘솔로그발생
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  
  //입력에 변화가있을때
  useEffect(()=> {
    //  if(keyword !== "" && keyword.length > 5){ 
    //   //만약 value가 공백이아니거나 5보다 길면 콘솔로그
    //     console.log("I run when 'keyword' changes.");
    //  }
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  //[]안에다가 value 입력
  
  //카운터에 변화가있을때
  useEffect(() => {
    console.log("I run when 'counter' chages.");
  }, [counter])

  //모두 변화가 있을때
  useEffect(() => {
    console.log("I run when keword & counter changers");
  }, [keyword, counter]);

  return (  
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here " />
      <h1>{counter}</h1>
      <button onClick={onClick}> click me</button>
    </div>
  );
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