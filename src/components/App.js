import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import Movie from "./movie/Movie"
import Schedule from "./schedule/Schedule"
import Head from "./Head/Head"
import React from "react"
import axios from "axios"

export default function App() {

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        request.then(response => {
            setItems(response.data);
            // console.log(items)
        })
    }, []);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Head />
            <Routes>
                <Route path="/" element={<Movie items={items}/>} />
                <Route path="/filme/:filmeId" element={<Schedule items={items} />}/>
            </Routes>
        </BrowserRouter>
    )
}