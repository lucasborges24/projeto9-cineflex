import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Subtitle from "../../shared/subtitle/Subtitle"

export default function Sucess({
    dadosSessao,
    selecionados,
    name,
    cpf,
    setCpf,
    setName,
    setDadosSessao,
    setDadosFilme,
    setSelecionados,
    setItems
}) {



    return (
        <>
            <Subtitle>
                <Suces>
                    <h2>Pedido feito</h2>
                    <h2>com sucesso!</h2>
                </Suces>
            </Subtitle>
            <FinalInformation>
                <h3>Filme e sessão</h3>
                <p>{dadosSessao.movie.title}</p>
                <p>{dadosSessao.day.date} - {dadosSessao.name}</p>
            </FinalInformation>
            <FinalInformation>
                <h3>Ingresso(s)</h3>

                {selecionados.map((i, index) => <p>Assento {i % 100}</p>)}
            </FinalInformation>
            <FinalInformation>
                <h3>Comprador</h3>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </FinalInformation>
            <LinkStyled to="/">
                <Button onClick={() => {
                    setName("");
                    setCpf("");
                    setDadosFilme([]);
                    setDadosSessao([]);
                    setSelecionados([]);
                    
                }}>
                    Voltar pra Home
                </Button>
            </LinkStyled>
        </>
    )
}

const Suces = styled.div`
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    h2 {
        color: #247A6B;
        font-weight: 700;
    }
`

const FinalInformation = styled.div`

    margin: 20px;

    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 10px;
    }

    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`

const Button = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 37px auto 50px auto;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        width: 225px;
        height: 42px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        cursor: pointer;
        
`

const LinkStyled = styled(Link)`
    text-decoration: none;
`


