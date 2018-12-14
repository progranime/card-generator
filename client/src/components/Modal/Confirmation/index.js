import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const Index = ({ isOpen, handleToggleModal, headerTitle, bodyTitle }) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={handleToggleModal.bind(this, { type: 'confirmation' })}
        >
            <ModalHeader
                toggle={handleToggleModal.bind(this, { type: 'confirmation' })}
            >
                {headerTitle}
            </ModalHeader>
            <ModalBody>
                <p>{bodyTitle}</p>
            </ModalBody>
            <ModalFooter>
                <input
                    type="button"
                    className="btn btn-danger"
                    value="Yes"
                    onClick={handleToggleModal.bind(this, {
                        type: 'confirmation',
                        confirm: true
                    })}
                />
                <input
                    type="button"
                    className="btn btn--secondary"
                    value="No"
                    onClick={handleToggleModal.bind(this, {
                        type: 'confirmation'
                    })}
                />
            </ModalFooter>
        </Modal>
    )
}

Index.defaultProps = {
    isOpen: false,
    handleToggleModal: () => {},
    headerTitle: 'Are you sure?',
    bodyTitle: 'Are you sure to delete this item?'
}

Index.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleToggleModal: PropTypes.func.isRequired,
    headerTitle: PropTypes.string,
    bodyTitle: PropTypes.string
}

export default Index
