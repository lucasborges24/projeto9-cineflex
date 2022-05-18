import "./style.css"
import Subtitle from "../../shared/subtitle/Subtitle"
import React from "react"
import Loader from "../../shared/loader/Loader"
import { Link } from "react-router-dom"


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
            <div className="poster-img">
                {items.map((item, index) => {
                    return <Link to={`/filme/${item.id}`}><img key={index} src={item.posterURL} alt="poster-movie" /></Link>
                })}
            </div>
        )
    }
}

