import styled from 'styled-components'
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function FormsUser({
    selecionados,
    dadosSessao,
    name,
    setName,
    cpf,
    setCpf
}) {

    let navigate = useNavigate();

    
    const regexCpfTrue = /^\d{11}$/.test(cpf)
    const ids = selecionados.map(i => Number(i))
    
    function submit(event) {
        event.preventDefault();

        if (selecionados.length !== 0 && name.length !== 0 && regexCpfTrue) {
            const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",{
                ids: ids,
                name: name,
                cpf: cpf
            })

            requisicao.then((response) => {
                navigate("/sucess")
            }).catch(err => err.status)
        }

        if (selecionados.length === 0) {
            alert("Você não selecionou nenhum assento")
        } else if (name.length === 0) {
            alert("Você não digitou seu nome")
        } else if (regexCpfTrue === false) {
            alert("Digite um CPF válido")
        }
    }


    return (
        <Form onSubmit={submit}>
            <label htmlFor="nameFolder">Nome do Comprador:</label>
            <input type="text" required id="namefolder" placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} />

            <label htmlFor="cpfFolder">CPF do comprador:</label>
            <input type="text" required id="cpfFolder" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} />

            {(regexCpfTrue === false && cpf.length >= 11) ?
                <p>CPF inválido, escreva um correto</p>
                :
                <></>
            }

            <button type="submit">Reservar assento(s)</button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 375px;
    margin: 20px auto 147px auto;

    input {
        margin-left: 10px;
        margin-right: 10px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 355px;
        height: 51px;
        padding-left: 18px;
        margin-bottom: 10px;
    }

    input:focus {
        border: 1px solid #D5D5D5;
    }

    input::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
    }

    input, label {
        margin-left: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    button {
        margin: 37px auto 0 auto;
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
    }

    p {
        margin-left: 10px;
        margin-bottom: 15px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #f00;
    }

`