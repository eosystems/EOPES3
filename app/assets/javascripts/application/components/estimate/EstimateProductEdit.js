import React, {Component, PropTypes} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Manufacture from './Manufacture';
import Materials from './Materials';
import injectTapEventPlugin from 'react-tap-event-plugin';

class EstimateProductEdit extends Component {
    componentWillMount() {
      ;
    }

    constructor(props) {
      injectTapEventPlugin();
      super(props);
    }

    render() {
        const {tabValue, tabChange} = this.props;
        return (
            <div>
                <div className="title">
                    Product Estimate
                </div>
                <div className="estimate-summary">
                  Product: Vengence <br/>
                  Profit: 100,000 isk (82.2%)
                </div>
                <Tabs value={tabValue} onChange={tabChange}>
                  <Tab label="Manufacturing" value='manufacturing'>
                    <Manufacture>{this.props}</Manufacture>
                  </Tab>
                  <Tab label="Material" value='material'>
                    <Materials data={this.props.materials}></Materials>
                  </Tab>
                </Tabs>
            </div>
        );
    }
}

EstimateProductEdit.propTypes = {
};

export default EstimateProductEdit;
