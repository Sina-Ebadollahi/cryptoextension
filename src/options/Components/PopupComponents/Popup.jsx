import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Coin from "./Coin";
const getCoinData = async () => {
    return (await axios.get('https://api.coincap.io/v2/assets')).data;
}
export default function Popup() {
    const { data, status } = useQuery(['Coin'], getCoinData, {
        staleTime: 1000 * 60 * 2,
    })
    return (
        <div
            style={{ minHeight: "600px", minWidth: "600px" }}
            className="container row bg-dark"
        >
            {data && data.data.map((e, i) => {
                if (i < 10) {
                    return (
                        <>
                            <Coin key={e.id} data={e} />
                        </>
                    )
                }
            })}
        </div>
    );
}
