import './image.styles.css'

const Image = ( {props}) => {
const url = "https://live.staticflickr.com/";
    return (
      <img
        id="photo-image"
        key={props.id}
        src={`${url}${props.server}/${props.id}_${props.secret}.jpg`}
        alt={`${props.title}`}
      />
    );
}


export default Image;