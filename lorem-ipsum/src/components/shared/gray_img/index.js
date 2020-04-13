import React, {Fragment} from 'react';
import './style.css';

const GrayImg = (props) => {
    return (
        <Fragment>
        <img src={props.img_url} class="gray-image"/>
        </Fragment>
    )
}

export default GrayImg;
