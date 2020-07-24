import React from 'react'
import classes from './deal.module.css';

function Deal(props) {
    
    const discount = {...props.price}
    const amenities=discount.amenties.map((amen,index)=>{
    return <ul key={index}><li><b>{amen}</b></li></ul>
    })
    return (
        <div className={classes.part}>
            <div className={classes.column2}>
            <span className={classes.price}>&#8377; {discount.original_fees}</span>
            <span className={classes.tagLobel}><small className={classes.tag}>{discount.discount}</small></span>
            </div>
            <div className={classes.dprice}>
            &#8377; {discount.discounted_fees}
            </div>
            <div>
                <br/>
            <small style={{color:'rgb(100,100,100)',float:'right'}}>{discount.fees_cycle}</small>
            </div>
            <div className={classes.free}>{amenities}</div>
            
        </div>  
        
    )
}

export default Deal
