import styled from 'styled-components'
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
    if (items.length === 0) {
        return <Loader />
    } else {
        return (
            <PosterImg>
                {items.map((item, index) => {
                    return <Link to={`/filme/${item.id}`}><img key={index} src={item.posterURL} alt="poster-movie" /></Link>
                })}
            </PosterImg>
        )
    }
}

const PosterImg = styled.div`
    width: 375px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto;
    align-items: center;
    justify-content: space-around;

    img {
        width: 129px;
        height: 193px;
        margin: 10px;
    }
`


