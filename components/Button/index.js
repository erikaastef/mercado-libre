import { SecondaryButton } from './styles'

export default function Button({ type, children, onClick, ...props }) {
    return (
        <>
            {type === "secondary" &&
                <SecondaryButton onClick={onClick} {...props}>
                    {children}
                </SecondaryButton>
            }
        </>
    )
}
