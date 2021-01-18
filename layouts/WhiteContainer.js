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
                <ContentGrid className="wrapper">
                    <BreadCrumb>{`Stand > In > Bread > Crumb`}</BreadCrumb>
                    <ContentWrapper >
                        {children}
                    </ContentWrapper>
                </ContentGrid>
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
const BreadCrumb = styled.div`
    color:${({ theme }) => theme.colors.gray}
`
const ContentGrid = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: auto;
    gap:16px;
    padding:20px 0 50px;
`
const ContentBackground = styled.div`
    background:${({ theme }) => theme.colors.lightGray};
    min-height: calc(100vh - 60px);
    width:100%;
`
const ContentWrapper = styled.div`
    background:${({ theme }) => theme.colors.white};
    min-height: 80vh;;
    border-radius:4px;
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