import styled from "styled-components"

export default function Head({
    children
}) {
    return (
        <Header>
            {children}
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;

    h1 {
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }

    ion-icon {
        font-size: 30px;
        color: #000;
    }
`

