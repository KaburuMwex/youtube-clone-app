import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{
state = {
    searchTerm: '',
}
    handleChange = (event) =>{
        
        this.setState({searchTerm: event.target.value})
    };

    handleSubmit = (event) =>{
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }
render(){
    return(
        
        <Paper elevation={6} className="searchbar" style={{padding:'25px', position:'fixed'}}>
            <form onSubmit={this.handleSubmit} >
                <div className="navbar-top" style={{padding:'10px', fontSize:'30px', background:'#006666', color:'white',
                    fontWeight:'bold' }}>
                        <i class="fa fa-rebel" aria-hidden="true"></i> Kaburu Streaming Center
                    
                </div>
                <TextField fullWidth label="Search..." onChange={this.handleChange}/>
            </form>
        </Paper>
    );
}
}
export default SearchBar;