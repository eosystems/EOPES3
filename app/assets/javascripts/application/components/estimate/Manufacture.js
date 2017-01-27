import React, {Component, PropTypes} from 'react';

class Manufacture extends React.Component {

    render() {
        let {estimate} = this.props.children;
        return (
            <div>
                Manufacturing time: 10M 12S<br/>
            </div>
        );
    }
}

Manufacture.propTypes = {};

export default Manufacture;

//{blueprintForm.te}
//<Form model="blueprintForm">
//    <Field model="blueprintForm.te">
//        <label>TE:</label>
//        <input type="text"/>
//    </Field>
//</Form>
