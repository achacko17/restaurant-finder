import React, {Component} from 'react';
//no component
import {Container, Row, Col, Button, Input} from 'reactstrap';
//with component
import Dropdown from '../../components/Dropdown/Dropdown'
import NavBar from '../../components/Navbar/NavBar'
import Card from '../../components/Card/Card'
import './Main.css'
import axios from 'axios'
 
class Main extends Component{

    state={
        data: [],
        text: ' ',
   
    }

    handleChange = (event)  => {
      this.setState({text: event.target.value})
      console.log(this.state.text)
    }

    componentDidMount(){

        let config = {
            headers: {"user-key": "0bebf79759ac7e47316ab07b4578eb33"} 
        }

        axios.get( 'https://developers.zomato.com/api/v2.1/categories', config, {} )

            .then( response => {
                this.setState({ data: response.data})
                console.log(response.data)
            } )
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <>
            <div>
                <NavBar/>
                <br></br>
               
            </div>
            <Container>
                <Row>
                    <Col md="8">
                        {/* <Card/> */}
                        <Input onChange={this.handleChange}/>
                        {this.state.text}
                    </Col>
                    <Col md="4">
                        <Dropdown/>
                        <Button color='primary' className='fourthButton'>Search</Button>
                    </Col>
                </Row>
            </Container>

            
            
            
            </> 
        );
    };
}
export default Main;

