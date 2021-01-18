import styled from 'styled-components'


export const SearchNav = styled.form`
    display:flex;
    border-radius:20px;
    width:100%;
`
export const SearchInput = styled.input`
    background:white;
    width:100%;
    padding: 0px 15px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

`
export const SearchButton = styled.button`
    cursor:pointer;
    height:40px;
    width:50px;
    background:${({ theme }) => theme.colors.lightGray};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    img{
        width:15px;
        height:15px;
    }

`
