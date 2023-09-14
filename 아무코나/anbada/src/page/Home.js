import React, { useState } from "react";
import { Route } from "react-router-dom";
import Appliances from "./appliances";
import Furniture from "./furniture";
import Clothes from "./clothes";
import Props from "./props";

const Home = ({datas}) => {
  const [con, setCon] = useState(1);

  // onClick 핸들러를 수정합니다.
  const changeCon = (result) => {
    setCon(result);
    
  };

  return (
    <div className="Home">
      <div className="header">니 아나바다 아나?</div>
      <p>아나바자회는 사용하던 물건들을 바자회를 통해 나눠써 지구를 위하고 수익금을 전부 기부하여 사람을 위하는 바자회 사이트입니다.</p>

      <div className="buttonList">
        {/* onClick 핸들러를 함수로 래핑하여 넘깁니다. */}
        <button className="btn" id="Appliances" onClick={() => changeCon(1)}>전자제품</button>
        <button className="btn" id="Furniture" onClick={() => changeCon(2)}>가구</button>
        <button className="btn" id="Clothes" onClick={() => changeCon(3)}>옷</button>
        <button className="btn" id="Props" onClick={() => changeCon(4)}>소품</button>
      </div>
      <div className="HomeContent">
        {/* con 상태를 사용하여 어떤 내용을 표시할지 결정할 수 있습니다. */}
        {con === 1 && <div><Appliances datas={datas}/></div>}
        {con === 2 && <div><Furniture datas={datas}/></div>}
        {con === 3 && <div><Clothes datas={datas}/></div>}
        {con === 4 && <div><Props datas={datas}/></div>}
      </div>
    </div>
  );
};


export default Home;
