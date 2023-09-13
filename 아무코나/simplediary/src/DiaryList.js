import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList,onDelete}) => {
    // console.log(diaryList)
    return(
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    diaryList.map((li,i)=>(
                        <DiaryItem key={li.id} {...li} onDelete={onDelete}/>
                    ))
                }
            </div>
        </div>
    )
}
// props 넘어온 값이 잘못됬을 때 에러를 방지
DiaryList.defaultProps ={
    diaryList : []
}

export default DiaryList;