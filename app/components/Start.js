import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isViewed: true
        }
        this.onNextStep = this.onNextStep.bind(this);
    }

    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep,
            isActive:   this.props.isActive
        });
    }

    onNextStep(nextComponent) {
        this.setState({
            isActive: false
        });
        this.state.onNextStep(nextComponent);
    }

    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Getting Started
                </FlowHeader>
                <TermsDescription>
                    Git keeps your projects in what's called a <i><b>repository</b></i>, or repo for short. Your repository is all of the files in a given project folder. Where to start with your repository depends on what your project looks like right now.
                </TermsDescription>

                <NextStepContainer isTwoStep={true}
                                   isActive={this.state.isActive}
                                   leftFunction={() => this.onNextStep("clone")}
                                   rightFunction={() => this.onNextStep("init")}>

                    <span> {/* left option */}
                        I'm starting work on an existing git project
                    </span>
                    <span> {/* right option */}
                        I'm adding git to a project for the first time
                    </span>

                </NextStepContainer>
            </div>
        )
    }
}

export default Start;
