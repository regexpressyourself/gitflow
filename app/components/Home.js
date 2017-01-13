import React                 from 'react';
import { ReactRouter, Link } from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Git Flow</h1>
                <p className="lead"><i>Learn git step by step</i></p>
                <br/>
                <p>
                    Git Flow is and interactive flow chart that walks you through the steps needed in order to use git properly.
                </p>
                <p>
                    It is by no means an exhaustive illustration, but it should at least get you started on the right track.
                </p>
                <br/>
                <br/>
                <Link to="/first">
                    <button type="button" className="btn btn-lg btn-black">Get Started</button>
                </Link>
            </div>
        )
    }
}

export default Home;
