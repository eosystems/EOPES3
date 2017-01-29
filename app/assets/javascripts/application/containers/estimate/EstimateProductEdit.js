import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EstimateProductEdit from '../../components/estimate/EstimateProductEdit';
import * as ProductEditActions from '../../actions/estimateProductEdit';

function mapStateToProps(state) {
  return {
    blueprint: state.estimate.blueprint,
    character: state.estimate.character,
    installation: state.estimate.installation,
    tabValue: state.estimate.tabValue,
    handleFavoriteEstimateValue: state.estimate.handleFavoriteEstimateValue,
    materials: state.estimate.materials,
    product: state.estimate.product
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProductEditActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EstimateProductEdit);
