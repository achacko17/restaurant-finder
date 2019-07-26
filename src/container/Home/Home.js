import React, {Component} from 'react';
import {Button} from 'reactstrap';
 
class home extends Component{
    state ={}

    nextPage = ()  => {
      this.props.history.push('/main')
    }


    render() {
        return(
            <Button color='primary' onClick={this.nextPage} >Find a Restaurant</Button>
        );
    };
}
export default home;