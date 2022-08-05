import "./WrongItem.css";

function WrongItem(props) {
  const classes = `guessnime-wrong-item ${props.isActive}`;

  return <li className={classes}>{props.name}</li>;
}

export default WrongItem;
