import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Select from 'react-select';
import Materials from './Materials';

class EstimateResult extends React.Component {
    render() {
        let product = this.props.data.product;
        return (
            <div>
                <Materials data={product}></Materials>
                <br/>
            </div>
        );
    };

}

EstimateResult.propTypes = {};

export default EstimateResult;
