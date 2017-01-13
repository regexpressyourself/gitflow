import React       from 'react';
import { Link }    from 'react-router';

class TermsContainer extends React.Component {
    render(){
        return (
                <div>
                    <h3>Commands</h3>
                        {this.props.children}
                </div>
        )
    }
}
export default TermsContainer;
