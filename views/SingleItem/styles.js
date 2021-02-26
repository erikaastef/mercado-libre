import styled from 'styled-components'

export const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1.5fr 0.5fr;
    grid-template-areas: 
    "photo summary"
    "description auto";
    gap:20px;
    padding:32px;
    .btn-mobile{
        display:none;
        grid-area:button
    }
    @media(max-width:${({ theme }) => theme.device.md}){
        .btn-web{
            display:none;
        }
        .btn-mobile{
            display:block;
        }
        grid-template-columns:1fr;
        grid-template-areas: 
        "summary"
        "photo"
        "description"
        "button";
        gap:32px;

    }
`

export const Photo = styled.img`
    grid-area:photo;
    max-width:600px;
    min-width:200px;
    width:100%;
`
export const Description = styled.div`
    grid-area:description;
    h2{
        font-size:28px;
        margin: 32px 0px;
    }
    p{
        color:${({ theme }) => theme.colors.gray};
        font-size:16px;
    }
    overflow:auto;
`

export const Summary = styled.div`
    grid-area:summary;
    display:flex;
    flex-direction:column;
    span{
        font-size:14px;
        margin-bottom:16px
    }
    h1{
        font-size:46px;
        margin-bottom:32px
    }
    h3{
        font-size:24px;
        margin-bottom:32px
    }
    @media(max-width:${({ theme }) => theme.device.md}){
        button{
            width:50%;
            min-width:200px;
        }
    }
   
`