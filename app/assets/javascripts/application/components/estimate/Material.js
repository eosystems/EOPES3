import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
  height: 64,
  textAlign: 'center',
  display: 'inline-block',
  margin: 20,
  width: 150
};

const shortTextStyle = {
  width: 150
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
        let imgSrc = "https://image.eveonline.com/Type/" + typeId + "_32.png";
        return (
            <div>

                <Paper style={style} zDepth={0}>
                    <img src={imgSrc}></img><br/>
                    {typeName} x {require}
                </Paper>
                <TextField style={shortTextStyle} name="volume" value={volume} floatingLabelText="Total Volume"/>
                <TextField style={shortTextStyle} name="price" defaultValue={price} floatingLabelText="Unit Price"/>
                <TextField name="totalPrice" value={totalPrice} floatingLabelText="Total Price"/>
                <span className="estimate-text">{orderType} : {orderSolarSystem}</span>
            </div>
        );
    }
}

Material.propTypes = {};

export default Material;
