import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Select from 'react-select';

class Manufacture extends React.Component {
    render() {
        let blueprintOptions = [
            {
                value: '1',
                label: 'Vengeance Blueprint'
            }, {
                value: '2',
                label: 'Vexor Blueprint'
            }
        ];
        let {blueprint, character, installation} = this.props.children;

        // blueprint option change
        function blueprintChange(val) {
            console.log("Selected:" + val.label);
        };

        return (
            <div>
                <div className="sub-title">Blueprint</div><br/>
                <Select name="blueprint-dropdown" defaultValue={blueprint.bpc} options={blueprintOptions} onChange={blueprintChange}/>
                <TextField name="te" defaultValue={blueprint.te} floatingLabelText="TE"/>
                <TextField name="me" defaultValue={blueprint.me} floatingLabelText="ME"/>
                <TextField name="runs" defaultValue={blueprint.runs} floatingLabelText="RUNS"/>
                <br/>

                <div className="sub-title">Character</div><br/>
                <TextField name="industry" defaultValue={character.industry} floatingLabelText="Industry Skill"/>
                <TextField name="advancedIndustry" defaultValue={character.advancedIndustry} floatingLabelText="Advanced Industry Skill"/>
                <br/>

                <div className="sub-title">Installation</div><br/>
                <TextField name="solarSystem" defaultValue={installation.solarSystem} floatingLabelText="Solar System"/>
                <TextField name="manufacturing" defaultValue={installation.manufacturing} floatingLabelText="Manufacturing"/>
                <TextField name="tax" defaultValue={installation.tax} floatingLabelText="Installation Tax"/>

            </div>
        );
    };

}

Manufacture.propTypes = {};

export default Manufacture;
