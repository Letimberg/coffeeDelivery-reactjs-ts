import styled, { css } from "styled-components"

export type ButtonVariant = "primary" | "secondary" | "danger" | "success"

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: "purple",
    secondary: "orange",
    danger: "red",
    success: "green",
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 400px;
    height: 140px;
    border-radius: 4px;
    border: 0;
    margin: 8px;
    cursor: pointer;

    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};

    /*${(props) => {
        return css`
            background-color: ${buttonVariants[props.variant]};
        `
    }}*/
`
