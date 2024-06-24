const Card = ({ cardData }) => {
  return (
    <div className="card">
      <h2>{cardData.title}</h2>
      <p>{cardData.content}</p>
    </div>
  );
};

export default Card;