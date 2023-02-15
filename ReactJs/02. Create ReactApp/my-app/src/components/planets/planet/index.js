import React from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/index'

async function getSatelites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data // retorna um objeto que tem satelites
}
class Planet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satelites: [],
    }
  }

  componentDidMount() {
    getSatelites(this.props.id).then(data => {
      this.setState(state => ({
        satelites: data['satelite']
      }))
    })
  }
  render() {
    let title
    if (this.props.title_with_underline)
      title = (
        <h4>
          <u>{this.props.name}</u>
        </h4>
      )
    else title = <h4>{this.props.name}</h4>

    return (
      <div>
        {title}
        <hr />
        <DescriptionWithLink
          description={this.props.description}
          text={this.props.text}
          link={this.props.link}
        />
        <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
        <h4>Satelites</h4>
        <ul>
          {
            this.state.satelites.map((satelite,index) => <li key={index}>{satelite.name}</li>
            )
          }
        </ul>
        <hr />
      </div>
    )
  }
}
export default Planet
