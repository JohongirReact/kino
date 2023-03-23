import React from "react";
import Kinolar from "../content/Kinolar";
import Loader from "../content/Loader";
import Search from "../content/Search";

export default class Mian extends React.Component {
    state={
        films: [],
        loading: true
    }
    componentDidMount(){
        this.setState({loading: false})
        fetch(`http://www.omdbapi.com/?apikey=8c03acc4&s=panda`)
        .then(response=>response.json())
        .then(date=>this.setState({films: date.Search, loading: true}))
    }
    media=(txt, typ)=>{
        this.setState({loading: false})
        fetch(`http://www.omdbapi.com/?apikey=8c03acc4&s=${txt}${typ==='all' ? " " : `&type=${typ}`}`)
        .then(response=>response.json())
        .then(date=>this.setState({films: date.Search,  loading: true}))
    }
    
    render(){
        return(
            <div className="container ">
            <Search qidiruv={this.media}/>
            
             {this.state.loading ?  <Kinolar films={this.state.films} /> : <Loader /> }

             
            </div>
        )
    }
}