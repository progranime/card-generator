import _ from 'lodash'

export default {
    validation: (data, bypass) => {
        let errors = {},
            emailRegex = new RegExp(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            ),
            picture = data.picture || '',
            name = data.name || '',
            position = data.position || '',
            // location = data.location || '',
            email = data.email || '',
            cellphone = data.cellphone || '',
            telephone = data.telephone || '',
            skype = data.skype || '',
            imageType = ['image/jpeg', 'image/jpg', 'image/png']

        let bypassPicture
        try {
            // bypassPicture = bypass.picture === undefined ? false : true
            if (bypass.picture === undefined) {
                bypassPicture = false
            } else if (bypass.picture === false) {
                bypassPicture = false
            } else {
                bypassPicture = true
            }
        } catch (e) {
            console.log(e)
        }

        if (!bypassPicture) {
            // picture must be image with extension of jpg, jpg, png
            if (imageType.indexOf(picture.type) === -1)
                errors.picture =
                    'Invalid file type. Use jpeg, jpg, png instead.'
            // and size of less than 5mb
            if (picture.size > 5e6)
                errors.picture = 'Less than 5mb file size is allowed'
            // isEmpty always return true so I used isString to check if there is an image
            // because it will return object instead of string
            if (_.isEmpty(picture.name) && picture.length === 0)
                errors.picture = 'Picture field is required'
        }

        if (_.isEmpty(name)) errors.name = 'Name field is required'

        if (_.isEmpty(position)) errors.position = 'Position field is required'

        // if (_.isEmpty(location)) errors.location = 'Location field is required'

        if (!emailRegex.test(email)) errors.email = 'Email is not valid'
        if (_.isEmpty(email)) errors.email = 'Email field is required'

        if (_.isEmpty(cellphone))
            errors.cellphone = 'Cellphone field is required'

        if (_.isEmpty(telephone))
            errors.telephone = 'Telephone field is required'

        if (_.isEmpty(skype)) errors.skype = 'Skype field is required'

        return { errors }
    }
}
