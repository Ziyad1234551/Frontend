import React, { useState } from 'react'
import styles from "./Footer.module.css";
import image from "../../assets/img2.png";
import data from '../../utils/constants/provinces';
import Alert from '../alert/Alert';
const Footer = () => {
  const provinsi = data.provinces;
  const [dataProvinsi,setDataProvinsi]= provinsi;
  const [status,setStatus] = useState("");
  const [jumlah,setJumlah] = useState("");
  const [kota,setKota] =useState("");
  const [isStatuError,setIsStatusError] = useState(false);
  const [isJumlahError,setIsJumlahError] = useState (false);
  const [isKotaError,setIsKotaError] =useState(false);

  function handleKota(e) {
    setKota(e.target.value);

    
  }
  function handleJumlah(e){
    setJumlah(e.target.value);
  }
  function handleStatus(e){
    setStatus(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();

    if(kota===""){
      setIsKotaError(true);
    }
    else if(jumlah===""){
      setIsJumlahError(true);
    }
    else if(status ===""){
      setIsStatusError(true);
    }

    else{
      setIsJumlahError(true);
      setIsKotaError(true);
      setIsStatusError(true);
    }


  }

  return (
    <div className={styles.formCovid}>
      <img src={image}></img>
      <h1 className={styles.form}>Form Covid</h1>

      <div>
        <form onSubmit={handleSubmit}> 

        <div className={styles.formgroup1}>

          <label htmlFor='Provinsi'>Provinsi</label>
          <br>
          </br>
          <select className={styles.select2} id='provinsi' value={kota} onChange={handleKota}>
            <option>Piih Provinsi</option>
            {
              provinsi.map((data)=>{
                return(
                  <option>{data.kota}</option>
                )
              })
              
            }
          </select>
          {isKotaError && <Alert>Kota Wajib diisi</Alert>}
        </div>
        <div className={styles.formgroup2}>
          <label htmlFor='Status'>Status</label>
          <br>
          </br>
          <select id="status" className={styles.select} value={status} onChange={handleStatus}>
            <option>Pilih Status</option>
            <option>Sakit</option>
            <option>Dirawat</option>
            <option>Sembuh</option>
          </select>
          {isStatuError && <Alert>Status Wajib diisi</Alert>}

        
        </div><div className={styles.formgroup3}>
          <label htmlFor='Jumlah'>Jumlah</label>
          <br>
          </br>
          <input type='text' className={styles.input3} value={jumlah} onChange={handleJumlah}></input>
          {isJumlahError && <Alert>Jumkah Wajib diisi</Alert>}

        </div>
        <button className={styles.tombol}>Submit</button>
        </form>
      </div>
      <div className={styles.footer}>

       <div className={styles.covid}>
        <h1>Covid ID</h1>
       <h3>Developed by ziyad</h3>
       </div>
      </div>
      <div className={styles.group6}>
        <h4>Global</h4>
        <h4>Indonesia</h4>
        <h4>Provinsi</h4>
        <h4>about</h4>
      </div>


      </div>
  )
}

export default Footer