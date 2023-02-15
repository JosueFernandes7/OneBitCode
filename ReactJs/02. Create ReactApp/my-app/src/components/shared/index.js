import React, {Fragment} from "react"

const DescriptionWithLink = (props) => {
  if (props.href) {
    return (
      <Fragment>
        <p>{props.text}</p>
        <p><a href={props.href}> {props.href}</a></p>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <p>
          <u>{props.text} </u>
        </p>
      </Fragment>
    )
  }
}

export default DescriptionWithLink
