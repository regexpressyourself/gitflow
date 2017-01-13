import React                 from 'react';
import { ReactRouter, Link } from 'react-router';
import '../styles/main.css';
import { NextStepBox} from '../styles';

class First extends React.Component {
    constructor(props){
        super (props);
    }
    goToFlowchart() {
        window.location.href="/#/flow?steps=start";
    }
    render() {
        return (
            <div>
                <h1>First Things First</h1>
                <p>
                    Before we get to git itself, let's talk more about what it is and how this guide is going to work.
                </p>
                <p>
                    Feel free to <Link to='/flow'>skip this section</Link>.
                </p>
                <div onClick={this.goToFlowchart} className="btn-black btn-first">
                    <h3>
                        Skip this and get to gitting
                    </h3>
                </div>
                <h2>What is Git?</h2>
                <p>
                    Git is a <i><b>version control system</b></i>. As you might have guessed, a version control system keeps track of different versions of files. Git is most often associated with software development, but can be used for any type of file.
                </p>
                <h2>How to Use This Site</h2>
                <p>
                    This site will walk you through a typical git workflow step by step. I will use command line statements here, so you should have some familiarity with the terminal, or Git Bash on windows.
                </p>
                <p>
                    If you're using a GUI instead, you should still be able to follow the steps, but the commands won't apply to you.
                </p>
                <h2>Enough Talk</h2>
                <div onClick={this.goToFlowchart} className="btn-black btn-first">
                    <h3>
                        Get to gitting
                    </h3>
                </div>
            </div>
        )
    }
}

export default First;
