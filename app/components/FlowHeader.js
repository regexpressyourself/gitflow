import React        from 'react';
import { TermsBg } from '../styles';
import {StepTitleStyle} from '../styles';
import TitleContainer from './TitleContainer';
import TermsContainer    from './TermsContainer';
import StepTitle         from './StepTitle';

class FlowHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            terms: "",
            isViewed: false
        }
    }
    componentDidMount() {
        if (Array.isArray(this.props.children)){
            if (this.props.children.length === 2) {
                // Both a title and 1 command was passed
                this.setState({
                    title: this.props.children[0],
                    terms: <TermsContainer>
    {this.props.children[1]}
                    </TermsContainer>,
                    isViewed: this.props.isViewed
                });
            }
            else if (this.props.children.length === 3) {
                // Both a title and 2 commands were passed
                this.setState({
                    title: this.props.children[0],
                    terms: <TermsContainer>
                        { this.props.children[1] } +
                        { this.props.children[2] }
                    </TermsContainer>,
                    isViewed: this.props.isViewed
                });
            }
        }
        else if (this.props.children) {
            // No "Commands" section
            this.setState({
                title: this.props.children,
                isViewed: this.props.isViewed
            });
        }
    }
    render() {
        return (
            <div className="row flex">
                <div className="col-xs-6" style={StepTitleStyle}>
                    <TitleContainer>
                        <StepTitle>
                            {this.state.title}
                        </StepTitle>
                    </TitleContainer>
                </div>

                <div className="col-xs-6" style={TermsBg}>
                        {this.state.terms}
                </div>
            </div>
        )
    }
}

export default FlowHeader;
