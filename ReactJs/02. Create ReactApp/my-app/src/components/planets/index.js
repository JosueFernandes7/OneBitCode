import React, { Fragment } from 'react'
import Planet from './planet'

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json();
  return data.planets;
} 


class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
    }
  }

  componentDidMount() {
    getPlanets().then(newPlanets => {
      this.setState(state => ({
        planets: newPlanets
      }))
    })
  }

  removeLast = () => {
    let new_planets = [...this.state.planets]
    new_planets.pop()
    this.setState((state) => ({
      planets: new_planets,
    }))
  }
  
  duplicateLast = () => {
    let lastPlanet = this.state.planets[this.state.planets.length - 1];
    this.setState(state => ({
      planets: [...this.state.planets,lastPlanet]
    }))
  }
  render() {
    return (
      <Fragment>
        <h3>Plantet List</h3>
        <button onClick={this.removeLast}>Remover Ultimo</button>
        <button onClick={this.duplicateLast}>Duplicar Ultimo</button>
        {this.state.planets.map((planet, index) => (
          <Planet
            key={index}
            id={planet.id}
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
          />
        ))}
      </Fragment>
    )
  }
}

export default Planets
