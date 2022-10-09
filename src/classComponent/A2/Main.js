import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Main.css";

import i1 from "../../Images/A2/bg5.jpg";
import i2 from "../../Images/A2/bg3.jpg";
import i3 from "../../Images/A2/bg4.jpg";
class Link extends React.Component {
    render() {
        return (
            <>
                <center><br/><br/><br/><h3><b style={{color:"#778899"}}>FEATURES</b></h3><br/><br/></center>
                <ul>
                  <li>Cool and Refreshing</li><br/>
                  <li>Homemade and Nutty</li><br/>
                  <li>Tempting and Sensational</li><br/>
                  <li>Fruity and Tasty</li><br/>
                  <li>Little Dipper Smacking Bites</li><br/>
                  <li>High Quality product Range</li><br/>
                  <li>Customized for all events</li><br/>
                  <li>Ready to Treat</li><br/>
                  <button class="btn">Wordlesss to describe!</button>
                </ul>
            </>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <>
                <br/>
                <center>
                    <b>Introducing a new line of products. Cakes, Pastry and Bakery Products.</b>
                    <br/><br/>
                    <h4 style={
                        {color: "#594459"}
                    }>We serve for Ocassions!</h4><br/>
                    <div class="row">
                        <div class="col-md-4">
                            <Card style={
                                {width: '18rem'}
                            }>
                                <Card.Img variant="top"
                                    src={i3}/>
                                <Card.Body>
                                    <Card.Title>Weddings</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>We organise special icecreams for wedding ceremonies.</li>
                                            <li>Available in 125ml and 750ml pack with Natural Vanilla, Choconut and Shahi Kesar Pista flavours</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary">Buy now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4">
                            <Card style={
                                {width: '18rem'}
                            }>
                                <Card.Img variant="top"
                                    src={i2}/>
                                <Card.Body>
                                    <Card.Title>Birthday Parties</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>We organise special icecreams for birthday parties.</li>
                                            <li>Available in 125ml and 750ml pack with Natural Vanilla, Choconut and Shahi Kesar Pista flavours</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary">Buy now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4">
                            <Card style={
                                {width: '18rem'}
                            }>
                                <Card.Img variant="top"
                                    src={i1}/>
                                <Card.Body>
                                    <Card.Title>Event Catering</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>We organise special icecreams for catering services.</li>
                                            <li>Available in 35ml, 70ml, 80ml cups with Two in One, Vanilla, Strawberry , Choconut and many more flavours</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary">Buy now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </center>
            </>
        )
    }
}
function Split(props) {
    return (
        <>
            <div className="pane">
                <div className="left">
                    {
                    props.left
                }</div>
                <div className="right">
                    {
                    props.right
                }</div>
            </div>
        </>
    )
}
class Main extends React.Component {
    render() {
        return (
            <Split left={<Link/>}
                right={<Content/>}/>
        )
    }
}
export default Main;
