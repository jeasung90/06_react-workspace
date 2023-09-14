
import './App.css';
import { Routes,Route,Link,useNavigate  } from "react-router-dom";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import DiaryItem from './DiaryItem';
import { useRef, useState } from 'react';
import Lifecycle from './Lifecycle';

function App() {

  const [data,setData] = useState([]);

  const dataId = useRef(0);

  const navi = useNavigate ();

  const onCreate = (author,title, content, emotion) =>{
    const created_date = new Date().getTime();
    const newItem={
      author, 
      title, 
      content, 
      emotion, 
      created_date,
      id : dataId.current
    }

    dataId.current += 1;
    setData([newItem,...data]);
  }

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((lt)=> lt.id !== targetId );
    setData(newDiaryList);
    console.log(`${targetId}번째 일기가 삭제되었습니다.`)
  }

  const onEdit = (targetId,newContent)=>{
    setData(
      data.map( (it)=>(
        it.id === targetId ? {...it, content:newContent} : it
      ))
    )
  }

  return (
    <div className="App">
      <Lifecycle/>
      <h2>일기장</h2>
      <Link to="/">홈</Link>/
      <Link to="/add">일기입력</Link>/
      <Link to="/list">일기리스트</Link>
      <Routes>
      <Route path='/' element={<div className='home'></div>}/>
      <Route path='/add' element={
        <DiaryEditor onCreate={onCreate} navi={navi}/>
      }/>
      <Route path='/list' element={
        <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
      }/>
    </Routes>
    </div>
  );

}

export default App;
