import React from 'react';


const CreateAccountModal = ({}) => (
	<Modal
			isOpen={true}
			onAfterOpen={this.afterOpen}
			onRequestClose={onModal_Close}
			closeTimeoutMS={closeTimeout}
			contentLabel={LocalizedText.LOGIN}
			style={customStyles}
		className={{
			base: 'modal-content login-modal',
			afterOpen: 'modal-content_after-open',
			beforeClose: 'modal-content_before-close'
		}}
		overlayClassName={{
			base: 'modal-overlay',
			afterOpen: 'modal-overlay_after-open',
			beforeClose: 'modal-overlay_before-close'
		}}
	>
		<h1>{LocalizedText.LOGIN} <a href='#' className='icon-close' onClick={onModal_Close} /></h1>
		<div className='modal-body'>
				</div>
		<div className='buttons'>
			<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
			<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.LOGIN} />
		</div>
	</Modal>
);