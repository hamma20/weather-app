import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Alert.css';
import Snackbar from '@material-ui/core/Snackbar';

const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <Snackbar open={true} autoHideDuration={2000}  >
<div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
          </Snackbar>
          
    
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
