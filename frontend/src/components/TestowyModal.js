import React, { Component } from 'react';
import { Popover,Button,Tooltip,Modal,OverlayTrigger } from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';


class TestowyModal extends Component{



      componentWillMount(){

        this.setState({
            showModal:false
        })
      };
    
      close() {
        this.setState({ showModal: false });
      }
    
      open() {
        this.setState({ showModal: true });
      }
    
      render() {
        const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
        const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
        );

        
    
        return (
          <div>
    
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.open.bind(this)}
              
            >
              Launch demo modal 
            </Button>
    
            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
               <div>
               
               tu bedzie form
            
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    };

    export default TestowyModal;
