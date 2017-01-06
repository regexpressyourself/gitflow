import React            from 'react';
import { Link }         from 'react-router';
import Terms            from './Terms';
import TermsContainer   from './TermsContainer';
import NextStep         from './NextStep';
import StepTitle        from './StepTitle';
import TwoStep          from './TwoStep';
import TitleContainer   from './TitleContainer';
import TermsDescription from './TermsDescription';
import FlowHeader from './FlowHeader';

class Start extends React.Component {
    render() {
        return (
            <div>
                <FlowHeader>
                    <TitleContainer>
                        <StepTitle>Getting Started</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms term='Repository' >
                            Another word for "project" in git lingo
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <div>
                    <TermsDescription>
                        Git keeps your projects in what's called a <i><b>repository</b></i>, or repo for short. Your repository is all of the files in a given project folder. Where to start with your repository depends on what your project looks like right now.
                    </TermsDescription>

                    <TwoStep>
                        <NextStep
                            link="/flow/clone"
                            buttonText="Cloning a Repo"
                            linkText="clone it" >
                            If you're starting work on someone else's existing project that already uses git, you will need to
                        </NextStep>
                        <NextStep
                            link="/flow/init"
                            buttonText="Initializing a Repo"
                            linkText="initialize your project" >

                            If you're starting your own project, or adding git to a project you've already been working on, you will need to
                        </NextStep>
                    </TwoStep>
                </div>
            </div>
        )
    }
}

export default Start;
