import React, {Component, PropTypes} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Manufacture from './Manufacture';
import Materials from './Materials';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

const rightStyle = {
  float: 'right'
};

class EstimateProductEdit extends Component {
    componentWillMount() {
      ;
    };

    constructor(props) {
      injectTapEventPlugin();
      super(props);
    };

    render() {
        const {tabValue, tabChange, handleFavoriteEstimate, handleFavoriteEstimateValue} = this.props;

        return (
            <div>
                <div className="title">
                    Product Estimate
                    <FlatButton label="Save" style={rightStyle} primary={true}/>
                    <FlatButton label="Cancel" style={rightStyle} />
                    <FlatButton label="ADD Favorite" style={rightStyle}/>
                    <FlatButton label="Show Favorite" style={rightStyle} onTouchTap={handleFavoriteEstimate} />
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
                <Drawer width={200} openSecondary={true} open={handleFavoriteEstimateValue} >
                    <h3>Favorite Estimate</h3><br/>
                    <li>Vengence</li>
                    <li>Vexor</li>
                </Drawer>
            </div>
        );
    }
}

EstimateProductEdit.propTypes = {
};

export default EstimateProductEdit;
