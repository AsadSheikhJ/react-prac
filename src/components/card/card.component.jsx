import { Component } from 'react';
import './card.style.css';

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    const { monsID } = this.props.monsterID;
    return (
      <div className='card-container' key={`${id}`} id={`${id}`}>
        <img
          alt={`monster ${name}`}
          src={`https://robohasf.org/${id}?set=set3&size=50x50`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
