import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Select from 'react-select';
import Materials from './Materials';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const noHeightStyle = {
  height: 0
};

class EstimateResult extends React.Component {
    render() {
        let product = this.props.data.product;
        let estimateResult = this.props.data.result;

        return (
            <div>
                <Materials data={product}></Materials>
                <br/>
                <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn style={{width: 150}}>
                                Total Sell Price
                            </TableRowColumn>
                            <TableRowColumn style={{width: 150}}></TableRowColumn>
                            <TableRowColumn style={{width: 150}}>
                                10000
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                Total Cost
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn>
                                10000
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn>
                                Job Install Cost
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn>1000</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn>
                                Total Material Cost
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn>1000</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                Profit
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn>
                                10000
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                Production Time
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn>
                                10000
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                        </TableRow>

                    </TableBody>
                </Table>
            </div>
        );
    };

}

EstimateResult.propTypes = {};

export default EstimateResult;
