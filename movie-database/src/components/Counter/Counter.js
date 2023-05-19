import React, { Component, useEffect } from 'react'
import { useState } from 'react';
function Counter(){
  const [angka,setAngka] = useState(0);
  
  function addAngka(){
    setAngka(angka+1)

  }
  function manipulateDom(){
    console.log("jumlah")
    document.title = `result : ${angka}`;

  }
  useEffect(manipulateDom,[angka]);

  return (
    <div>
      <p>Hasil {angka}</p>
      <button onClick={addAngka}>Add</button>

    </div>
  )
}
export default Counter;