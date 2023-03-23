import React from "react";

export default class Search extends React.Component{
    state={
        search: 'panda',
        type: ''
        
    }
    componentDidUpdate(){
        console.log(this.state.search);
    }
    downclick=(e)=>{
        if(e.key==='Enter'){
            this.props.qidiruv(this.state.search, this.state.type)
        }
    }
    hendeclick=()=>{
        this.props.qidiruv(this.state.search, this.state.type)
    }
    radiochange=(e)=>{
        console.log(e.target.dataset.type);
        this.setState({type: e.target.dataset.type})
        setTimeout(()=>{
            this.props.qidiruv(this.state.search, this.state.type)
        })
    }
    render(){
        return(
            <div className="row">
                <div className="input-field-col s12">
                    <input id="search" type='search' className="validate" onChange={(e)=>
                    {this.setState({search: e.target.value})}} onKeyDown={this.downclick} placeholder='Search by title'/>
                    
                    <button className="btn" onClick={this.hendeclick}>Search</button>
                    <div>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='all' onChange={this.radiochange}/>
                        <span>All</span>
                        </label>
                        <label>
                        <input className="with-gap" name="type" type="radio" data-type='movie' onChange={this.radiochange} />
                        <span>Movie</span>
                        </label>
                        <label>
                        <input className="with-gap" name="type" type="radio" data-type='series' onChange={this.radiochange} />
                        <span>Series</span>
                        </label>
                    </div>

                </div>
            </div>
        )
    }
}