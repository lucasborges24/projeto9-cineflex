import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Subtitle from '../../shared/subtitle/Subtitle'
import Loader from '../../shared/loader/Loader'
import React from 'react'
import axios from 'axios'
import Footer from '../../shared/footer/Footer'
import { Link } from 'react-router-dom'
import FormsUser from '../forms/FormsUser'


export default function Sessao({
    dadosfilme,
    dadosSessao,
    setDadosSessao,
    selecionados,
    setSelecionados,
    name,
    setName,
    cpf,
    setCpf,
}) {
    const { sessaoId } = useParams()



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
    console.log(sessaoId)
    return (
        <>
            <Subtitle>
                <h2>Selecione o(s) assentos </h2>
            </Subtitle>
            <Section
                seats={dadosSessao.seats}
                selecionados={selecionados}
                setSelecionados={setSelecionados}
            />
            <FormsUser
                selecionados={selecionados}
                setSelecionados={setSelecionados}
                sessaoId={sessaoId}
                dadosSessao={dadosSessao}
                name={name}
                setName={setName}
                cpf={cpf}
                setCpf={setCpf}
            />
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
    seats,
    selecionados,
    setSelecionados
}) {


    return (
        <Seats>
            {seats.map((seat, index) => {
                return <Seat
                    key={index}
                    seats={seat.name}
                    available={seat.isAvailable}
                    setSelecionados={setSelecionados}
                    selecionados={selecionados}
                    seatsid={seat.id}
                />
            })}
            <Classification>
                <div className="position">
                    <div className="bolotinha green"></div>
                    <p>Selecionado</p>
                </div>
                <div className="position">
                    <div className="bolotinha gray"></div>
                    <p>Disponível</p>
                </div>
                <div className="position">
                    <div className="bolotinha yellow"></div>
                    <p>Indisponível</p>
                </div>
            </Classification>
        </Seats>
    )
}

function Seat({
    seats,
    available,
    setSelecionados,
    selecionados,
    seatsid
}) {


    // console.log(seatsid)
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

    function chairSelected(id, seatsid) {
        if (disponivel === false) {
            alert('aí n meu chapa')
        } else if (disponivel === true) {
            setDisponivel(seats)
            const selecionado = [...selecionados, seatsid]
            setSelecionados(selecionado)
        } else if (seats === id) {
            setDisponivel(true)
            const selecionado = selecionados.filter(id => id !== seatsid)
            setSelecionados(selecionado)
            console.log(selecionados)
        }
    }

    return (
        <Chair color={color} border={border} onClick={() => chairSelected(seats, seatsid)}>
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

const Classification = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 375px;

    .position{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px auto;
    }

    .position p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

    .bolotinha {
        width: 25px;
        height: 25px;
        border-radius: 17px;
        margin-bottom: 5px;
    }

    .green {
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
    }

    .gray {
        background: #C3CFD9;
        border: 1px solid #7B8B99;
    }

    .yellow {
        background: #FBE192;
        border: 1px solid #F7C52B;  
    }
`