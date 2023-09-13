import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { data } from "./data.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  let [friend, setfriend] = useState(data);
  const navigate = useNavigate();

  // 입력 필드의 상태를 관리
  let [newFriend, setNewFriend] = useState({
    no: '',
    name: '',
    hobby: '',
    bday: '',
  });

  return (
    <div className="App">
      <h1>내짝궁</h1>
      <Link to="/add">친구추가하기</Link> / <Link to="/">메인으로가기</Link>
      <Routes>
        <Route path='/' element={
          <table style={{ margin: 'auto' }}>
            <tbody>
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>취미</th>
                <th>생일</th>
                <th>기타</th>
              </tr>
              {
                friend.map((d, i) => {
                  return (
                    <Friend key={i} friend={friend} setfriend={setfriend} i={i} />
                  )
                })
              }
            </tbody>
          </table>
        } />
        <Route path='/add' element={
          <>
            <div>칭구추가</div>
            <span>번호 :</span> <input className='no' onChange={(e) => setNewFriend({ ...newFriend, no: e.target.value })} /> <br></br>
            <span>이름 :</span> <input className='name' onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })} /> <br></br>
            <span>취미 :</span> <input className='hobby' onChange={(e) => setNewFriend({ ...newFriend, hobby: e.target.value })} /> <br></br>
            <span>생일:</span> <input type='date' className='bday' onChange={(e) => setNewFriend({ ...newFriend, bday: e.target.value })} /> <br />
            <button onClick={() => {
              // 새로운 친구 객체 생성
              const newFriendObj = {
                no: newFriend.no,
                name: newFriend.name,
                hobby: newFriend.hobby,
                bday: newFriend.bday,
              };

              // 데이터를 업데이트하고 기존 데이터에 추가
              setfriend([...friend, newFriendObj]);

              // 입력 필드 초기화
              setNewFriend({
                no: '',
                name: '',
                hobby: '',
                bday: '',
              });

              navigate('/');
            }}>추가</button>
          </>
        } />
      </Routes>
    </div>
  );
}

function Friend(props) {
  return (
    <tr>
      <td>{props.friend[props.i].no}</td>
      <td>{props.friend[props.i].name}</td>
      <td>{props.friend[props.i].hobby}</td>
      <td>{props.friend[props.i].bday}</td>
      <td>
        <button
          onClick={() => {
            let copy = [...props.friend];
            copy.splice(props.i, 1);
            props.setfriend(copy);
          }}
        >삭제</button>
      </td>
    </tr>
  )
}

export default App;
