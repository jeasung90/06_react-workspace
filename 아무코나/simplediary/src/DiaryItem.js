import { useState,useRef } from "react";

const DiaryItem = ({author,title, content, created_date, emotion, id, onRemove,onEdit}) =>{
    const handleRemove =  ()=>{
            if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                onRemove(id);
            }
        }
    
    const localContentInput = useRef();
    const [isEdit,setIsEdit] = useState(false);
    const toggleIsEdit = () => { setIsEdit(!isEdit)}
    const [localContent, setLocalContent] = useState(content)

    const handelQuitEdit = ()=>{
        setIsEdit(false);
        setLocalContent(content);
    }
    const handleEdit = ()=> {
        if(localContent.length < 5){
            localContentInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
            onEdit(id,localContent);
            toggleIsEdit();
        }
    }

    return(
        <div className="DiaryItem">
            <div className="info">
                <span>'{id}'번째 일기</span> <br/>
                <span>작성자 : {author} | 그날의 기부니 :{emotion}</span>
                <br/>
                <span className="date"> 작성일 : {new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="title"> 제목 ㅣ {title}</div>
                {/* {content} */
                    isEdit == true ? (<>
                     <textarea ref={localContentInput} value={localContent} onChange={(e)=>{setLocalContent(e.target.value)}}/>
                    <button onClick={handelQuitEdit}>수정취소</button>
                    <button onClick={handleEdit}>수정완료</button>
                    </>) : (<>
            <div className="content">
                    {content}
            </div>
                    <button onClick={handleRemove}>삭제하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                    </>)
                }
{/* <textarea value={localContent} onChange={(e)=>{setLocalContent(e.target.value)}}/> */}
           
            <br/>
        </div>
    )
}
export default DiaryItem;