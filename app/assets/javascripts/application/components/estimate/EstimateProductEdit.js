import React, {Component, PropTypes} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Manufacture from './Manufacture';
import {Field, Form, actions} from 'react-redux-form';

class EstimateProductEdit extends Component {
    render() {
        const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;
        return (
            <div>
                <div className="title">
                    Product Estimate
                </div>
                <div className="estimate-summary">
                  Product: Vengence <br/>
                  Profit: 100,000 isk (82.2%)
                </div>
                <Tabs>
                  <Tab label="Blueprint">
                    <Manufacture>{this.props}</Manufacture>
                  </Tab>
                  <Tab label="Material">
                    <p>material select</p>
                  </Tab>
                </Tabs>


            </div>
        );
    }
}

EstimateProductEdit.propTypes = {};

export default EstimateProductEdit;
