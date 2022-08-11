import React, { useState } from 'react'
import { CryptoThumbnails } from './assets/Coininfo'

export default function Coin( { data } ) {
  const [hoverBackground, setHoverBackground] = useState("");
  const getThumbnailByID = (symbol) => {
    let th = null;
    CryptoThumbnails.map(e => {
      if(e.symbol == symbol){
        th = e.th;
        return;
      }
    })
    return th;
  }
  return (
    <div  className={`col-md-12 row ${hoverBackground}`} onMouseEnter={() => setHoverBackground("bg-secondary")} onMouseLeave={() => setHoverBackground("")}>
      <div className="col-md-4 row">
        <div className="col-6 ">
          <img src={getThumbnailByID(data.symbol)} className='img-thumbnail border border-1 border-info rounded-pill' width="50px" style={{backgroundColor: 'transparent'}} alt={`${data.symbol} thumbnail`} />
        </div>
        <div className="col-6 text-light">
          {data.name} and {data.priceUsd.split(".")[0].concat("."+data.priceUsd.split(".")[1].substring(0,4)+"$")}
        </div>
      </div>
      
    </div>
      )
}
