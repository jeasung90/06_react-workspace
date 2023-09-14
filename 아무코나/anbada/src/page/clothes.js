const Clothes =({ datas }) => {
    const data = datas.filter((d)=>d.category === 3)
    return (
      <div className="Appliances" style={{ maxHeight: '550px', overflowY: 'auto' }}>
        {
          
            data.map((d, i) => {
              return (
                <div className="product" key={i}>
                  <img src={data[i].url} className="img" alt={datas[i].title} />
                  <div className="proTitle">{data[i].title}</div>
                  <div>{data[i].local}</div>
                  <div>{data[i].price}원</div>
                </div>
              );
            })
        }
      </div>
    );
  }
  
  export default Clothes;
  