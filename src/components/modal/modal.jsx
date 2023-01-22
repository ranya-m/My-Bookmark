import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./modal.css";
import CloseButton from 'react-bootstrap/CloseButton';

export default class ModalBox extends Component {

  render() {
    const {classProp, closeButton, clicked, save, valuePropName, valuePropLink, onChangeName, onChangeLink, requireName} = this.props;
    
    return <div
      className={classProp}
      style={{ display: 'block', position: 'initial' }}
      >
      <Form id="modalForm" onSubmit={save}> 
          <Modal.Dialog id="modalBox">
            <Modal.Header>
              <Modal.Title id="modalTitle">Title</Modal.Title>
              <CloseButton type='button' id={closeButton} onClick={clicked}/>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                    <Form.Control
                      className="inputField" 
                      placeholder="Enter a title for your bookmark"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={valuePropName}
                      onChange={onChangeName}
                    />
              </InputGroup>  
                    <Form.Label id="urlLabel" htmlFor="basic-url">Website Link</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control className="inputField"  ref= {this.myRef} required type="url" id="basic-url" aria-describedby="basic-addon3" value={valuePropLink}
                      onChange={onChangeLink} />
              </InputGroup>
              <Button id="modalButton" disabled={requireName} type="submit">Save</Button>
            </Modal.Body>
          </Modal.Dialog>   
      </Form>
    </div>
  }
}
