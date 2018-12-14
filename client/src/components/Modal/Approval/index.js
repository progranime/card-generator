import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import FormSelect from '../../Form/Select'

const Index = ({
    isOpen,
    admins,
    handleToggleModal,
    handleChange,
    handleSubmit,
    approver,
    headerTitle,
    bodyTitle
}) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={handleToggleModal.bind(this, { type: 'approval' })}
        >
            <ModalHeader
                toggle={handleToggleModal.bind(this, { type: 'approval' })}
            >
                {headerTitle}
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <FormSelect
                        label="Approver"
                        name="approver"
                        id="approver"
                        handleChange={handleChange}
                        value={approver}
                    >
                        {admins.map(admin => {
                            return (
                                <option key={admin.id} value={admin.email}>
                                    {admin.email}
                                </option>
                            )
                        })}
                    </FormSelect>

                    <input
                        type="submit"
                        className="btn btn-primary float-right"
                        value="Send Approval"
                    />
                </form>
            </ModalBody>
        </Modal>
    )
}

Index.defaultProps = {
    isOpen: false,
    handleToggleModal: () => {},
    headerTitle: 'Business Card Approval',
    bodyTitle: ''
}

Index.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleToggleModal: PropTypes.func.isRequired,
    headerTitle: PropTypes.string,
    bodyTitle: PropTypes.string,
    approver: PropTypes.string
}

export default Index
