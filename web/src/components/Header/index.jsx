import { FiSearch } from 'react-icons/fi'
import { Container, Profile, Brand } from "./styles";
import { Input } from '../Input';

export function Header() {
    return(
        <Container>
            <Brand><h1>RocketMovies</h1></Brand>
            <Input placeholder="Pesquisar pelo título" 
                icon={FiSearch}
            />
            <Profile to="/profile">
                <div>
                    <strong>Adriel Klem</strong>
                    <span>Sair</span>
                </div>
                <img src="https://github.com/AdrielKlem.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}