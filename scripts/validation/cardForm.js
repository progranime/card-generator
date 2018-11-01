const _ = require('lodash')

module.exports = {
    validation: data => {
        let errors, emailRegex, name, position, location, email
        errors = {}
        emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        name = data.name || ''
        position = data.position || ''
        location = data.location || ''
        email = data.email || ''

        if (_.isEmpty(name)) errors.name = 'Name field is required'
        if (_.isEmpty(position)) errors.position = 'Position field is required'
        if (_.isEmpty(location)) errors.location = 'Location field is required'
        if (!emailRegex.test(email)) errors.email = 'Email is not valid'
        if (_.isEmpty(email)) errors.email = 'Email field is required'

        console.log({ errors })
        return { errors }
    }
}
