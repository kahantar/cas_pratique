import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {loadInfo} from '../action/index';


class FormSearch extends React.Component {
    state = {
        client: this.props.allClient,
        status: "new",
        category: ["dark web", "deep web", "connected devices"],
        orderBy: "date",
        search: ""
    }

    getArray = (e) => {
        const options = e.target.options;
        let value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        return value;
    }

    handleChangeClient = async (e) => {
        await this.setState({ client: this.getArray(e) })
    }

    handleChangeStatus = async (e) => {
        await this.setState({ status: e.target.value })
    }

    handleChangeCategory = async (e) => {
        await this.setState({ category: this.getArray(e) })
    }

    handleChangeSearch = async (e) => {
        await this.setState({ search: e.target.value })
    }

    handleChangeOrderBy = async (e) => {
        await this.setState({ orderBy: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.state.client.length === 0)
            await this.setState({ client: this.props.allClient })
        if (this.state.category.length === 0)
            await this.setState({ category: ["dark web", "deep web", "connected devices"] })
        this.props.loadInfo(this.state)
    }
    render(){
        return(
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Row className="justify-content-md-center">
                        <Col md="3">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select Status</Form.Label>
                                <Form.Control onChange={this.handleChangeStatus} as="select">
                                <option value="new">new</option>
                                <option value="investigating">investigating</option>
                                <option value="junk">junk</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Search in summary</Form.Label>
                                <Form.Control onChange={this.handleChangeSearch} placeholder="..." />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Order By</Form.Label>
                                <Form.Control onChange={this.handleChangeOrderBy} as="select">
                                <option value="date">Date</option>
                                <option value="score">Score</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                    <Col md="3">
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Select Client</Form.Label>
                                <Form.Control onChange={this.handleChangeClient} as="select" multiple>
                                {this.props.allClient.map(client => <option key={client} value={client}>{client}</option>)}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group>
                                <Form.Label>Select category</Form.Label>
                                <Form.Control onChange={this.handleChangeCategory} as="select" multiple>
                                <option value="dark web">dark web</option>
                                <option value="deep web">deep web</option>
                                <option value="connected devices">connected devices</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="9">
                            <Button className="submit-btn"variant="primary" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		allClient: state.allClient,
	}
}
const mapDispatchToProps = (dispatch) => {
    return{
        ...bindActionCreators({loadInfo}, dispatch)
    } 
} 
export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);