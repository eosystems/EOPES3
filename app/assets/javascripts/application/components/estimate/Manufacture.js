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
                <Select name="blueprint-dropdown" value={blueprint.bpc} options={blueprintOptions} onChange={blueprintChange}/>
                <TextField name="te" value={blueprint.te} floatingLabelText="TE"/>
                <TextField name="me" value={blueprint.me} floatingLabelText="ME"/>
                <TextField name="runs" value={blueprint.runs} floatingLabelText="RUNS"/>
                <br/>

                <div className="sub-title">Character</div><br/>
                <TextField name="industry" value={character.industry} floatingLabelText="Industry Skill"/>
                <TextField name="advancedIndustry" value={character.advancedIndustry} floatingLabelText="Advanced Industry Skill"/>
                <br/>

                <div className="sub-title">Installation</div><br/>
                <TextField name="solarSystem" value={installation.solarSystem} floatingLabelText="Solar System"/>
                <TextField name="manufacturing" value={installation.manufacturing} floatingLabelText="Manufacturing"/>
                <TextField name="tax" value={installation.tax} floatingLabelText="Installation Tax"/>

            </div>
        );
    };

}

Manufacture.propTypes = {};

export default Manufacture;
