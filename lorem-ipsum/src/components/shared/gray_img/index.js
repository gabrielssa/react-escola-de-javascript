import React, {Fragment} from 'react';
import './style.css';

const GrayImg = (props) => {
    return (
        <Fragment>
        <img src={props.img_url} className={props.gray == true ? 'gray-img' : 'color-img'}/>
        </Fragment>
    )
}

export default GrayImg;
