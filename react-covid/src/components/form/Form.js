import React, { useState } from 'react'
import image from "../../assets/img2.png";
import data from '../../utils/constants/provinces';
import Alert from '../alert/Alert';

const Form = () => {
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
    <div>
      <img src={image}></img>
      <h1>Form Covid</h1>

      <div>
        <form onSubmit={handleSubmit}> 

        <div>

          <label htmlFor='Provinsi'>Provinsi</label>
          <br>
          </br>
          <select  id='provinsi' value={kota} onChange={handleKota}>
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
        <div >
          <label htmlFor='Status'>Status</label>
          <br>
          </br>
          <select id="status" value={status} onChange={handleStatus}>
            <option>Pilih Status</option>
            <option>Sakit</option>
            <option>Dirawat</option>
            <option>Sembuh</option>
          </select>
          {isStatuError && <Alert>Status Wajib diisi</Alert>}

        
        </div><div >
          <label htmlFor='Jumlah'>Jumlah</label>
          <br>
          </br>
          <input type='text'  value={jumlah} onChange={handleJumlah}></input>
          {isJumlahError && <Alert>Jumkah Wajib diisi</Alert>}

        </div>
        <button>Submit</button>
        </form>
      </div>
      </div>
  )
}

export default Form