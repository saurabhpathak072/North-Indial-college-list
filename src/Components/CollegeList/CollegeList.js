import React from 'react';
import Colleges from '../Colleges/Colleges';
import InfiniteScroll from "react-infinite-scroller";
import Loader from '../Loader/Loader';
import classes from './CollegeList.module.css';

class CollegeList extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state={
            load:false,
            item:10,
            data:this.props.list,
            hasMore:true,
            loading:false
        }
    }

    showItems= ()=> {
       console.log("showitem",this.state.item);
        const dataList = this.state.data.slice(0,this.state.item);
        // if(this.state.loading){
        //     this.setState({item:dataList.length+10})
        // }
        console.log(dataList,this.state.item);
        const colleges = dataList.map((college,index)=>{
            return <Colleges key={index} college={college}/>
        })
        return colleges;
      }
     
  
  loadMore= async()=> {
      console.log("load more");
      await this.setState({loading:true});
        if(this.state.data.length===50)
        {
           await this.setState({hasMore:false});
            
        }else{
            console.log(this.state.item);
            
               await this.setState((prevstate)=>({item:prevstate.item + 10,loading:!prevstate.loading}));
            
               await this.showItems();
          
        }
       
    }
    showmore = async ()=>{
        await this.setState({
            item:this.state.item+10
        });

        this.showItems();

    }
    handleScroll=(event)=>{
        let scrollTop = event.srcElement.body.scrollTop;
        let clientHeight =event.srcElement.body.clientHeight;
        let scrollHeight=event.srcElement.body.scrollHeight
        if(scrollTop+clientHeight>=scrollHeight){
            console.log("event",clientHeight,scrollHeight)
        }
        
    }
    componentDidMount() {
        
        window.addEventListener('scroll', this.handleScroll);
        
       }
    render(){
        let more;
        if(this.state.item >= 50){
            more=null;
        }
        else{
            more=<button className={classes.showmore} onClick={this.showmore}>Show More</button>
        }
    return (
        <div  style={{overflow:'auto'}}>
           
        <InfiniteScroll
            pageStart={0}
             loadMore={this.loadMore}
            hasMore={this.hasMore}
            loader={<Loader />}
            useWindow={false}
        >
            {this.showItems()}{" "}
            <div className={classes.btn}>
            {more}
            </div>
        </InfiniteScroll>
        </div>
    )
    }
}

export default CollegeList
