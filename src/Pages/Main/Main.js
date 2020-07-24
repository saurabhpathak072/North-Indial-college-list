import React, { Component } from 'react'
import Axios from 'axios';
import CollegeList from '../../Components/CollegeList/CollegeList'
import Loader from '../../Components/Loader/Loader';
export default class Main extends Component {
    state={
        colleges:null
    }
    componentDidMount(){
        Axios.get(`https://north-india-college-list.firebaseio.com/colleges.json`)
        .then(res=>{
            this.setState({
                colleges:res.data
            });
        })
        .catch(err=>console.log(err))
    }

    render() {
        let collegeList;
        if(this.state.colleges)
        {collegeList = <CollegeList list={this.state.colleges}/>
        }
        else{
            collegeList=<Loader />
        }
        return (
            <div>
               <h3 style={{margin:'50px 35px',fontWeight:'400'}}>Colleges in North India</h3>
            {collegeList}
            </div>
        )
    }
}

