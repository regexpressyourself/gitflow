import React          from 'react';
import { Link }       from 'react-router';
import Terms          from './Terms';
import TermsContainer from './TermsContainer';
import NextStep       from './NextStep';
import StepTitle      from './StepTitle';
import TitleContainer from './TitleContainer';

class Start extends React.Component {
    render() {
        return (
            <div>
                <TitleContainer>
                    <StepTitle>Getting Started</StepTitle>
                </TitleContainer>
                <TermsContainer>
                    <Terms term='Repository' >
                        Another word for "project" in git lingo
                    </Terms>
                </TermsContainer>
                <div>
                    <p>
                        Git keeps your projects in what's called a <i><b>repository</b></i>, or repo for short. Your repository is all of the files in a given project folder. Where to start with your repository depends on what your project looks like right now.
                    </p>
                    <NextStep
                        blurb="If you're starting work on someone else's existing project that already uses git, you will need to "
                        link="/clone"
                        buttonText="Cloning a Repo"
                        linkText="clone it"
                    />
                    <NextStep
                        blurb="If you're starting your own project, or adding git to a project you've already been working on, you will need to "
                        link="/init"
                        buttonText="Initializing a Repo"
                        linkText="initialize your project" />
                </div>
            </div>
        )
    }
}

export default Start;
