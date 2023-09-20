import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from "./styles"
import { Link } from "react-router-dom"

export function Profile() {
    const { user } = useAuth()

    useAuth
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft /> Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/AdrielKlem.png" 
                    alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                        id='avatar'
                        type="file" />
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <Input 
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={event => setPasswordOld(event.target.value)}
                />
                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={event => setPasswordNew(event.target.value)}
                />

                <Button title="Salvar" disabled />
            </Form>
        </Container>
    )
}