import React from 'react'
import logo from './logo.svg';

class App extends React.Component{

  state = {
    nome : ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["Luiz", "Sabrina", "Jr", "Pâmela"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)
    
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log('Executou o componentDidMount')
  }

  render(){
    console.log('Executou o render')
    const MeuComboBox = () => this.criaComboBox()
    return (
      <>
        <input className="text-centralizado" type="text" value={this.state.nome} onChange={this.modificarNome} />
        {/* <h1>Hello {this.props.nome} sua idade é {this.props.idade}</h1> */}
        <h1>Hello {this.state.nome} sua idade é {this.props.idade}</h1>
        <MeuComboBox/>
      </>
    )
  }
}

export default App;
