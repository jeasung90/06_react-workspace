
import './App.css';
import { Routes,Route,Link } from "react-router-dom";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import DiaryItem from './DiaryItem';
import { useRef, useState } from 'react';

function App() {

  const [data,setData] = useState([]);

  const dataId = useRef(0);

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

  const onDelete = (targetId) => {
    const newDiaryList = data.filter((lt)=> lt.id !== targetId );
    setData(newDiaryList);
    console.log(`${targetId}번째 일기가 삭제되었습니다.`)
  }
  return (
    <div className="App">
      <h2>일기장</h2>
      <Link to="/">홈</Link>/
      <Link to="/add">일기입력</Link>/
      <Link to="/list">일기리스트</Link>
      <Routes>
      <Route path='/' element={<div className='home'></div>}/>
      <Route path='/add' element={
        <DiaryEditor onCreate={onCreate}/>
      }/>
      <Route path='/list' element={
        <DiaryList diaryList={data} onDelete={onDelete}/>
      }/>
    </Routes>
    </div>
  );

}

export default App;
