import { Link } from "react-router-dom";

const RouteTest = ()=>{
    return(
        <>
        <Link to={"/"}>홈</Link><br/>
        <Link to={"/New"}>일기작성</Link><br/>
        <Link to={"/Edit"}>일기수정</Link><br/>
        <Link to={"/Diary"}>일기조회</Link><br/>
        </>
    )
}
export default RouteTest;