import React       from 'react';
import { Link }    from 'react-router';
import {TitleLine} from '../styles';

class TitleContainer extends React.Component {
    render() {
        return (
            <div style={TitleLine}>
                {this.props.children}
            </div>
        )
    }
}

export default TitleContainer;
