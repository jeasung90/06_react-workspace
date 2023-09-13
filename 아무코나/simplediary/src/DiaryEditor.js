import { useState,useRef } from "react";


const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();
    const titleInput = useRef();

    const [state, setstate] = useState({
        author :'',
        title:'',
        content:'',
        emotion:1
    });

    const handleChangeState = (e)=>{
        // console.log(e.target.value);
        // console.log(e.target.name);
        setstate({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        if(state.author.length <1){
            authorInput.current.focus(); //재 입력하라고 커서 보내버림
            return;
        }
        if(state.title.length <1){
            titleInput.current.focus();
            return;
        }

        if(state.content.length <1){
            contentInput.current.focus();
            return;
        }
        onCreate(state.author,state.title,state.content,state.emotion);
        setstate({
            author:'',
            title:'',
            content:'',
            emotion:1
        })
        alert("저장ㄱㄱ")
    }


    return (<div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                ref={authorInput}
                value={state.author} 
                name="author" 
                onChange={handleChangeState}
                placeholder="작성자"/>
        </div>
        <div>
            <input 
                ref={titleInput}
                value={state.title} 
                name="title" 
                onChange={handleChangeState}
                placeholder="제목"/>
        </div>
        <div>
            <textarea 
                ref={contentInput}
                value={state.content} 
                name="content" 
                onChange={handleChangeState} 
                placeholder="내용" 
                style={{resize:'none', marginTop:'5px'}}
                />
        </div>
        <div>
            <span>오늘의 기부니 : </span>
            <select name='emotion' value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
    </div>)
}

export default DiaryEditor;