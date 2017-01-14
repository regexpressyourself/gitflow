import React               from 'react';
import { Link }            from 'react-router';
import PropTypes           from 'react';
import {CommandsContainer} from '../styles';


class Terms extends React.Component {
    // The commands section at the top of each step

    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    componentDidMount() {
        this.setState({
            term: this.props.term
        });
    }

    render(){
        // this.props.children holds the definition of a term
        return (
            <div>
                <p style={CommandsContainer}>
                    <code>
                        <b>$  {this.state.term}</b>
                    </code>
                </p>
                <p>
                    {this.props.children}
                </p>
            </div>
        )
    }
}

export default Terms;
