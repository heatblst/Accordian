import "../App.css";
import React,{useEffect, useState} from "react";
import {
  Link
} from "react-router-dom";
import {Button,Modal} from 'react-bootstrap'

function ModalComponent(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    document.addEventListener("keydown", event => {
      if(event.key==="Escape")
        handleClose();
    })
  })

  return (
    <>
     <Link to="/page#modal"> <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button></Link>

     <Link to='/'> <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
         <Link to="/"> <Button variant="secondary" onClick={handleClose}>
            {props.footer}
          </Button></Link>
        </Modal.Footer>
      </Modal></Link>
    </>
  );
}

export default ModalComponent;