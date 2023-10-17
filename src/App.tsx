import { ThemeProvider } from "styled-components"
import { Button } from "./components/button/Button"
import { defaultTheme } from "./styles/themes/default"

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Button variant="primary" />
        </ThemeProvider>
    )
}
