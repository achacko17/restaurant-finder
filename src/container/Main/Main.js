import React, {Component} from 'react';
//no component
import {Button} from 'reactstrap';
//with component
import Dropdown from '../../components/Dropdown/Dropdown'
import NavBar from '../../components/Navbar/NavBar'
import './Main.css'
 
class Main extends Component{


    render() {
        return(
            <>
            <div>
                <NavBar></NavBar>
                <br></br>
                <Dropdown/>
            </div>
            <Button color='primary' className='fourthButton'>Search</Button>
            </> 
        );
    };
}
export default Main;

