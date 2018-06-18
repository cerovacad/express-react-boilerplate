import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends Component {
    state = { 
        hello: ''
     }

     componentDidMount = () => {
        axios.get('/api/')
        .then((response) => {
          console.log(response.data)
          this.setState({ hello: response.data.hello })
        })
        .catch((error) => {
          console.log(error)
        })
     }

    render() {
        return (
            <div>
                hello {this.state.hello}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
