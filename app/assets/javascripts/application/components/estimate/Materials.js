import React, {Component, PropTypes} from 'react';
import Material from './Material';

class Materials extends React.Component {
    render() {
        let materials = this.props.children;
        let materialsNode = this.props.data.map(row => {
            return (<Material key={row.key} data={row}/>);
        });

        return (
            <div>{materialsNode}</div>
        );
    }
}

Materials.propTypes = {};

export default Materials;
