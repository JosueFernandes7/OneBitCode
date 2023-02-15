import React, { Fragment } from 'react'
import Planet from './planet'
const Planets = () => {
  return (
    <Fragment>
      <Planet
        name={'Mercúrio'}
        text="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
        href="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
      />
    </Fragment>
  )
}

export default Planets
