import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Subtitle from '../../shared/subtitle/Subtitle'
import Loader from '../../shared/loader/Loader'
import React from 'react'
import axios from 'axios'
import Footer from '../../shared/footer/Footer'
import { Link } from 'react-router-dom'


export default function Sessao({
    dadosfilme,
}) {
    const { sessaoId } = useParams()
    const [dadosSessao, setDadosSessao] = React.useState([])

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)

        promise.then(res => {
            setDadosSessao({ ...res.data })
        })
    }, [])

    if (dadosSessao.length === 0) {
        return <>
            <Subtitle>
                <h2>Selecione o(s) assentos </h2>
            </Subtitle>
            <Loader />
        </>

    }
    console.log(dadosSessao)
    return (
        <>
            <Subtitle>
                <h2>Selecione o(s) assentos </h2>
            </Subtitle>
            <Section seats={dadosSessao.seats} />
            <Footer>
                <div className="background-image">
                    <img src={dadosfilme.posterURL} alt="" />
                </div>
                <div className="paragraph">
                    <p>{dadosfilme.title}</p>
                    <p>{dadosSessao.day.weekday} - {dadosSessao.name}</p>
                </div>
            </Footer>
        </>

    )
}

function Section({
    seats
}) {

    return (
        <Seats>
            {seats.map((seat, index) => {
                return <Seat key={index} seats={seat.name} />
            })}
        </Seats>
    )
}

function Seat({
    seats,
}) {

    console.log(seats)
    return (
        <Chair>
            <p>{seats}</p>
        </Chair>
    )
}

const Seats = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 375px;
    margin: 20px auto;
`

const Chair = styled.div`
    width: 26px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 10px 0;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: #000000;
    }
`