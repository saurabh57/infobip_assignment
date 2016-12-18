import React,{Component} from 'react';
import {Header,Footer,CardsContainer} from 'components';
import {cardsDefault} from 'sources';
require('styles/main.css');

class App extends Component {
  render(){
    return (
      <div className="container">
        <Header />
        <section className="row"><CardsContainer items={cardsDefault.items}/></section>
        <Footer />
      </div>
    )
  }
}

export default App;
