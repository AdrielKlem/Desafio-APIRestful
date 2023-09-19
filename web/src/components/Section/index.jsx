import { Container } from "./styles"

export function Section({ title, children }) {
    if (title) {
        title = `<h2>${title}</h2>`
    } else {
        title = ''
    }


    return (
        <Container>
            {title}
            { children }
        </Container>
    )
}