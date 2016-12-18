import React,{Component} from 'react';
require('styles/card.css');

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {data} = this.props;
    const style = {
      backgroundImage:`url(${data.imageSrc})`
    }
    return(
      <div className='card col-xs-12 col-sm-6 col-md-3 col-lg-3' style={style}>
          <div className='card-title'><i className="fa fa-cutlery"/>{data.title}</div>
          <div className="card-text" >{data.desc}</div>
          <div className='overlay'>
            <div className='footer'>
                <Button name="Open" icon="pencil"/>
                <Button name="Print" icon="pencil"/>
                <Button name="Delete" icon="pencil"/>
            </div>
          </div>
      </div>
    )
  }
}

const Button = (props)=>{
  const {icon,name} = props;
  return (
    <div className="card-button"><i className={`fa fa-${icon}`} />{name}</div>
  )
}
export default Card;
