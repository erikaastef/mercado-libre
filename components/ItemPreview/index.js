import { Container, Thumbnail, Info, Specs } from "./styles"
import { currencyFormat } from '../../utils'

export default function ItemPreview({ item, onClick }) {
    return (
        <Container onClick={onClick}>
            <Thumbnail src={item.picture} />
            <Info>
                <Specs shipping={item.free_shipping ? "true" : "false"}>
                    <h1>{currencyFormat(item.price.amount)} <img className="shipping" src="/shipping.png" /></h1>
                    <h2>{item.title}</h2>
                </Specs>
                <span>{item.address}</span>
            </Info>
        </Container>
    )
}
