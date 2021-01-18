import { SearchButton, SearchInput, SearchNav } from './styles'


export default function Nav({ onSubmit, searchValue, onChange }) {


    return (
        <SearchNav onSubmit={onSubmit}>
            <SearchInput
                type="text"
                value={searchValue}
                placeholder="Nunca dejes de buscar"
                onChange={onChange}
            />
            <SearchButton type="submit">
                <img src="/search-icon.png" />
            </SearchButton>
        </SearchNav>
    )
}
