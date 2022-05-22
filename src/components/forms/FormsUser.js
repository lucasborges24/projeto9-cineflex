import styled from 'styled-components'
import React from 'react'


export default function FormsUser() {

    const [name, setName] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const regexCpfTrue = /^\d{11}$/.test(cpf)
    console.log(regexCpfTrue)
    function submit(event) {
        event.preventDefault();
        alert("oi meu chapa")
    }


    return (
        <Form onSubmit={submit}>
            <label htmlFor="nameFolder">Nome do Comprador:</label>
            <input type="text" required id="namefolder" placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} />
            
            <label htmlFor="cpfFolder">CPF do comprador:</label>
            <input type="text" required id="cpfFolder" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} />
            {(regexCpfTrue === false && cpf.length >= 11) ?
                <p>cpf inválido, escreva um correto</p>
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

`