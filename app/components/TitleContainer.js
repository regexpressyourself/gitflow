import React       from 'react';
import { Link }    from 'react-router';
import {TitleLine} from '../styles';

class TitleContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <div style={TitleLine}>
                </div>
            </div>
        )
    }
}

export default TitleContainer;
