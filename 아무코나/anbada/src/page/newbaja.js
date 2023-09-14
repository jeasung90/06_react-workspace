import { useRef, useState } from "react";

const Newbaja = ()=>{
    const contentInput = useRef();
    const titleInput = useRef();

    const [state, setstate] = useState({
        category :'',
        title:'',
        content:'',
        price:'0',
        url:'',
        local:1,
        state:'y'
    });
    const handleChangeState = (e)=>{
       
        setstate({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    return(
        <>
        <h2 style={{marginTop:'50px'}}>환경을 위한 한걸음 뉴 바자 등록하기</h2>

        <div className="newbajamain">
            <div><span>상품카테고리</span>
             <select name="category" value={state.category} onChange={handleChangeState}>
                <option value={1}>전자제품</option>
                <option value={2}>가구</option>
                <option value={3}>옷</option>
                <option value={4}>용품</option>
            </select></div>
            <div><span>제목 : </span><input value={state.title} name="title" placeholder="상품명을 포함한 간단한 제목"/></div>
            <div><span>설명 : </span><textarea 
                ref={contentInput}
                value={state.content} 
                name="content" 
                onChange={handleChangeState} 
                placeholder="상품에 대한 내용" 
                style={{resize:'none', marginTop:'5px'}}
                /></div>
            
        </div>
        </>
    )
}
export default Newbaja;