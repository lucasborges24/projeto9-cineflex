import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Subtitle from '../../shared/subtitle/Subtitle'
import Loader from '../../shared/loader/Loader'
import React from 'react'
import axios from 'axios'
import Footer from '../../shared/footer/Footer'



export default function Schedule({
    items
}) {
    const { filmeId } = useParams()
    const [dadosFilme, setDadosFilme] = React.useState([])

    React.useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);

        request.then(response => {
            setDadosFilme({ ...response.data })
        })
    }, []);
    if (dadosFilme.length === 0) {
        return <>
            <Subtitle>
                <h2>Selecione o horário</h2>
            </Subtitle>
            <Loader />
        </>

    }
    return (
        <>
            <Subtitle>
                <h2>Selecione o horário</h2>
            </Subtitle>
            <Days days={dadosFilme.days} />
            <Footer>
                <div className="background-image">
                    <img src={dadosFilme.posterURL} alt="" />
                </div>
                <p>{dadosFilme.title}</p>
            </Footer>
        </>
    )
}

function Days({
    days
}) {

    console.log(days)

    return (
        <Horarios>
            {days.map((day, index) => {
                return <Day days={day} key={index} />
            })}
        </Horarios>
    )
}

function Day({
    days
}) {
    return (
        <div className="horario">
            <h3>
                {days.weekday} - {days.date}
            </h3>
            <Hours>
                {days.showtimes.map((time, index) => <Hour hours={time} key={index} />)}
            </Hours>
        </div>
    )
}

function Hour({
    hours,
}) {
    return (
        <Hourinha>
            <p>{hours.name}</p>
        </Hourinha>
    )
}

const Horarios = styled.div`
    margin-left: 24px;
    margin-top: 40px;
    margin-bottom: 137px;
    font-weight: 400;
    letter-spacing: 0.02em;

    h3 { 
        font-size: 20px;
        line-height: 23px;
        color: #293845;
    }

    p { 
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`

const Hours = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 22px 0;
`

const Hourinha = styled.div`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

