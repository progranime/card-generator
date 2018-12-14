import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const ModalDetails = ({ isOpen, handleToggleModal, result }) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={handleToggleModal.bind(this, { type: 'detail' })}
        >
            <ModalHeader
                toggle={handleToggleModal.bind(this, { type: 'detail' })}
            >
                Business Card Information
            </ModalHeader>
            <ModalBody>
                <div className="form-group row">
                    <label htmlFor="status" className="form-label col-5">
                        <strong>Status:</strong>
                    </label>
                    <div className="col-15">
                        <p>{result.status_name}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="comments" className="form-label col-5">
                        <strong>Comments:</strong>
                    </label>
                    <div className="col-15">
                        <p>{result.comment ? result.comment : 'N/A'}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="status" className="form-label col-5">
                        <strong>Created By:</strong>
                    </label>
                    <div className="col-15">
                        <p>{result.create_by}</p>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ModalDetails
