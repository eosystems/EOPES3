import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EstimateProductEdit from '../../components/estimate/EstimateProductEdit';
import * as ProductEditActions from '../../actions/estimateProductEdit';

const initialBlueprint = {
  te: '20',
  me: '10'
};

function mapStateToProps(state) {
  return {
    materials: state.materials,
    blueprintForm: state.blueprintForm
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductEditActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EstimateProductEdit);
