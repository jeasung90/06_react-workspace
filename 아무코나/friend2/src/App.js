
import './App.css';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import {data} from "./data"
import { useState } from 'react';

function App(props) {
  let [friend, setfriend] = useState(data);
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>나랑 칭구하자</h1>
      <Link to="/">홈</Link>/
      <Link to="/add">칭구추가</Link>
      <Routes>
      <Route path='/' element={<Main friend={friend} setfriend={setfriend}/>}/>
      <Route path='/add' element={<Add friend={friend} setfriend={setfriend} navigate={navigate} />}/>
    </Routes>
     
    </div>
  );
}

function Main(props){
  
  return(
    <table>
    <tbody>
      <tr>
        <th>번호</th>
        <th>이름</th>
        <th>취미</th>
        <th>생일</th>
        <th>기타</th>
      </tr>
      {
        props.friend.map((f,i)=>{
          return(
            <tr>
            <td>{props.friend[i].no}</td>
            <td>{props.friend[i].name}</td>
            <td>{props.friend[i].hobby}</td>
            <td>{props.friend[i].bday}</td>
            <td><button onClick={()=>{
              let copy = [...props.friend];
              copy.splice(i,1);
              props.setfriend(copy);
            }}>삭제</button></td>
          </tr>
          )
        }) 

      }
     
    </tbody>
  </table>
  )
}

function Add(props){
 
  let [newfriend,setnewfriend] = useState({
    no : '',
    name : '',
    hobby : '',
    bday : ''
  })

  let onChange = (e)=>{
    setnewfriend({
      ...newfriend,
      [e.target.name] : e.target.value
    })
  }
  
  let chingugigi = (e) => {
    props.setfriend((prevFriend) => [...prevFriend, newfriend]); // 이전 상태를 기반으로 새로운 친구 데이터를 추가
    setnewfriend({
      no: '',
      name: '',
      hobby: '',
      bday: '',
    });
    props.navigate('/');
  };
  

  return(
    <div className='add'>
    <h4>칭구추가</h4>
    <span>남바 : </span>
    <input value={newfriend.no} name='no' onChange={onChange}/> <br/>
    <span>너그 이름 : </span>
    <input value={newfriend.name} name='name' onChange={onChange}/><br/>
    <span>너그 취미 : </span>
    <input value={newfriend.hobby} name='hobby' onChange={onChange}/><br/>
    <span>언제 귀 빠졌니 : </span>
    <input type='Date' value={newfriend.bday} name='bday' onChange={onChange}/> <br/>
    <button onClick={chingugigi}>칭구 돼부려</button>
    </div>
  )
}

export default App;
