import React, { useState,useEffect } from 'react'
import GrayImg from '../shared/gray_img'
import DescriptionWithLink from '../shared/index'
import Form from './form'

import { useParams, useNavigate}  from 'react-router-dom';

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data // retorna um objeto que tem satelites
}
const Planet = () => {
  const [satelites, setSatelites] = useState([])
  const [planet, setPlanet] = useState({});

  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getPlanet(id).then((data) => {
      setSatelites(data['satelite'])
      setPlanet(data['data'])
    })
  }, [planet.id])

  const goToPlanets = () => {
    navigate('/')
  }

  const addSatelite = (new_satelite) => {
    setSatelites([...satelites, new_satelite])
  }
  let title;
  if (planet.title_with_underline)
  title = (
    <h4>
        <u>{planet.name}</u>
      </h4>
    )
    else title = <h4>{planet.name}</h4>
    
    return (
      <div>
      {title}
      <hr />
      <DescriptionWithLink
        description={planet.description}
        text={planet.text}
        link={planet.link}
      />
      <GrayImg img_url={planet.img_url} gray={planet.gray} />
      <h4>Satelites</h4>
      <hr/>
      <Form addSatelite={addSatelite}/>
      <ul>
        {satelites.map((satelite, index) => (
          <li key={index}>{satelite.name}</li>
        ))}
      </ul>
      <hr />
      <button type="button" onClick={goToPlanets}>Voltar a Listagem</button>
    </div>
  )
}

export default Planet
