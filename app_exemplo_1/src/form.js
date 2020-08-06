import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idade: 29,
            sexo: "X",
            ativo: true,
            texto: "Olás"
        }
    }

    render() {
        return (
            <form
                onSubmit={(e) => {
                    console.log(e)
                    e.preventDefault()
                }}
                onChange={(e) => {
                    console.log(e.target.name)
                    console.log(e.target.value)
                }}>
                <legend>Formulário</legend>
                <fieldset>
                    <label htmlFor="nome">Nome: </label>
                    <input id="nome" name="nome" value="Valor Fixo" />
                    <br />
                    <label htmlFor="idade">Idade: </label>
                    <input
                        id="idade"
                        name="idade"
                        value={this.state.idade}
                        onChange={(e) => {
                            this.setState({
                                idade: e.target.value
                            }, () => console.log('alterado'))
                        }} />
                    <br />
                    <label htmlFor="sexo">Sexo: </label>
                    <select
                        id="sexo"
                        name="sexo"
                        value={this.state.sexo}
                        onChange={(e) => this.setState({ sexo: e.target.value })}>
                        <option value="X" >Selecione</option>
                        <option value="M" >Masculino</option>
                        <option value="F" >Feminino</option>
                    </select>
                    <br />
                    <label htmlFor="ativo">Ativo:
                        <input
                            id="ativo"
                            name="ativo"
                            type="checkbox"
                            checked={this.state.ativo}
                            onChange={(e) => this.setState({ ativo: !e.target.checked })} />
                    </label>
                    <br />
                    <label htmlFor="especial">Especial:
                        <input id="especial" name="especial" type="radio" value="1" />
                        <input id="especial" name="especial" type="radio" value="2" />
                    </label>
                    <br />
                    <label htmlFor="texto"> Texto Livre:</label>
                    <textarea
                        id="texto"
                        name="texto"
                        value={this.state.texto}
                        onChange={(e) => this.setState({ texto: e.target.value })} />
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default Form


