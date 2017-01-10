import React                 from 'react';
import { ReactRouter, Link } from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Git Flow</h1>
                <p className="lead"><i>Learn git without the techno babble</i></p>
                <br/>
                <p>
            This guide is a step-by-step of just one type of workflow in git. It is by no means an exhaustive illustration, but it should at least get you started on the right track.
                </p>
                    <br/>
                <p>
                    I firmly believe the best way to learn anything, especially git, is through practice. With this guide, you can hopefully learn enough to get to a point where you can practice with confidence.
                </p>
                    <br/>
                <Link to="/first">
                    <button type="button" className="btn btn-lg btn-black">Get Started</button>
                </Link>
            </div>
        )
    }
}

export default Home;
