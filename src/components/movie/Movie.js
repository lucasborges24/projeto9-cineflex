import "./style.css"
import Subtitle from "../../shared/subtitle/Subtitle"
import React from "react"
import Loader from "../../shared/loader/Loader"


export default function Movie ({
    items
}) {
    return (
        <>
            <Subtitle>
                <h2>Selecione o filme</h2>
            </Subtitle>
            <Movies items={items}/>
        </>
    )
}

function Movies ({
    items
}) {
    console.log(items)
    if (items.length === 0) {
        return <Loader />
    } else {
        return (
            items.map((item, index) => {
                return <img key={index} src={item.posterURL} alt="" />
            })
        )
    }
   
}