import { useParams } from 'react-router-dom'
import Subtitle from '../../shared/subtitle/Subtitle'
import Loader from '../../shared/loader/Loader'
import React from 'react'
import axios from 'axios'
import "./style.css"
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
        <div className='horarios'>
            {days.map((day, index) => {
                return <Day days={day} key={index} />
            })}
        </div>
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
            <div className="hours">
                {days.showtimes.map((time, index) => <Hour hours={time} key={index} />)}
            </div>
        </div>
    )
}

function Hour({
    hours,
}) {
    return (
        <div className="hour">
            <p>{hours.name}</p>
        </div>
    )
}

