import { useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'
import { Link } from "react-router-dom"
import { api } from '../../services/api';

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from "./styles"

export function Profile() {
    const { user, updateProfile } = useAuth()
       
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder

    const [avatar, setAvatar ] = useState(avatarUrl)
    const [avatarFile, setAvatarFile ] = useState(null)
    
    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated)

        updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        const ImagePreview = URL.createObjectURL(file)

        setAvatarFile(file)
        setAvatar(ImagePreview)
    }

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
                    src={avatar}
                    alt={"Foto do "+user.name} />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                        id='avatar'
                        type="file"
                        onChange={handleChangeAvatar}
                        />
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

                <Button title="Salvar" onClick={handleUpdate}  /*disabled*/ />
            </Form>
        </Container>
    )
}