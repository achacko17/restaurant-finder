import React, {Component} from 'react';
//no component
import {Container, Row, Col, Button, Input} from 'reactstrap';
import { Spinner, Card, CardText, CardBody} from 'reactstrap';

//with component
import Dropdown from '../../components/Dropdown/Dropdown'
import NavBar from '../../components/Navbar/NavBar'
// import Card from '../../components/Card/Card'
import './Main.css'
import axios from 'axios'
 
class Main extends Component{

    state={
        data: [],
        result: []
    }

    handleChange = (event)  => {
        console.log(this.state.data)
    //   this.setState({text: event.target.value})
    //   console.log(this.state.text)

    const text = event.target.value.toLowerCase()
      const newResult = []
      for(let index = 0; index < this.state.data.length; index++){
          if(this.state.data[index].categories.name.toLowerCase().includes(text)){
              newResult.push(this.state.data[index])
          }
      }

      this.setState({result:newResult})
    }



    componentDidMount(){
        let config = {
            headers: {"user-key": "0bebf79759ac7e47316ab07b4578eb33"} 
        }
        axios.get( 'https://developers.zomato.com/api/v2.1/categories', config, {} )
            .then( response => {
                this.setState({ data: response.data.categories, result: response.data.categories})
                console.log(response.data)
            } )
            .catch(error => {
                console.log(error);
            });
    }

    renderCategories(){
        return this.state.result.map(category => {
            return (
                <Card key={category.categories.name}>
                    <CardBody>
                        <CardText>{category.categories.name}</CardText>
                    </CardBody>
                </Card>
                // console.log(category.categories.name)
            )
        })
    }



    render() {

        let resp = this.state.isLoading ? <Spinner color="secondary" /> : this.renderCategories()

        return(
            <>
            <div>
                <NavBar/>
                <br></br>
               
            </div>
            <Container>
                <Row>
                    <Col md="8">
                        {resp}
                        
                        {this.state.text}
                    </Col>
                    <Col md="4">
                       
                        <Input placeholder="search categories" onChange={this.handleChange}/>
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

