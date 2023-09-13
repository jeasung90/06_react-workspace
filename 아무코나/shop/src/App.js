
import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar, Nav,Form, FormControl,Container,Row,Col} from 'react-bootstrap';
import {data} from "./data.js";
import { useState } from 'react';
import { Routes,Route,Link } from "react-router-dom";

function App() {

 

  let [shose] = useState(data);
  
  return (
    <div className="App">


        <Button variant='primary'>시연남친후보 노조가입</Button>{' '}
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">시연남친후보 노조총회</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="detail">Cart</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">금색</Button>
    </Form>
  </Navbar>

  <Link to="/">홈</Link>
  <Link to="/detail">상세페이지</Link>
  <Link to="/about">어바웃페이지</Link>
  
  <Routes>
      <Route path='/' element={
      <>
      <div>메인페이지임</div>
      <div className='main-bg' >
        {/* style={{backgroundImage:'url('+ddack+')'}}로 인라인으로 넣을 수도 있음 지금은 css에서 넣어줌 */}
        {/* 임폴트도 해줘야함  */}
      </div>
      <Container>
      <Row>
      {
        shose.map((s, i)=> {
        return(
          <Shop shose={shose[i]} i={i+1} />

        )
          
        })
      }

      </Row>
    </Container>
      </>
      }/>
      <Route path='/detail' element={<div>상세페이지임</div>}/>
      <Route path='/about' element={<div>어바웃페이지임</div>}/>
    </Routes>
  
</>

    </div>
  );

  function Shop(props){
    return (
      <Col sm key={props.shose.id}>
        <img src={"https://lovesykkkk.github.io/shoes"+props.i+".jpg"} width={'80%'} />
        <h4>{props.shose.title}</h4>
        <p>{props.shose.content}</p>
      </Col>
    );
  }

}

export default App;
