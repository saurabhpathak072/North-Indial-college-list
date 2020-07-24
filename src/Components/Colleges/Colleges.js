import React from 'react'
import classes from './Colleges.module.css';
 import col from '../../Assets/Images/college_02.jpg';
 import Deal from '../Deal/deal'
 import Promoted from '../Promoted/Promoted'

function Colleges(props) {
    
    const college = {...props.college}
    console.log(college.offertext.slice(51,59));
    // const address = 
   
    const l1=college.famous_nearest_places.slice(0,6);
    const s1=college.famous_nearest_places.slice(6,22);
    const l2 = college.famous_nearest_places.slice(22,28);
    const s2=college.famous_nearest_places.slice(28)
    const l3=college.offertext.slice(7,12);
    const l5=college.offertext.slice(0,5);
    const l4=college.offertext.slice(5,7);
    const l6=college.offertext.slice(12,26);
    const l7=college.offertext.slice(26,31);
    const l8=college.offertext.slice(31,51);
    const l9=college.offertext.slice(51,59);

    const tags=college.tags.map((rag,index)=>{
    return <li key={index} className={classes.bottomLeftlist}>{rag}</li>
    })

    let promoted;
    if(college.promoted){
        promoted=<Promoted promote={college.promoted} />
    }
    else{
        promoted=null;
    }

    return (
        <div className={classes.row}>
            {/* <div className={classes.column}></div>
            {college.college_name} */}
            <div className={classes.card}>
                <div className={classes.banner}>
                <img src={col} className={classes.clgimg} alt='college' />
                <ul className={classes.bottomLeft}>
                {tags}
                </ul>
                <div className={classes.bottomRight}><small><b># {college.ranking}</b></small></div>
                <div className={classes.topRight}><div className={classes.rating}><div style={{textAlign:'center'}}><b style={{fontSize:'large'}}>{college.rating}</b>/5 </div>{college.rating_remarks}</div></div>
                {promoted}
                </div>
                <div className={classes.wrapper}>
                <div className={classes.column1}>
                <div className={classes.container}>
                <div><p className={classes.clgname}><b>{college.college_name} </b>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span></p></div>
            <small><span style={{fontWeight:'400'}}>{college.nearest_place[0]} </span> 
                <span style={{color:'rgb(180,180,200)'}}>
                    | {college.nearest_place[1]}
                </span>
            </small> 
            <p style={{fontSize:'15px',margin:'20px auto'}}>
                <b><span style={{color:'rgb(3, 161, 129)'}}>93% Match : </span></b>
                <b>{l1}</b> <span style={{color:'rgb(180,180,200)'}}>{s1}</span>
                <b>{l2}</b><span style={{color:'rgb(180,180,200)'}}>{s2} </span>
            </p>
                </div>
            <div className={classes.container2}>
        <p className={classes.offer}><span style={{fontWeight:'400'}}>{l5}</span><b>{l4}</b><b style={{color:'rgb(3, 161, 129)'}}>{l3}</b><b>{l6}</b><b style={{color:'rgb(3, 161, 129)'}}>{l7}</b>
        <b>{l8}</b><span style={{color:'blue',fontWeight:'500',fontSize:'15px'}}>{l9}</span>
        </p>
            </div>
            </div>
                <div className={classes.column2}>
                    <Deal price={college}/>
                </div>
                </div>
            </div>
            

        </div>
    )
}

export default Colleges
