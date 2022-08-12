import React from 'react'
import { CryptoThumbnails } from './assets/Coininfo';

export default function TableCoin({ data }) {
  const getThumbnailByID = (symbol) => {
    let th = null;
    CryptoThumbnails.map(e => {
      if (e.symbol == symbol) {
        th = e.th;
        return;
      }
    })
    return th;
  }
  return (
    <tr>
      <th scope='row'><img className='img-thumbnail bg-dark border-0' width="40px" src={getThumbnailByID(data.symbol)} alt={data.symbol + "icon"} /></th>
      <td scope='row'>{data.priceUsd.split(".")[0].concat("." + data.priceUsd.split(".")[1].substring(0, 4) + "$")}</td>
      <td scope='row' className={`${data.changePercent24Hr.charAt(0) == "-" ? ("text-danger") : ("text-success")}`}>{data.changePercent24Hr.split(".")[0].concat("." + data.changePercent24Hr.split(".")[1].substring(0, 2) + "%")}</td>
      <td scope='row'>{data.marketCapUsd.split(".")[0].concat("." + data.marketCapUsd.split(".")[1].substring(0, 4) + "$")}</td>
    </tr>
  )
}
