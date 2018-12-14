import _ from 'lodash'

export default {
    validation: data => {
        let errors = {},
            email = data.email || ''

        if (_.isEmpty(email)) errors.email = 'Email field is required'

        return { errors }
    }
}
