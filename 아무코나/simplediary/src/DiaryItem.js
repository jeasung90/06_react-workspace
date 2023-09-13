const DiaryItem = ({author,title, content, created_date, emotion, id, onDelete}) =>{
    return(
        <div className="DiaryItem">
            <div className="info">
                <span>작성자 : {author} | 그날의 기부니 :{emotion}</span>
                <br/>
                <span className="date"> 작성일 : {new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="title"> 제목 ㅣ {title}</div>
            <div className="content">{content}</div>
            <button onClick={()=>{
                if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                    onDelete(id);
                }
            }}>삭제하기</button>
            <br/>
        </div>
    )
}
export default DiaryItem;