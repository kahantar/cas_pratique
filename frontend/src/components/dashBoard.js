import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './row';


class DashBoard extends Component {
  render() {
    return (
      <div className="dash">
            <table className="table table-hover table-light">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Category</th>
                        <th scope="col">Score</th>
                        <th scope="col">Status</th>
                        <th scope="col">Client</th>
                    </tr>
                </thead>
                {this.props.allAlert.map(alert => <Row key={alert.id} alert={alert}/>
                )}
            </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		allAlert: state.allAlert,
	}
}

export default connect(mapStateToProps)(DashBoard);