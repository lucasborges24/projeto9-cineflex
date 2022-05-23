import styled from 'styled-components'

export default function Subtitle ({
    children
}) {
    return (
        <Subtitlestyled>
            {children}
        </Subtitlestyled>
    )
}

const Subtitlestyled = styled.div`
    width: 375px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: calc(67px + 67px) auto 0 auto;
    
    h2 {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`

