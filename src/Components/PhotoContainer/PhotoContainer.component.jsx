import './photoContainer.styles.css'
import  Image from '../Image/image.component'
import { useState } from 'react'

const PhotoContainer = ({props}) => {
console.log(props)
     
    return (
      <div className="photo-container">
        <div className="photoCard">
            {props.map(res => {
                return (
                  <Image props = {res}/>
                );
            })}
          
        </div>
      </div>
    );
}

export default PhotoContainer