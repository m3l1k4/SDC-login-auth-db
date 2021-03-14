import React from "react"
import axios from 'axios'
import Vehicles from './components/Vehicles'
import Login from './components/Login'


class App extends React.Component {
    state = {
        carList: []
    }

    componentDidMount() {
        axios.get('/vehicles')
            .then(res => {
                this.setState({ carList: res.data })
            })
    }

    render() {
        return (
            <div className="App">

                <div className="cars">
                    <Vehicles vehlist={this.state.carList} />

                </div>
            </div>
        )
    }

}

export default App