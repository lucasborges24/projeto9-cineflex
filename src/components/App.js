import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import Movie from "./movie/Movie"
import Schedule from "./schedule/Schedule"
import Head from "./Head/Head"
import React from "react"
import axios from "axios"
import Sessao from "./Section/Sessao"
import Sucess from "./Sucess/Sucess"

export default function App() {

    const [items, setItems] = React.useState([]);
    const [dadosFilme, setDadosFilme] = React.useState([])
    const [dadosSessao, setDadosSessao] = React.useState([])
    const [selecionados, setSelecionados] = React.useState([])
    const [name, setName] = React.useState("");
    const [cpf, setCpf] = React.useState("");


    React.useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        request.then(response => {
            setItems(response.data);
        })
    }, []);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Head />
            <Routes>
                <Route path="/" element={<Movie items={items}/>} />
                <Route path="/filme/:filmeId" element={<Schedule items={items} setDadosFilme={setDadosFilme} dadosFilme={dadosFilme} />} />
                <Route path="/sessao/:sessaoId" element={
                    <Sessao
                        dadosfilme={dadosFilme}
                        dadosSessao={dadosSessao} setDadosSessao={setDadosSessao} selecionados={selecionados} setSelecionados={setSelecionados}
                        name={name}
                        setName={setName}
                        cpf={cpf}
                        setCpf={setCpf}
                    />} />
                <Route path="/sucess" element={
                    <Sucess
                        dadosSessao={dadosSessao}
                        selecionados={selecionados}
                        name={name}
                        cpf={cpf}
                        setCpf={setCpf}
                        setName={setName}
                        setSelecionados={setSelecionados}
                        setDadosSessao={setDadosSessao}
                        setDadosFilme={setDadosFilme}
                        setItems={setItems}
                    />
                } />
            </Routes>
        </BrowserRouter>
    )
}