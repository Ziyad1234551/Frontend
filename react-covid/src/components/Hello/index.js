import React from 'react'
import styles from './Hello.module.css';
import data from '../../utils/constants/provinces';
import data2 from '../../utils/constants/indonesia';

const Hello = () => {
  const jumlah = data.provinces;
  const kasus = data2.indonesia;
  return (
    <div>
      <div className={styles.global}>
        <h1 className={styles.title}>Indonesia</h1>
        <h3 className={styles.sub}>Data Covid Berdasarkan Indonesia</h3>
      </div>
      
      <div className={styles.cards}>
        {
          kasus.map((data)=>{
            return(

        <div className={styles.card}>
          <h2 className={styles.body}>{data.status}</h2>
          <h1 className={data.status ==='Positif'?styles.no1 : data.status ==='Sembuh'?styles.no2 :styles.no3}>{data.total}</h1>
        </div>
            )
          })
}
        
        

      </div>
      <div className={styles.province}>
      <h1 className={styles.title2}>Provinsi</h1>
      <h3 className={styles.subtitle2}>Data Covid Berdasarkan Provinsi</h3>
      
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
    </div>
  )
}

export default Hello