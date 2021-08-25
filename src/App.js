import React from 'react'
import "./App.css"
import Character from './components/Character';

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      characters: []
    }
  }

  componentDidMount = () => {
  
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then(result => this.setState({ characters: result }))
  }
     
	render() {
    console.log("App.js render this.state -->", this.state);

		return(

      <>
			<h1>Game of thronessssss</h1>
      <Character/> {this.state.characters.map((item) => <Character/> )}
      </> 
      
		)
	}
}

export default App
