import React          from 'react';
import { NextStepBox} from '../styles';
import { ReactRouter,
         Link }       from 'react-router';

function Home (props){
    // Home is the index page to the site
    return (
        <div>
            <h1>Git Flow</h1>
            <p className="lead"><i>Learn git step by step</i></p>
            <br/>
            <p>
                Git Flow is an interactive flow chart that walks you through the steps needed in order to use git properly.
            </p>
            <p>
                It is by no means an exhaustive illustration, but it should at least get you started on the right track.
            </p>
            <h2>How to Use This Site</h2>
            <p>
                This site will walk you through a typical git workflow step by step. I will use command line statements here, so you should have some familiarity with the terminal, or Git Bash on windows.
            </p>
            <p>
                If you're using a GUI instead, you should still be able to follow the steps, but the commands won't apply to you.
            </p>
            <br/>
            <br/>
            <Link to="/flow">
                <button type="button"
                        style={NextStepBox}
                        className="btn btn-lg btn-black btn-first">
                    Get to Gitting
                </button>
            </Link>
        </div>
    )
}

export default Home;
