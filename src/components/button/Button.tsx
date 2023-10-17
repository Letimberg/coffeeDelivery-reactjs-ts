import { ButtonContainer, ButtonVariant } from "./Button.styles"
import logo from "../../assets/logo.png"

interface ButtonProps {
    variant?: ButtonVariant
}

export function Button({ variant = "primary" }: ButtonProps) {
    return (
        <ButtonContainer variant={variant}>
            <img src={logo} alt="" /> Desafio Rocketseat em construção
        </ButtonContainer>
    )
}
