import { useState } from "react"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'

import { BsArrowLeftShort } from 'react-icons/bs'
import { Container, Form, InputArea } from "./styles";

export function New() {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/"><BsArrowLeftShort /> Voltar</Link>
                        <h1>Novo Filme</h1>
                    </header>

                    <Section title="Informações">
                        <InputArea>
                            <Input placeholder="Título" id="title" />
                            <Input placeholder="Sua nota (de 0 a 5)" id="numberstar" />
                            <Textarea placeholder="Observações" id="textarea"/>
                        </InputArea>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() =>  handleRemoveTag(tag)}
                                    />
                                ))
                            }
                                <NoteItem 
                                    isnew
                                    placeholder="Novo Tag"
                                    value={newTag}
                                    onChange={event => setNewTag(event.target.value)}
                                    onClick={handleAddTag}
                                />
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    )
}