const DescriptionWithLink = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <a href={props.href}> {props.href}</a>
    </div>
  )
}

export default DescriptionWithLink
