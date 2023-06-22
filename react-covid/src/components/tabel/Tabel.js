import React from 'react'
import data from '../../utils/constants/provinces';
const jumlah = data.provinces;


const Tabel = () => {
  return (
    <div >
    <h1 >Provinsi</h1>
    <h3 >Data Covid Berdasarkan Provinsi</h3>
    
    <table>
      <thead>

      <tr>

      <th>No.</th>
      <th>Provinsi</th>
      <th>Positif</th>
      <th>Di Rawat</th>
      <th>Sembuh</th>
      <th>Meninggal</th>
      </tr>

      </thead>
      <tbody>
        {
          jumlah.map((data,index)=>{
            return(
              <tr>
                <td>{index +1}</td>
                <td>{data.kota}</td>
                <td>{data.kasus}</td>
                <td>{data.sembuh}</td>
                <td>{data.dirawat}</td>
                <td>{data.meninggal}</td>
              </tr>
            )
          })
        }


      </tbody>
    </table>

    </div>
  )
}

export default Tabel