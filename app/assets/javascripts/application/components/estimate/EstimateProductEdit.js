import React, {Component, PropTypes} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Manufacture from './Manufacture';

class EstimateProductEdit extends Component {
    componentWillMount() {
      ;
    }

    constructor(props) {
      super(props);
      this.state = {
        tabValue: 'manufacturing'
      };
    }

    handleChange(value){
      this.setState({
        tabValue: value,
      });
      console.log(value);
    };

    render() {
        const {te, me, price} = this.props;
        return (
            <div>
                <div className="title">
                    Product Estimate
                </div>
                <div className="estimate-summary">
                  Product: Vengence <br/>
                  Profit: 100,000 isk (82.2%)
                </div>
                <Tabs value={this.state.tabValue} onChange={this.tabChange}>
                  <Tab label="Manufacturing" value='manufacturing'>
                    <Manufacture>{this.props}</Manufacture>
                  </Tab>
                  <Tab label="Material" value='material'>
                    <p>material select</p>
                  </Tab>
                </Tabs>
            </div>
        );
    }
}

EstimateProductEdit.propTypes = {
};

export default EstimateProductEdit;
