import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';

class Material extends React.Component {
    render() {
        let {
            key,
            typeId,
            typeName,
            require,
            price,
            volume,
            totalPrice
        } = this.props.data;
        let imgSrc = "https://image.eveonline.com/Type/" + typeId + "_32.png";
        return (
            <div>
                {typeName} x {require}<br/>
                <img src={imgSrc}></img>
                <TextField name="volume" value={volume} floatingLabelText="Volume"/>
                <TextField name="price" defaultValue={price} floatingLabelText="Price"/>
            </div>
        );
    }
}

Material.propTypes = {};

export default Material;
