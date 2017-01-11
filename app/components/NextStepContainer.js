import React            from 'react';

class NextStepContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            bodyText: ""
        }
    }
    componentDidMount() {
        this.setState({
            isActive: this.props.isActive
        });
        if (this.props.isActive) {
            this.setState({
                bodyText: this.props.children
            });
        }
    }
    componentWillReceiveProps() {
        this.setState({
            isActive: this.props.isActive
        }, function() {
            if (!(this.props.isActive)) {
                this.setState({
                    bodyText: ""
                });
            }
            else {
                this.setState({
                    bodyText: this.props.children
                });
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.bodyText}
            </div>
        )
    }
}
export default NextStepContainer;
