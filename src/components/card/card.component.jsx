import { Component } from 'react';
import './card.style.css';

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className='card-container' key={id}>
        <img
          style={{ width: '50px', backgroundColor: 'black' }}
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set3&size=50x50`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
