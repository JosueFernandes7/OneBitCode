import React, { Fragment } from 'react'
import Planet from './planet'

const clickOnPlanet = (name) => {
  console.log(`um click no planeta ${name}`)
}
const Planets = () => {
  return (
    <Fragment>
      <h3>Plantet List</h3>
      <button >Show Message</button>
      <Planet
        title_with_underline = {true}
        name={'Mercúrio'}
        text="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
        href="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        clickOnPlanet = {clickOnPlanet}
        gray = {true}
      />
      <Planet
        name={'Plutao'}
        text="Plutao é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        clickOnPlanet = {clickOnPlanet}
        gray = {false}
      />
    </Fragment>
  )
}

export default Planets
