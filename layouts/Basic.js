import { useState } from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import Nav from '../components/Nav'

export default function Layout({ children }) {

    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => setSearchValue(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        Router.push(`/items?search=${searchValue}`)
    }

    return (
        <Container>
            <Header>
                <HeaderGrid className="wrapper">
                    <img className="logo" src="/logo.png" onClick={() => Router.push('/')} />
                    <Nav
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        searchValue={searchValue} />
                </HeaderGrid>
            </Header>
            <ContentBackground>
                {children}
            </ContentBackground>
        </Container>
    )
}

const Container = styled.div`
    display: block;
    height: 100%;
    margin: 0;
    min-height: 550px;
    min-width: 320px;
`
const Header = styled.div`
    width:100%;
    background: ${({ theme }) => theme.colors.yellow};
    min-height:50px;
    padding:10px 0px;
`
const ContentBackground = styled.div`
    background:${({ theme }) => theme.colors.lightGray};
    min-height: calc(100vh - 60px);
    width:100%;
`
const HeaderGrid = styled.div`
    display:grid;
    grid-template-columns: auto  1.8fr;
    gap:10px;
    .logo{
        height:40px;
        cursor:pointer;
    }
`