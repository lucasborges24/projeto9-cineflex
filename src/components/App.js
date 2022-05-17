import { BrowserRouter, Routes, Route } from "react-router-dom"
import Movie from "./movie/Movie"
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
            <Head />
            <Routes>
                <Route path="/" element={<Movie items={items}/>} />
            </Routes>
        </BrowserRouter>
    )
}