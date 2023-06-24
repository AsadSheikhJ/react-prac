import './card.style.css';

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className='card-container' key={id}>
      <img
        style={{ width: '50px', backgroundColor: 'black' }}
        alt={`monster ${name}`}
        src={`https://robohasf.org/${id}?set=set3&size=50x50`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
