/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import $ from 'jquery';

function App() {

  let post = '역삼 개발자 맛집';
  let [a,b] = useState(['백엔드 언어 추천','클라우드 엔지니어 자격증반','자바스크립트로 구글 입사하는 법','딱대좌 남자친구 대기순서 앞당기는 법!']);

  let [logo, c] = useState('ReactBlog');
  // state 장점 :
  //  - 그냥 변수는 변경시 다시로딩 해야 변경값 표시
  //  - state는 자동 로딩

  let [like,li] = useState([0]);
  let [bed, be] = useState([0]);
  let [modal, setModal] = useState(false);
  [0,1,2].map(function(a){
    return '12'
  })
  let [index, setIndex] = useState(0);
  let [입력값, 입력값변경] = useState('');

  let num = [1,2];
  let j = num[0];
  let k = num[1];
  // 위에 내용을 아래처럼 만들면 간단
  let [i,o] = [1,2];



  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{fontSize:'16px'}}>{logo}</h4>
      </div>
      <button  onClick={ () => {
          let cope = [...a];
          cope[1] = '클라우드 엔지니어 리눅스 특강';
          cope[2] ='자바스크립트 기초강좌';
          b(cope)
          }}>제목변경</button>
      <button onClick={ ()=>{
          let cope = [...a];
          cope.sort()
          b(cope)
      }}>가나다순 정렬</button>


      {/* <div className='list'>
        <h4>{a[0]}</h4><span onClick={ () => clike(0)} >  👍</span> {like[0]} <span onClick={ () => cbed(0)} >  👎</span> {bed[0]} 
        <p>9월 11일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4><span onClick={() => clike(1)} >  👍</span> {like[1]} <span onClick={ () => cbed(1)} >  👎</span> {bed[1]}
        <p>9월 11일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
          setModal(!modal)
          }}>{a[2]}</h4><span onClick={() => clike(2)} >  👍</span> {like[2]}<span onClick={ () => cbed(2)} >  👎</span> {bed[2]} 🤙
        <p>9월 11일 발행</p>
      </div> */}
          
          
      {
        a.map(function(a,i){

          like.push(0);
          bed.push(0);

          return (
            <div className='list'>
              <h4 onClick={()=>{setModal(!modal),setIndex(i)}}>{a}</h4><span onClick={ () => clike(i)} >  👍</span> {like[i]} <span onClick={ () => cbed(i)} >  👎</span> {bed[i]} <button> 삭제</button>
              <p>9월 11일 발행</p>
            </div>
            

          )
        })
      }
      <input onChange={(e)=>{
        입력값변경(e.target.value);
        console.log(입력값);
      }}></input>
      <button onClick={(e)=>{
        let cope = [...a];
        cope.unshift(입력값);
        b(cope);
      }}>입력</button>
   
      {
        // 조건식 ? 참일떄 실행할 코드 : 거짓일 떄 실행할 코드
        // 1 == 1 ? '맞다' : '아니다'
        modal == true ? <Modal a={a} b={b} index={index}/> : null
        

      }
     

    </div>
    
  );
  function clike(i){
    
    let cope = [...like];
    cope[i] = like[i]+1;
    li(cope);
  } 
  function cbed(i){
    let cope = [...bed];
    cope[i] = bed[i]+1;
    be(cope);
  } 
  
}


function Modal(props){
  return(
    <>
    <div className='modal' style={{backgroundColor:'skyblue'}}>
      <h3>{props.a[props.index]}</h3>
      <p>작성일자</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let cope = [...props.a];
        cope[props.index] = '딱대좌 팬클럽';
        props.b(cope)
      }}>딱대좌 입덕</button>
    </div><div>딱대컴퍼니</div>
    </>

  )
}
export default App;

/*
   * JSX 문법 특징
  1. class 속성 부여할 땐 className으로 부여할 것!
  2. 변수 넣을 땐 {중괄호}사용
  3. 스타일 부여할 땐 style={{스타일명:'값'}} 로 표현할 것 
  4. 이벤트 핸들러 달때는 함수 이름을 넣어야 함!!

    * state 만드는 법
  1. import{useState}
  2. useState(보관할 자료)
  3. let [작명1,작명2]
    > 작명1 : state에 보관했던 자료 나옴(내용물)
    > 작명2 : state 변경해주는 함수 보관

    * state 사용 이유
  > 일반변소 : 변경되면 html 자동 랜더링 안됨
  > state    : 변경되면 html 자동 랭더링 됨 

    * state는 언제 쓰나
  > 변동시 자동으로 html에 반영되게 만들고 싶다면
   state 사용할 것!

    * state 변경 법!
  > state변경함수(새로운 state의 값)

    * state 변경함수 특징
  > 기존 state == 신규 state의 경우 변경 안해줌

    * array / object 특징
  > array / object 담은 변수에는 주소값만 저장됨

    * 컨포넌트 만드는 법
  1. function 만들고
  2. return () 안에 html 담기
  3. <함수명></함수명> 쓰기

    * 컨포넌트로 만들면 좋은 것
  1. 반복적인 html 축약할 때
  2. 큰 페이지들 만들 때
  3. 자주 변경되는 것들

    * 컨포넌트의 단점
  1. state 가져다 쓸때 문제가 생김
  
     * 동적인 UI 만드는 방법
  1. HTML, CSS로 미리 디자인 완성
  2. UI의 현재상태를 state로 저장
  3. state에 따라 UI가 어떻게 보일지 작성

      * map 함수 특징
  1. array 자료 갯수만큼 함수안의 코드를 실행해준다.
  2. 함수의 파라미터는 array안에 있던 자료임
  3. return문에 값을 적으면 array안에 담아줌

      * map 함수 특징2 (state와 함께 썻을 때)
  1. 왼쪽의 array 자료만큼 내부코드 실행해줌
  2. retrun (html 코드) => html 코드를 array로 담아줌
  3. 유용한 파라미터 2개 사용 가능

      *부모 -> 자식 state 전송 법!
  1. <자식컴포넌트 작명 ={state이름}> // 부모가 자식 부르는곳에서
  2. props 파라미터 등록 // 자식에서 등록
  3. props.작명 사용


*/