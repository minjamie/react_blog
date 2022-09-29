import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트추천', '어린이 코트 추천', '공용 코트 추천'])
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Nav></Nav>
      {/* <button onClick={() => {
        let copy = [...글제목] 
        순서변경(copy.sort())
      }}>가나다순정렬</button>

      <div className='list'>
        <h4>{글제목[0]}
          <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>s
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <h4 onClick={() => {
          if (modal) {
            setModal(false)
          } else {
            setModal(true) 
          }
        }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        글제목.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                modal ? setModal(false) : setModal(true)
              }}>
                {글제목[i]}
              </h4>
              <span onClick={() => {
                let copy = [...따봉]
                copy[i] = copy[i] + 1
                따봉변경(copy)
              }}> 👍 </span>{따봉[i]}
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal 글제목변경={글제목변경}  글제목={글제목}
          /> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목]
        copy[0] = '여자 코트 추천'
        props.글제목변경(copy)
        }
      }> 글 수정</button>
      </div>)
}

function Nav() {
  return (
    <div className="black-nav">
        <h4>블로그제목</h4>
    </div>
  )
}
export default App;
