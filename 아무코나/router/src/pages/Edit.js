import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = ()=>{
    const [searchParams, setSearchParams] =useSearchParams();

    const navi = useNavigate();
    const id = searchParams.get('id');
    console.log(id)
    const mode = searchParams.get('mode');
    console.log(mode)
    return(
        <div>
            <h1>에딧이다</h1>
            <p>여그서 일기 수정한다잉</p>
            <button onClick={()=>{navi("/")}}>호므로 가브린다잉</button>
            <button onClick={()=>{navi(-1);}}>뒤로 가부리</button>
        </div>


    )
}

export default Edit;