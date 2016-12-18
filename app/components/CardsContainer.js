import React,{Component} from 'react';
import {chunk} from 'lodash';
require('styles/cardsContainer.css');

import Card from './Card';

class CardsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }
  componentWillMount(){
    const {items} = this.props;
    let data = chunk(items,4);
    this.setState({data});
  }
  render(){
    const {items} = this.props;
    return (
      <div className="cards-container">
        {items.map((item,index)=>{
          return <Card key={index} data={item}/>
        })}
      </div>
    )
  }
}

export default CardsContainer;
