import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';

class Main extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500} >
                    <div className="jumbotron col-sm-12 text-center" >
                        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Main;
