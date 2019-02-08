import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

class Row extends Component {
        state = {
          show: false,
        }
    
      handleClose = () => {
        this.setState({ show: false });
      }
    
      handleShow = () => {
        this.setState({ show: true });
      }

      handleSubmit = () => {
        const doc = new jsPDF();
        doc.text('Id:' + this.props.alert.id, 10, 10);
        doc.text('Category:' + this.props.alert.category, 10, 20);
        doc.text('Score:' + this.props.alert.score, 10, 30);
        doc.text('Status:' + this.props.alert.status, 10, 40);
        doc.text('Client:' + this.props.alert.client, 10, 50);
        doc.text('Summary:' + this.props.alert.summary, 10, 60);
        doc.text('Date:' + this.props.alert.date, 10, 70);        
        doc.save('alert.pdf')
      }
    render() {
      return (
          <>
        <tbody>
            <tr onClick={this.handleShow}>
            <th scope="row">{this.props.alert.id}</th>
                <td>{this.props.alert.category}</td>
                <td>{this.props.alert.score}</td>
                <td>{this.props.alert.status}</td>
                <td>{this.props.alert.client}</td>
        </tr>
        </tbody>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>All Informations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p>Id: {this.props.alert.id}</p>
              <p>Category: {this.props.alert.category}</p>
              <p>Score: {this.props.alert.score}</p>
              <p>Status: {this.props.alert.status}</p>
              <p>Client: {this.props.alert.client}</p>
              <p>Summary: {this.props.alert.summary}</p>
              <p>Date: {this.props.alert.date}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Download
            </Button>
          </Modal.Footer>
        </Modal>
  </>
      );
    }
  }

export default Row;