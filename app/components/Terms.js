import React                 from 'react';
import { Link } from 'react-router';
import PropTypes from 'react';


class Terms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            definition: ""
        }
    }
    componentWillMount() {
        this.setState({
            term: this.props.term,
            definition: this.props.definition
        });

    }
    render(){
        return (
            <p>
                <b>{this.state.term}</b>: {this.state.definition}
            </p>
        )
    }
}
export default Terms;
