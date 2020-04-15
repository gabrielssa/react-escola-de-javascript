import React, {Fragment} from 'react';

const DescriptionWithLink = (props) => {
    if (props.link){
        return (
            <Fragment>
            <p>{props.texto}</p>
            <p><a href={props.link}>{props.link}</a></p>

            </Fragment>
        )
    } else{
        return (
            <Fragment>
            <p><u>{props.texto}</u></p>

            </Fragment>
        )
    }
}

export default DescriptionWithLink;
