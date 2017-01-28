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

                <Paper style={style} zDepth={0} rouded={false}>
                    <img src={imgSrc}></img><br/>
                    {typeName} x {require}
                </Paper>
                <TextField name="volume" value={volume} floatingLabelText="Volume"/>
                <TextField name="price" defaultValue={price} floatingLabelText="Price"/>
            </div>
        );
    }
}

Material.propTypes = {};

export default Material;
