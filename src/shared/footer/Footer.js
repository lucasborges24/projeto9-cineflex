import styled from 'styled-components'

export default function Footer({
    children
}) {
    return (
        <Footerzinho>
            {children}
        </Footerzinho>
    )
}

const Footerzinho = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    min-width: 375px;
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;

    img {
        width: 48px;
        height: 72px;
    }

    p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    }

    .background-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 0 20px;
    }
`