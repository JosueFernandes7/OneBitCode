import React, { Fragment } from 'react'
import Planet from './planet'
class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [
        {
          name: 'Mercúrio',
          description: 'Mercúrio bla bla bla........',
          img_url:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg',
          link: 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)',
        },
        {
          name: 'Plutão',
          description: 'Plutão bla bla bla........',
          img_url:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg',
          link: 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)',
        },
      ],
    }
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
