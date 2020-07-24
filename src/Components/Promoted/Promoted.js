import React from 'react'
import classes from './Promotes.module.css';

function Promoted(props) {
    return (
        <div className={classes.promoted}>
            <p className={classes.promo}>PROMOTED</p>
        </div>
    )
}

export default Promoted
