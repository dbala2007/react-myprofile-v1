import "./styles.css";

function Avatar({ imageURL, imageAlt }) {
  return <img className="avatar" src={imageURL} alt={imageAlt}></img>;
}

export default Avatar;
