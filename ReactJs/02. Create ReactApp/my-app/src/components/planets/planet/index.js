import React, { useState,useEffect } from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/index'
import Form from './form'
async function getSatelites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data // retorna um objeto que tem satelites
}
const Planet = (props) => {
  const [satelites, setSatelites] = useState([])

  useEffect(() => {
    getSatelites(props.id).then((data) => {
      setSatelites(data['satelite'])
    })
  }, [props.id])

  const addSatelite = (new_satelite) => {
    setSatelites([...satelites, new_satelite])
  }
  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    )
  else title = <h4>{props.name}</h4>

  return (
    <div>
      {title}
      <hr />
      <DescriptionWithLink
        description={props.description}
        text={props.text}
        link={props.link}
      />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <h4>Satelites</h4>
      <hr/>
      <Form addSatelite={addSatelite}/>
      <ul>
        {satelites.map((satelite, index) => (
          <li key={index}>{satelite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  )
}

export default Planet
