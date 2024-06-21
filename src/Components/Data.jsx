import React, {useState, useEffect} from 'react'
import Table from './Table'
import Chart from './ChartApp'
// import MockData from "../data";




const Data = () => {
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [price, setPrice] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if(res.status !== 200) {
            throw new Error("Check the url");
        }
        const result = await res.json();
        const labell = result.map((item)=> {
            return item.category;
        })
        const price = result.map((item)=> {
            return item.price;
        })
        setData(result);
        setLabels(labell);
        setPrice(price);
        console.log(result);
        console.log(labell);
        console.log(price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='relative tab w-4/5 py-6 flex  mx-auto'>
        <Table MockData={data} />
        <Chart price = {price} labels = {labels} />
    </div>
  )
}

export default Data