import { useEffect, useState } from "react";
import { useActionData, useAsyncValue, useBeforeUnload } from "react-router-dom";

const Lifecycle = ()=>{

    const [count ,setCount]=useState(0);
    const [text, setText] =useState("");

    useEffect(()=>{console.log("Mount")},[])

    useEffect(()=>{
        console.log("update!")
    })

    useEffect(()=>{console.log("unMount"); return()=>{
        //unmount 시점에 실행됨
    }},[])

    useEffect(()=>{
        console.log(`count is update : ${count}`)
        if(count>5){
            alert("이눔식기! 고만 눌러라! 1로 초기화시켜버렸다!")
            setCount(1);
        }
    },[count])

    useEffect(()=>{
        console.log(`text is update : ${text}`)
    },[text])


    return(
        <div style={{padding:20}}>
            <div>
                {count}
                <button onClick={()=>{setCount(count+1)}}>증가</button>
            </div>
            <div>
                <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
            </div>
        </div>
    )
}

export default Lifecycle;