import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class GistContainer extends Component {

  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  render() {
    const { gist } = this.props;

    const buttonClass = {
      'Saving...': {'style': 'btn-warning', 'icon': 'fa-spin fa-spinner fa-pulse'},
      'Complete': {'style': 'btn-success', 'icon': 'fa-check'},
      'Failed': {'style': 'btn-danger', 'icon': 'fa-x'},
      'Save': {'style': 'btn-primary', 'icon': 'fa-github'}
    }

    const key = gist.save;

    return (
      <div className='col-lg-12'>
        <div className='gist-container'>
          <input
            type='text'
            placeholder='Enter Gist Name'
            onChange={this._handleChange.bind(this)}
            value={this.state.input}
            className='gist-input input-sm'
            disabled={gist.save === 'Saving...'}/>

            <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            <button
              key = {key}
              className={'btn btn-sm gist-button ' + buttonClass[gist.save].style}
              disabled={gist.save === 'Saving...'}
              onClick={this._handleClick.bind(this)}
              type='button'><i className={"fa fa-lg " + buttonClass[gist.save].icon}></i>&ensp;{gist.save}
            </button>
            </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }

  _handleClick(e) {
    e.preventDefault();
    this.props.actions.saveToGist(this.state.input, this.props.editorValue, this.props.language)
  }

  _handleChange(e) {
    this.setState({input: e.target.value})
  }
}

export default GistContainer;
