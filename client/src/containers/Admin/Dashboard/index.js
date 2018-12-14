import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'

import {
    getAllCard,
    deleteCard,
    updateCardMessage
} from '../../../actions/cardActions'
import FlashMessage from '../../../components/FlashMessage'
import ModalConfirmation from '../../../components/Modal/Confirmation'
const { SearchBar } = Search

export class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            columns: [
                {
                    dataField: 'picture',
                    text: 'picture',
                    formatter: this.pictureFormatter
                },
                { dataField: 'name', text: 'name' },
                { dataField: 'position', text: 'position' },
                { dataField: 'location', text: 'location' },
                {
                    dataField: 'status_name',
                    text: 'status',
                    formatter: this.statusFormatter
                },
                {
                    dataField: 'actions',
                    text: 'actions',
                    formatter: this.actionFormatter.bind(this),
                    classes: () => 'actions'
                }
            ],
            show: false,
            showConfirmationModal: false,
            cardId: '',
            hasDeleted: false
        }
    }

    pictureFormatter = (cellContent, row) => {
        return (
            <img
                src={`${window.location.origin}${row.picture}`}
                alt=""
                style={{ width: '50px' }}
            />
        )
    }

    actionFormatter = (cellContent, row) => {
        return (
            <Fragment>
                <Link to={`/admin/dashboard/${row.id}/view`}>
                    <img
                        src={`${window.location.origin}/images/icons/view.png`}
                        alt="view"
                    />
                </Link>
                <Link to={`/admin/dashboard/${row.id}/edit`}>
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

    statusFormatter = (cellContent, row) => {
        let badgeClass = ''

        if (row.status_name === 'pending') badgeClass = 'badge--danger'
        else if (row.status_name === 'closed') badgeClass = 'badge--success'
        else badgeClass = 'badge--warning'

        return <span className={`badge ${badgeClass}`}>{row.status_name}</span>
    }

    indication = () => {
        return <div className="text-center">No Results Found!</div>
    }

    handleState = state => {
        this.setState(state)
    }

    handleToggleModal = data => {
        if (data.type === 'confirmation') {
            this.setState(prevState => {
                return {
                    showConfirmationModal: !prevState.showConfirmationModal,
                    cardId: data.id
                }
            })
        }

        if (data.confirm) {
            this.props.deleteCard(
                {
                    id: this.state.cardId
                },
                this.props.history,
                '/admin/dashboard'
            )

            this.setState({
                hasDeleted: !this.state.hasDeleted
            })
        }
    }

    renderDataTable = () => {
        const { card } = this.props
        const paginationOptions = {
            sizePerPageList: [{ text: 10, value: 10 }],
            showTotal: true
        }

        return (
            <ToolkitProvider
                keyField="name"
                data={card.results}
                columns={this.state.columns}
                search
            >
                {props => (
                    <div className="table-responsive">
                        <div className="mg-table__wrapper">
                            <h4 className="mg-table__title">Dashboard</h4>

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

    componentDidMount() {
        this.props.getAllCard()
    }

    componentWillReceiveProps(nextProps) {
        const { hasDeleted } = this.state
        const { card } = nextProps

        if (card.message !== '') {
            this.setState({
                show: true
            })
        }

        if (hasDeleted) {
            this.props.getAllCard()
            this.setState({
                hasDeleted: !hasDeleted
            })
        }
    }

    componentWillUnmount() {
        this.props.updateCardMessage({ message: '' })
    }

    render() {
        const { card } = this.props

        return (
            <div>
                {this.renderDataTable()}

                {card && (
                    <FlashMessage
                        message={card.message}
                        show={this.state.show}
                        handleState={this.handleState}
                        duration={3000}
                    />
                )}

                <ModalConfirmation
                    isOpen={this.state.showConfirmationModal}
                    handleToggleModal={this.handleToggleModal}
                />
            </div>
        )
    }
}

Index.propTypes = {
    card: PropTypes.object.isRequired,
    status: PropTypes.object.isRequired,
    getAllCard: PropTypes.func.isRequired,
    updateCardMessage: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    card: state.card,
    status: state.status
})

const mapDispatchToProps = {
    getAllCard,
    deleteCard,
    updateCardMessage
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
