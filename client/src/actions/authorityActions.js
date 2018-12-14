import axios from 'axios'

import {
    GET_ERROR,
    GET_ALL_AUTHORITY,
    GET_SINGLE_AUTHORITY,
    GET_ALL_AUTHORITY_BY_ROLE_ID,
    CREATE_AUTHORITY,
    UPDATE_AUTHORITY,
    UPDATE_AUTHORITY_MESSAGE,
    DELETE_AUTHORITY
} from './types'

export const getAllAuthority = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: `/api/authority/`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_AUTHORITY,
            payload: {
                results: res.data
            }
        })
    })
}

export const getSingleAuthority = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: `/api/authority/${payload.id}`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_SINGLE_AUTHORITY,
            payload: {
                result: res.data
            }
        })
    })
}

export const getAllAuthorityByRoleId = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: `/api/authority/authorityRole/${payload.id}`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_AUTHORITY_BY_ROLE_ID,
            payload: {
                admin: res.data
            }
        })
    })
}

export const createAuthority = (
    payload,
    history,
    redirect = '/admin/manage-user'
) => dispatch => {
    const axiosOptions = {
        method: 'post',
        url: `/api/authority/`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        if (res.data.errors) {
            dispatch({
                type: GET_ERROR,
                payload: {
                    errors: res.data.errors
                }
            })
        } else {
            dispatch({
                type: CREATE_AUTHORITY,
                payload: {
                    message: 'Successfully Created User ...'
                }
            })
            history.push(redirect)
        }
    })
}

export const updateAuthority = (
    payload,
    history,
    redirect = '/admin/manage-user'
) => dispatch => {
    const axiosOptions = {
        method: 'put',
        url: `/api/authority/`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        if (res.data.errors) {
            dispatch({
                type: GET_ERROR,
                payload: {
                    errors: res.data.errors
                }
            })
        } else {
            dispatch({
                type: UPDATE_AUTHORITY,
                payload: {
                    message: 'Successfully Updated User ...'
                }
            })

            history.push(redirect)
        }
    })
}

export const updateAuthorityMessage = payload => dispatch => {
    dispatch({
        type: UPDATE_AUTHORITY_MESSAGE,
        payload: {
            message: payload.message
        }
    })
}

export const deleteAuthority = (
    payload,
    history,
    redirect = '/'
) => dispatch => {
    const axiosOptions = {
        method: 'delete',
        url: `/api/authority/`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: DELETE_AUTHORITY,
            payload: {
                message: 'User Successfully Deleted ...'
            }
        })

        history.push(redirect)
    })
}
