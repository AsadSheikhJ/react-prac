import { Component } from 'react';
import './card.style.css';

class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className='card-container' key={id}>
        <img
          // src={`https://robohash.org/${id}?set=set2&size=180x180`}
          src={`https://robohasf.org/${id}?set=set3&size=50x50`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
