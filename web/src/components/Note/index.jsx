import { Container } from './styles'
import { Tag } from '../../components/Tag'
import { Star } from "../../components/Star"

export function Note({ data, ...rest }) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Star numberstar={data.numberstar} />
            <p>{data.desc}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map( tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}