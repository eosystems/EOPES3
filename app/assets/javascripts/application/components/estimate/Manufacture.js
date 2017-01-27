import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';

class Manufacture extends React.Component {

    render() {
        let {blueprint} = this.props.children;
        return (
            <div>
                <div className="sub-title">Blueprint</div><br/>
                <TextField name="te" value={blueprint.te} floatingLabelText="TE" />
                <TextField name="me" value={blueprint.me} floatingLabelText="ME" />
                <TextField name="runs" value={blueprint.runs} floatingLabelText="RUNS"/>
            </div>
        );
    }
}

Manufacture.propTypes = {};

export default Manufacture;
