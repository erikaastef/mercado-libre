import styled from 'styled-components'
import Router from 'next/router'

export default function Breadcrumb({ categories }) {
    return (
        <Wrapper>
            {categories.length ?
                categories.map((category, index) => (
                    <>
                        <a onClick={() => Router.push(`/items?category=${category.id}`)}>{category.name}</a> {index !== categories.length - 1 ? ' > ' : ''}
                    </>
                ))
                : ''}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    color:${({ theme }) => theme.colors.gray};
    a{
        cursor:pointer;
        transition: color .2s ease-in-out;
        :hover{
            color:${({ theme }) => theme.colors.black};
        }
    }
`
