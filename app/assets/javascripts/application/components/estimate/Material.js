import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';
import {fullWhite} from 'material-ui/styles/colors';

const style = {
    height: 64,
    textAlign: 'center',
    display: 'inline-block',
    margin: 20,
    width: 36
};

const shortTextStyle = {
    width: 150
}

const marketButtonStyle = {
    margin: 10
}

class Material extends React.Component {
    render() {
        let {
            key,
            typeId,
            typeName,
            require,
            price,
            volume,
            totalPrice,
            orderType,
            orderSolarSystem
        } = this.props.data;

        // inline text
        let imgSrc = "https://image.eveonline.com/Type/" + typeId + "_32.png";
        let requiredMaterialText = typeName + " x " + require;
        let orderTypeText = orderType + ": " + orderSolarSystem;

        return (
            <div>

                <Paper style={style} zDepth={0}>
                    <img src={imgSrc}></img>
                </Paper>
                <span className="estimate-fixed-text">
                    {requiredMaterialText}
                </span>
                <TextField style={shortTextStyle} name="volume" value={volume} floatingLabelText="Total Volume"/>
                <TextField style={shortTextStyle} name="price" defaultValue={price} floatingLabelText="Unit Price"/>
                <TextField name="totalPrice" value={totalPrice} floatingLabelText="Total Price"/>
                <span className="estimate-text">{orderTypeText}</span>
                <FlatButton label="Market" labelPosition="before" style={marketButtonStyle} icon={< ActionAssessment/>}/>
            </div>
        );
    }
}

Material.propTypes = {};

export default Material;
