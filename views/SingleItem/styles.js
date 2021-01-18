import styled from 'styled-components'

export const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1.5fr 0.5fr;
    grid-template-areas: "fullInfo summary";
    gap:20px;
    padding:32px;
    @media(max-width:${({ theme }) => theme.device.md}){
        grid-template-columns:1fr;
        grid-template-areas: 
        "summary"
        "fullInfo";
        gap:32px;

    }
`
export const FullInfo = styled.div`
    grid-area:fullInfo;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
export const Photo = styled.img`
    max-width:680px;
    width:100%;
`
export const Description = styled.div`
    h2{
        font-size:28px;
        margin-bottom:32px;
    }
    p{
        color:${({ theme }) => theme.colors.gray};
        font-size:16px;
    }
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