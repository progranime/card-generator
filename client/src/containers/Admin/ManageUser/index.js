import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { FaPlus } from 'react-icons/fa'

import ModalConfirmation from '../../../components/Modal/Confirmation'
import FlashMessage from '../../../components/FlashMessage'
import FloatAction from '../../../components/FloatAction'
import FloatActionWrapper from '../../../components/FloatAction/Wrapper'
import {
    getAllAuthority,
    deleteAuthority,
    updateAuthorityMessage
} from '../../../actions/authorityActions'
const { SearchBar } = Search

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            columns: [
                { dataField: 'id', text: 'id' },
                { dataField: 'email', text: 'email' },
                { dataField: 'authority_role', text: 'authority role' },
                {
                    dataField: 'actions',
                    text: 'actions',
                    formatter: this.actionFormatter.bind(this),
                    classes: () => 'actions'
                }
            ],
            showConfirmationModal: false,
            authorityId: '',
            hasDeleted: false,
            show: false
        }
    }

    actionFormatter = (cellContent, row) => {
        return (
            <Fragment>
                <Link to={`/admin/manage-user/${row.id}/edit`}>
                    <img
                        src={`${
                            window.location.origin
                        }/images/icons/update.png`}
                        alt="update"
                    />
                </Link>
                <a
                    href="#_"
                    onClick={this.handleToggleModal.bind(this, {
                        type: 'confirmation',
                        id: row.id
                    })}
                >
                    <img
                        src={`${
                            window.location.origin
                        }/images/icons/delete.png`}
                        alt="delete"
                    />
                </a>
            </Fragment>
        )
    }

    indication = () => {
        return <div className="text-center">No Results Found!</div>
    }

    renderDataTable = () => {
        const { authority } = this.props
        const paginationOptions = {
            sizePerPageList: [{ text: 10, value: 10 }],
            showTotal: true
        }

        return (
            <ToolkitProvider
                keyField="id"
                data={authority.results}
                columns={this.state.columns}
                search
            >
                {props => (
                    <div className="table-responsive">
                        <div className="mg-table__wrapper">
                            <h4 className="mg-table__title">Manage User</h4>

                            <SearchBar
                                {...props.searchProps}
                                className="mg-table__search"
                            />
                            <BootstrapTable
                                {...props.baseProps}
                                noDataIndication={this.indication}
                                classes="mg-table"
                                pagination={paginationFactory(
                                    paginationOptions
                                )}
                            />
                        </div>
                    </div>
                )}
            </ToolkitProvider>
        )
    }

    handleToggleModal = data => {
        if (data.type === 'confirmation') {
            this.setState(prevState => {
                return {
                    showConfirmationModal: !prevState.showConfirmationModal,
                    authorityId: data.id
                }
            })
        }

        if (data.confirm) {
            this.props.deleteAuthority(
                {
                    id: this.state.authorityId
                },
                this.props.history,
                '/admin/manage-user'
            )

            this.setState({
                hasDeleted: !this.state.hasDeleted
            })
        }
    }

    handleState = state => {
        this.setState(state)
    }

    // lifecycle hooks
    componentDidMount() {
        this.props.getAllAuthority()
    }

    componentWillReceiveProps(nextProps) {
        const { hasDeleted } = this.state
        const { authority } = nextProps

        if (authority.message !== '') {
            this.setState({ show: true })
        }

        if (hasDeleted) {
            this.props.getAllAuthority()
            this.setState({ hasDeleted: !hasDeleted })
        }
    }

    componentWillUnmount() {
        this.props.updateAuthorityMessage({ message: '' })
    }

    render() {
        const { authority } = this.props

        return (
            <div>
                {this.renderDataTable()}

                {authority && (
                    <FlashMessage
                        message={authority.message}
                        show={this.state.show}
                        handleState={this.handleState}
                        duration={3000}
                    />
                )}

                <ModalConfirmation
                    isOpen={this.state.showConfirmationModal}
                    handleToggleModal={this.handleToggleModal}
                />

                <FloatActionWrapper>
                    <FloatAction to="/admin/manage-user/create">
                        <FaPlus />
                    </FloatAction>
                </FloatActionWrapper>
            </div>
        )
    }
}

Index.propTypes = {
    getAllAuthority: PropTypes.func.isRequired,
    deleteAuthority: PropTypes.func.isRequired,
    updateAuthorityMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    authority: state.authority
})

const mapDispatchToProps = {
    getAllAuthority,
    deleteAuthority,
    updateAuthorityMessage
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
