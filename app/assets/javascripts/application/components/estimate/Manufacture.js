import React, {Component, PropTypes} from 'react';

class Manufacture extends React.Component {

    render() {
        let {blueprint} = this.props.children;
        return (
            <div>
                Manufacturing time: 10M 12S<br/>
              {blueprint.te}
            </div>
        );
    }
}


Manufacture.propTypes = {};

export default Manufacture;
