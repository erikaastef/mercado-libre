import Router from 'next/router'
import { Wrapper, Divider } from './styles'
import ItemPreview from '../../components/ItemPreview'

export default function SearchResults({ items }) {

    return (
        <Wrapper>
            {items &&
                items.map((item, index) => (
                    <div key={`item-${index}`}>
                        <ItemPreview item={item} onClick={() => Router.push(`/items/${item.id}`)} />
                        <Divider show={items[index + 1] ? "true" : "false"} />
                    </div>
                ))
            }
        </Wrapper>
    )
}

