const Card = (props) => {
  return (
    <div
      key={props.key}
      className="card"
      style={{
        backgroundColor: '#fff',
        color: props.textColor,
        fontSize: props.fontSize,
      }}
    >
      <div className="card-background" style={{backgroundColor: props.backgroundColor}}></div>
      {props.title}
    </div>
  );
};

export default Card;
