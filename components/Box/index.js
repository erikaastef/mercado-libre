import styled from 'styled-components'

export default function Box({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background:${({ theme }) => theme.colors.white};
    min-height: 80vh;;
    border-radius:4px;
`