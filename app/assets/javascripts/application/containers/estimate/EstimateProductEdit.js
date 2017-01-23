import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EstimateProductEdit from '../../components/estimate/EstimateProductEdit';
import * as ProductEditActions from '../../actions/estimateProductEdit';

function mapStateToProps(state) {
  return {
    materials: state.materials
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductEditActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EstimateProductEdit);
