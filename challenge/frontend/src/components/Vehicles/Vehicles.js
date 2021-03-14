import React, { Component } from 'react';
import axios from 'axios'
import './Vehicles.scss'

class App extends React.Component {

  state = {
    vehicles: []
  }

  componentDidMount() {
    axios.get('/vehicles')
      .then(res => {
        this.setState({ vehicles: res.data })
      })
  }

  // }

  render() {

    return (
      this.state.vehicles.map((vehicle) => {
        return <div key={vehicle.id} >
          <div >
            <div className="car-info">
              <p>Vehicle #{vehicle.id}</p>
              <h2>{vehicle.make} {vehicle.model}</h2>
              <p>{vehicle.year} {vehicle.colour}</p>
              <p>{vehicle.location_description}</p>

            </div>

          </div>
        </div>
      })

    );
  }
}

export default App;