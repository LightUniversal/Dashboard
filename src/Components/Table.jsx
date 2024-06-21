import React, { useEffect, useState } from "react";


const Table = ( { MockData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://dummyjson.com/products";


//   setData(MockData());
  

  return (
    <div className="overflow-x-auto p-4">
        <h2 className=" text-3xl my-3 mx03">
            Product Details Table
        </h2>
      <table className="min-w-full bg-white">
        <thead className="bg-blue-500  text-white">
          <tr>
            <th className="w-1/3 px-4 py-2">Category</th>
            {/* <th className="w-1/3 px-4 py-2">Decription</th> */}
            <th className="w-1/3 px-4 py-2">Price</th>
            <th className=" px-4 py-2 w-20">Title</th>
            <th className="w-1/3 px-4 py-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {MockData.map((item, index) => (
            <tr className="whitespace-nowrap" key={index}>
              <td className="px-4 py-2 border text-center">{item.category}</td>
              {/* <td className="px-4 py-2 border">{item.description}</td> */}
              <td className="px-4 py-2 border text-right">{item.price}</td>
              <td className="px-4 py-2 border w-2 text-wrap text-ellipsis ">{item.title}</td>
              <td className="px-4 py-2 border text-right">{item.rating.rate}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
