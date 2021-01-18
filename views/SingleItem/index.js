import { Wrapper, FullInfo, Photo, Description, Summary } from './styles'
import Button from '../../components/Button'
import { currencyFormat, objectIsEmpty } from '../../utils'

export default function SingleItem({ item }) {

    const translate = (condition) => {
        switch (condition) {
            case "new":
                return "Nuevo";
            case "used":
                return "Usado";
            default:
                return condition;

        }
    }
    return (
        <>
            {!objectIsEmpty(item) &&
                <Wrapper>
                    <FullInfo>
                        <Photo src={item.picture} />
                        <Description>
                            <h2>Descripcion del producto</h2>
                            <p>{item.description}</p>
                        </Description>
                    </FullInfo>
                    <Summary>
                        <span>{`${translate(item?.condition)} - ${item?.sold_quantity} Vendidos`}</span>
                        <h3>{item.title}</h3>
                        <h1>{currencyFormat(item?.price?.amount)}</h1>
                        <Button type="secondary">Comprar</Button>
                    </Summary>
                </Wrapper>
            }
        </>
    )
}


