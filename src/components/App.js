import { BrowserRouter, Routes, Route } from "react-router-dom"
import Movie from "./movie/Movie"
import Head from "./Head/Head"

export default function App() {
    return (
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path="/" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    )
}