import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`
export const Divider = styled.div`
    display:${({ show }) => show === "true" ? "block" : "none"};
    height:2px;
    border-radius:4px;
    background:${({ theme }) => theme.colors.lightGray};
    margin: 0px 16px;
`
