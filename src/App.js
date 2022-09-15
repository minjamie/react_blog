import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 순서변경] = useState(['남자 코트추천', '여자 코트추천', '공용 코트 추천'])
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그제목</h4>
      </div>
      <button onClick={() => {
        let copy = [...글제목]
        순서변경(copy.sort())
      }}>가나다순정렬</button>

      <div className='list'>
        <h4>{글제목[0]}
          <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal/>

      
    </div>
  );
}
function Modal() {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>)
}
export default App;
