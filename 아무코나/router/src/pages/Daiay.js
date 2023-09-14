import { useParams } from "react-router-dom";

const Diary = ()=>{

    const {id} = useParams();
    console.log(id)
    return(
        <div>
            <h1>다이어리다잉</h1>
            <p>여그서 일기 볼 수 있다잉</p>
        </div>


    )
}

export default Diary;