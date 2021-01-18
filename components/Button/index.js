import { SecondaryButton } from './styles'
export default function Button({ type, children, onClick }) {
    return (
        <>
            {type === "secondary" &&
                <SecondaryButton onClick={onClick}>
                    {children}
                </SecondaryButton>
            }
        </>
    )
}
