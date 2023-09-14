import './App.css';
import { Routes,Route,Link,useNavigate  } from "react-router-dom";
import Newbaja from './page/newbaja';
import Home from './page/Home';
import { useRef, useState } from 'react';
import data from './data';


function App() {
  const [datas,setDatas] = useState(data);

  const dataId = useRef(13);

  const onCreate = (category,title, content, price,url,local) =>{
    const newItem={
      local,
      category, 
      title, 
      content, 
      price, 
      url,
      status:'y',
      id : dataId.current
    }

    dataId.current += 1;
    setDatas([newItem,...datas]);
  }

  const navi = useNavigate();

  const linkhome = ()=>{
    navi("/")
  }
  const linknewbaja =()=>{
    navi("/newbaja");
  }
  const linksponsor =()=>{
    navi("/sponsor");
  }

  

  return (
    <div className="App">
      <div className='menu'>
        <div className='logotop'></div>
        <div className='logo' onClick={linkhome}>아나<br/>바자회</div>
        <div className='home'onClick={linkhome}>홈</div>
        <div className='newbaja' onClick={linknewbaja}>바자회 상품등록</div>
        <div className='newbaja' onClick={linksponsor}>바자회 후원하기</div>

        
      </div>
      <div className='body'>
      <Routes>
          <Route path='/' element={<Home datas={datas}/>}/>
          <Route path='/newbaja' element={ <Newbaja/>}/>
          <Route path='/sponsor' element={ <> <div className='sponsor'> 신한은행 010-3653-9302 윤재성</div><br/><p>환경을 위해 좋은곳에 쓰겠습니다.</p></>}/>
        </Routes>
      </div>





    </div>
  );
}

export default App;
