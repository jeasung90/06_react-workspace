import './App.css';
import { Routes,Route,Link,useNavigate } from "react-router-dom";
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Daiay';
import RouteTest from './components/RouteTest';

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
        <RouteTest/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/New' element={<New/>}/>
          <Route path='/Edit' element={<Edit/>}/>
          <Route path='/Diary/:id' element={<Diary/>}/>
        </Routes>
    </div>
  );
}

export default App;
