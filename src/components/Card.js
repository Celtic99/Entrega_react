import React from 'react'
import imagen1 from '../assets/img1.jpg'

function Card() {
  return (
    <div>
      <center><img src={imagen1} alt="" /></center>
      <div className="texto">
        <h1> <br />WELCOMEE</h1>
        <p>Lorem ipsum, dolor sitt amet consectetur adipisicing elit. Eligendi sit ad soluta dicta fuga id inventore a, ullam temporibus voluptates sunt perferendis commodi maiores labore, expedita minima, similique tenetur unde.</p>
        <a href="!" className="btn btn-outline-secundary">aaaaa</a>
      </div>
    </div>
  )
}

export default Card
