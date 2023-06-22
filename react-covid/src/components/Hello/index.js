import React from 'react'
import data from '../../utils/constants/provinces';
import data2 from '../../utils/constants/indonesia';

const Hello = () => {
  const kasus = data2.indonesia;
  return (
    <div>
      <div >
        <h1 >Indonesia</h1>
        <h3 >Data Covid Berdasarkan Indonesia</h3>
      </div>
      
      <div >
        {
          kasus.map((data)=>{
            return(

        <div>
          <h2 >{data.status}</h2>
          <h1>{data.total}</h1>
        </div>
            )
          })
}
        
        

      </div>
     
    </div>
  )
}

export default Hello