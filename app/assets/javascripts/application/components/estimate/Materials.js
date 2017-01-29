import React, {Component, PropTypes} from 'react';
import Material from './Material';
import RaisedButton from 'material-ui/RaisedButton';

class Materials extends React.Component {
    render() {
        let materials = this.props.children;
        let materialsNode = this.props.data.map(row => {
            return (<Material key={row.key} data={row}/>);
        });

        return (
            <div>
              <div>
                <RaisedButton label="Set Jita Sell Order Price" secondary={true}/>
              </div>
              {materialsNode}
            </div>
        );
    }
}

Materials.propTypes = {};

export default Materials;
