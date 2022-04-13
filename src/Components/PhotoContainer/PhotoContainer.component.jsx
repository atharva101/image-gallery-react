

const PhotoContainer = ({props}) => {
console.log(props)
     const url = "https://live.staticflickr.com/";

    return (
      <div className="photo-container">
        <div className="photoCard">
            {props.map(res => {
                return (
                  <img key = {res.id}
                    src={`${url}${res.server}/${res.id}_${res.secret}.jpg`}
                    alt={`${res.title}`}
                  />
                );
            })}
          
        </div>
      </div>
    );
}

export default PhotoContainer