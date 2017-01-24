import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <AppBar title="EOPES" iconClassNameRight="muidocs-icon-navigation-expand-more" onTouchTap={this.handleRequestClose}/>
                      {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

App.propTypes = {};

export default App;
