import React from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/index'

const Planet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <hr />
      <DescriptionWithLink text={props.text} href={props.href} />
      <GrayImg img_url={props.img_url} />
    </div>
  )
}

export default Planet
