import { BrowserRouter, Routes, Route } from "react-router-dom"
import Movie from "./movie/Movie"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    )
}