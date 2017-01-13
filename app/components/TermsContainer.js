import React       from 'react';
import { Link }    from 'react-router';

class TermsContainer extends React.Component {
    render(){
        return (
                <div>
                    <h2>Commands</h2>
                        {this.props.children}
                </div>
        )
    }
}
export default TermsContainer;
