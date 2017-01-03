import React                 from 'react';
import { ReactRouter, Link } from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Conversational Git</h1>
                <p className="lead">Learn git without the techno babble</p>
                <Link to="/start">
                    <button type="button" className="btn btn-lg btn-black">Get Started</button>
                </Link>
            </div>
        )
    }
}

export default Home;
