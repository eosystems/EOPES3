import React, {Component, PropTypes} from 'react';
import { Field, reduxForm} from 'redux-form';

class Manufacture extends React.Component {

    render() {
        let {estimate} = this.props.children;
        return (
            <div>
                Manufacturing time: 10M 12S<br/>
              <form>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" component="input" type="text"></Field>
                </div>
              </form>
            </div>
        );
    }
}

Manufacture = reduxForm({
  form: 'manufacture'
})(Manufacture);

Manufacture.propTypes = {};

export default Manufacture;

//{blueprintForm.te}
//<Form model="blueprintForm">
//    <Field model="blueprintForm.te">
//        <label>TE:</label>
//        <input type="text"/>
//    </Field>
//</Form>
