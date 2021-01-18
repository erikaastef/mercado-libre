import styled from 'styled-components'

export const SecondaryButton = styled.button`
    cursor:pointer;
    min-height:50px;
    padding:10px;
    width:100%;
    background:${({ theme }) => theme.colors.blue};
    color:${({ theme }) => theme.colors.white};
    font-size: 16px;
    border-radius:4px;
`