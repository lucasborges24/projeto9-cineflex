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

    const [selecionados, setSelecionados] = React.useState([])
    console.log(selecionados)
    return (
        <Seats>
            {seats.map((seat, index) => {
                return <Seat
                    key={index}
                    seats={seat.name}
                    available={seat.isAvailable}
                    setSelecionados={setSelecionados}
                    selecionados={selecionados}
                />
            })}
        </Seats>
    )
}

function Seat({
    seats,
    available,
    setSelecionados,
    selecionados
}) {

    let color;
    let border;

    const [disponivel, setDisponivel] = React.useState(available)
    
    if (disponivel === false) {
        color = "#FBE192";
        border = "#F7C52B"
    } else {
        if (disponivel === true) {
            color = "#C3CFD9";
            border = "#808F9D"
        } else {
            color = "#8DD7CF";
            border = "#45BDB0"
        }
    }

    function chairSelected(id) {
        if (disponivel === false) {
            alert('aí n meu chapa')
        } else if (disponivel === true) {
            setDisponivel('selecionado')
            const selecionado = [...selecionados, id]
            setSelecionados(selecionado)
        }
    }

    return (
        <Chair color={color} border={border} onClick={() => chairSelected(seats)}>
            <p>{seats}</p>
        </Chair>
    )
}

const Seats = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 375px;
    margin: 20px auto;
`

const Chair = styled.div`
    width: 26px;
    height: 25px;
    background: ${props => props.color};
    border: 1px solid ${props => props.border};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px 10px 5px;
    cursor: pointer;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: #000000;
    }
`