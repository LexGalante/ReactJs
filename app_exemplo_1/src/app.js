'use strict'
import React, { Component } from 'react'
import Title from './title'
import Span from './span'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'
import Step from './step'
import Form from './form'

class App extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
            text: 'BláBláBláBláBláBláBlá'
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return true;
    }

    render() {
        return (
            <div className="container">
                <Step color="green" number={1} text="do tipo Classe" />
                <Title
                    name="Alex Galante"
                    age={29}
                    active={true}
                    address={{
                        street: 'XPTO',
                        number: 100
                    }} />

                <Step color="blue" number={2} text="do tipo Funcional" />
                <Span text="Seja bem-vindo" />

                <Step color="yellow" number={3} text="atraves de uma Listas" />
                {['blue', 'red', 'green', 'yellow'].map((color) => (
                    <Square
                        key={color}
                        backgroundColor={color}
                        height="100px"
                        width="150px" />
                ))}

                <Step color="red" number={4} text="utilizando prop CHILDREN" />
                <Button>
                    <Span text="Botão" />
                </Button>

                <Step color="pink" number={5} text="manipulando Eventos" />
                <LikeButton handleClick={() => console.log('like-button')} />
                <SearchButton handleClick={() => console.log('search-button')} />

                <Step color="brown" number={6} text="manipulando State" />
                <strong onClick={() => this.setState({ text: Math.random() })}>
                    {this.state.text}
                </strong>

                <Step color="dark" number={7} text="formulário" />
                <Form />
            </div>
        )
    }
}

// const App = React.createClass({
//     render: function () {
//         return (
//             <div className="container">
//                 <Title
//                     name="Alex Galante"
//                     age={29}
//                     active={true}
//                     address={{
//                         street: 'XPTO',
//                         number: 100
//                     }} />
//                 <Span text="Seja bem-vindo" />
//             </div>
//         )
//     }
// })

export default App