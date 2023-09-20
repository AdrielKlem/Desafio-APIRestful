import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { FiSearch } from 'react-icons/fi'

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { Container, Profile, Brand } from "./styles";
import { Input } from '../Input';

export function Header() {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    return(
        <Container>
            <Brand><h1>RocketMovies</h1></Brand>
            <Input placeholder="Pesquisar pelo título" 
                icon={FiSearch}
            />
            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <span onClick={signOut}>Sair</span>
                </div>
                <a href="/profile">
                    <img
                        src={avatarUrl}
                        alt={"Foto do "+user.name}
                    />
                    </a>
            </Profile>
        </Container>
    )
}