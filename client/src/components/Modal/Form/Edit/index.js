import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import FormInput from '../../../Form/Input'

const Index = ({ isOpen, handleToggleModal, headerTitle, bodyTitle }) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={handleToggleModal.bind(this, { type: 'formEdit' })}
        >
            <ModalHeader
                toggle={handleToggleModal.bind(this, { type: 'formEdit' })}
            >
                {headerTitle}
            </ModalHeader>
            <ModalBody>
                <p>{bodyTitle}</p>
                <FormInput
                    label="Status"
                    type="text"
                    name="status"
                    id="status"
                />
            </ModalBody>
            <ModalFooter>
                <input
                    type="button"
                    className="btn btn-danger"
                    value="Yes"
                    onClick={handleToggleModal.bind(this, {
                        type: 'formEdit',
                        confirm: true
                    })}
                />
                <input
                    type="button"
                    className="btn btn--secondary"
                    value="No"
                    onClick={handleToggleModal.bind(this, {
                        type: 'formEdit'
                    })}
                />
            </ModalFooter>
        </Modal>
    )
}

Index.defaultProps = {
    isOpen: false,
    handleToggleModal: () => {},
    headerTitle: 'Form Edit',
    bodyTitle: ''
}

Index.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleToggleModal: PropTypes.func.isRequired,
    headerTitle: PropTypes.string,
    bodyTitle: PropTypes.string
}

export default Index
