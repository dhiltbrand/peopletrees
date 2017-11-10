import React, { Component } from 'react';
import Modal from 'react-modal'

import LocalizedText from '../assets/localizedText';

let closeTimeout = 0;

class LoginModal extends Component {
	constructor(props) {

		super(props);
		this.afterOpen = this.afterOpen.bind(this);
		this.requestClose = this.requestClose.bind(this);

		this.state = {
      		modalIsOpen: true
    	};
	}

	render() {
		return (
			<Modal
  				isOpen={this.state.modalIsOpen}
  				onAfterOpen={this.afterOpen}
 				onRequestClose={this.requestClose}
  				closeTimeoutMS={closeTimeout}
  				contentLabel={LocalizedText.LOGIN}
			>
				<div className='icon-close' onClick={this.requestClose}></div>
				<form>
					<label for='username'>{LocalizedText.USERNAME}</label>
					<input name='username'></input>
					<label for='password'>{LocalizedText.PASSWORD}</label>
					<input name='password' type='password'></input>
					<input type='submit'></input>
				</form>
			</Modal>
		);
	}

	afterOpen() {

	}

	requestClose() {
		this.setState({modalIsOpen: false});
	}
}

export default LoginModal;