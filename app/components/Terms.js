import React     from 'react';
import { Link }  from 'react-router';
import PropTypes from 'react';


class Terms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }
    componentWillMount() {
        this.setState({
            term: this.props.term
        });

    }
    render(){
        // this.props.children holds the definition of a term
        return (
            <p>
                <b>{this.state.term}</b>: {this.props.children}
            </p>
        )
    }
}
export default Terms;
