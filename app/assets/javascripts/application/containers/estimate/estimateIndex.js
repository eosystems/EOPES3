import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import estimateIndex from '../../components/estimateIndex';
import * as EstimateActions from '../../actions/estimate';

function mapStateToProps(state) {
  return {
    //counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EstimateActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(estimateIndex);
