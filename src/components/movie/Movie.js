import styled from 'styled-components'
import Subtitle from "../../shared/subtitle/Subtitle"
import Head from '../Head/Head'
import React from "react"
import Loader from "../../shared/loader/Loader"
import { Link } from "react-router-dom"


export default function Movie({
    items
}) {



    return (
        <>
            <Head>
            <h1>CINEFLEX</h1>
            </Head>
            <Subtitle>
                <h2>Selecione o filme</h2>
            </Subtitle>
            <Movies items={items} />
        </>
    )
}

function Movies({
    items
}) {
    if (items.length === 0) {
        return <Loader />
    } else {
        return (
            <PosterImg>

                {items.map((item, index) => {
                    return <Link to={`/filme/${item.id}`}>
                        <div className="backgroundImage">
                            <img key={index} src={item.posterURL} alt="poster-movie" />
                        </div>
                    </Link>
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

    .backgroundImage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 15px 20px;

    }
`




