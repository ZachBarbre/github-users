import React from 'react';
import './Card.css'

const Card = (props) => {

    return(
        <div className='userCard'>
            <img alt='GitHub Avatar' src={props.avatar_url} />
            <div className='userName'>{props.name}</div>
            <a href={`http://${props.blog}`}>{props.blog}</a>
        </div>
    )
}

export default Card;