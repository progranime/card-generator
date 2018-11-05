import _ from 'lodash'

export default {
    validation: data => {
        let errors = {},
            emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            picture = data.picture || '',
            name = data.name || '',
            position = data.position || '',
            location = data.location || '',
            email = data.email || '',
            imageType = ['image/jpeg', 'image/jpg', 'image/png']

        // picture must be image with extension of jpg, jpg, png
        /* if (!imageType.includes(picture.type))
            errors.picture = 'Invalid file type. Use jpeg, jpg, png instead.' */
        // and size of less than 10mb
        /* if (picture.size > 1e8)
            errors.picture = 'Less than 10mb file size is allowed' */
        // isEmpty always return true so I used isString to check if there is an image
        // because it will return object instead of string
        /* if (_.isEmpty(picture.name) && picture.length === 0)
            errors.picture = 'Picture field is required' */

        if (_.isEmpty(name)) errors.name = 'Name field is required'
        if (_.isEmpty(position)) errors.position = 'Position field is required'
        if (_.isEmpty(location)) errors.location = 'Location field is required'
        if (!emailRegex.test(email)) errors.email = 'Email is not valid'
        if (_.isEmpty(email)) errors.email = 'Email field is required'

        return { errors }
    }
}
