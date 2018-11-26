import React          from 'react';
import { NextStepBox, HomeText } from '../styles';
import { ReactRouter,
         Link }       from 'react-router';

function Home (props){
    // Home is the index page to the site
    return (
        <div>
            <img src="https://smessina.com/images/GitFlowLogo.png" alt="Git Flow"/>
            <p className="lead"><i>Learn git step by step</i></p>
            <br/>
            <p style={HomeText} >
                Git Flow is an interactive flow chart that walks you through the steps needed in order to use git properly.
            </p>
            <Link to="/flow">
                <button type="button"
                        style={NextStepBox}
                        className="btn btn-lg btn-black btn-first">
                    Get to Gitting
                </button>
            </Link>

            <br/>
            <br/>

            <Link to="/about">
                <button type="button"
                        style={NextStepBox}
                        className="btn btn-lg btn-black btn-first">
                   About
                </button>
            </Link>
        </div>
    )
}

export default Home;
