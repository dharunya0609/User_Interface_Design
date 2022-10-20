import  React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {AiOutlineRedo } from "react-icons/ai";

import "./Main.css";
export default class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={title:"Sundaes .",image:"https://cdn.wallpapersafari.com/15/73/I3A5uW.jpg"};
    }
    change=()=>{
        this.setState({title:"Mini chocolate chips.",image:"https://www.willflyforfood.net/wp-content/uploads/2022/05/ice-cream-flavors-mint-chocolate-chip.jpg.webp"});
    }
    render()
    {
        return(
        <>
        <Container>
        <div className="c2">
          <Row>
            <Col sm={4}><img src={this.state.image} alt="Err" height={250} width={300}/></Col>
            <Col sm={8}><h1>{this.state.title}</h1><br/>
            <strong>Available : chocolate sauce or nuts to vanilla ice cream </strong><br/><br/>
            <strong>Price:₹700 </strong>
            <br/><br/>
            <Button variant="light" onClick={this.change}> <b>Change<AiOutlineRedo/></b>  </Button>{' '} </Col>

         </Row>
         </div>
        </Container> 
        </>);
    }
}