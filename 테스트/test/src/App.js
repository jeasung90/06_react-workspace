import { Routes,Route,Link,useNavigate } from "react-router-dom";
import './App.css';
import { useState } from "react";
import data from "./data";

function App() {
  const [msg,setmsg] = useState(data);

  const [newNsg, setNewMsg] = useState({
    id: '',
    writer : '',
    message:'',
    wDate : ''
  })

  const onChange =(e)=>{
    setNewMsg({
      ...newNsg,
      [e.target.name] : e.target.value
  })
 }

  const test = ()=>{
    setmsg({
      ...msg,
      newNsg
    })
    setNewMsg({
      id: '',
      writer : '',
      message:'',
      wDate : ''

    })
  }

  return (
    <div className="App">
      <Link to="/">홈</Link> / 
      <Link to="/add">뉴 메시지</Link>
    <Routes>
      <Route path='/' element={
        <>
      <div>홈</div>
      <div className="home">
        <table className="table">
          <tr>
            <th>id</th>
            <th>작성자</th>
            <th>메시지</th>
            <th>작성날자</th>
            <th>기타</th>
          </tr>
          
            {
              msg.map((m,i)=>{
                return(
                  <tr>
                    <td>{msg[i].id}</td>
                    <td>{msg[i].writer}</td>
                    <td>{msg[i].message}</td>
                    <td>{msg[i].wDate}</td>
                    <td><button onClick={()=>{
                      let copy = [...msg];
                      copy.splice(i,1);
                      setmsg(copy);
                    }}>삭제</button></td>
                  </tr>
                )
              })
            }
          
        </table>

      </div>
      </>
      
      }/>
      <Route path='/add' element={
        <>
      <div>추가</div>
      <div className="add">
        <input name="id" value={newNsg.id} onChange={onChange} placeholder="id 입력해라"/> <br/>
        <input name="writer" value={newNsg.writer} onChange={onChange} placeholder="너 누구냐"/><br/>
        <input name="message" value={newNsg.message} onChange={onChange} placeholder="할말이 뭐꼬"/><br/>
        작성일 : <input type="date" name="wDate" onChange={onChange} value={newNsg.wDate} /><br/>
        <button onClick={test}>찌끄리</button>
      </div>
      </>
      }/>
    </Routes>
        




    </div>
  );
}



export default App;
