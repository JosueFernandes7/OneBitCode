import React from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/index'

const Planet = (props) => {


  let title;
  if(props.title_with_underline) 
    title = <h4><u>{props.name}</u></h4>
  else 
    title = <h4>{props.name}</h4>
  
  return (
    <div>
      {title}
      <hr />
      <DescriptionWithLink description = {props.description} text = {props.text}link={props.link} />
      <GrayImg img_url={props.img_url} gray = {props.gray}/>
      <hr/>
    </div>
  )
}

export default Planet
