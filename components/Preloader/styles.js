import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    display:${({ visible }) => visible ? 'flex' : 'none'};
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:${({ theme }) => theme.colors.lightGray};
    height: 100%;
    width: 100%;
    overflow: hidden;
`
export const ProgressBarWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    max-width: 70%;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    margin: 20px auto;
    border: 1px solid${({ theme }) => theme.colors.gray};
    border-radius:4px;
`

const ProgressAnimationSmall = keyframes`
    0% { left: -100%; width: 100%; }
    100% { left: 100%; width: 10%; }
`
const ProgressAnimationLarge = keyframes`
    0% { left: -150%; width: 100%; }
    100% { left: 100%; width: 10%; }
`

export const ProgressBar = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    &:before {
        content: '';
        position: absolute;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.yellow};
        animation: ${ProgressAnimationSmall} 1.5s infinite ease-out;
    }

    &:after {
        content: '';
        position: absolute;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.yellow};
        animation: ${ProgressAnimationLarge} 1.5s infinite ease-in;
    }
`