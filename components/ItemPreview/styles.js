import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex:1;
    width:100%;
    padding:16px;
    cursor:pointer;
`

export const Thumbnail = styled.img`
    max-width:180px;
    width:100%;
    height:180px;
    border-radius:4px;
    margin-right:16px;
`
export const Info = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1.5fr 0.5fr;
    span{
        text-align:right;
        font-size:12px;
    }
    margin-top:32px;
`

export const Specs = styled.div`
    h1{
        display:flex;
        align-items:center;
        font-size:24px;
        margin-bottom:32px;
    }
    h2{
        font-size:18px
    }
    .shipping{
        height: 24px;
        margin-left:10px;
        display:${({ shipping }) => shipping === "true" ? "block" : "none"}
    }

`