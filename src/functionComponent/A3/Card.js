import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoHeart } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

import "./Card.css";

function Json({title, content,img}) {
    return (
      <div>
        <Container>
        <div class="c1">
        <Row>
        <Col sm={4}> <img src={img} alt="Err" /></Col>
        <Col sm={8}> <h1>{title}</h1><strong>{content}</strong><br/><br/>
        <strong>Price:₹500 </strong>
        <br/><br/>
        <Button variant="secondary">Like <GoHeart/></Button>{' '}
        <Button variant="light">Order <HiOutlineChatBubbleLeftRight/> </Button>{' '} 
        </Col>
      </Row>
      </div>
      </Container>
    
      </div>
    );
  }
  export default function Card() 
  {
    const obj = {title: 'Brownies.', content: "Available : A chocolate brownie or simply a brownie", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXK7uxXstKh2jZIgE7cA_deS_O8C5yNZpsjQ&usqp=CAU"};
  
    return (
      <div>
        <Json title={obj.title} content={obj.content} img={obj.img} />
      </div>
    );
  }



