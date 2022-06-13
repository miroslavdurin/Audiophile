export const nameValidators = {   
    required: "This field is required",
    minLength: {
        value: 3,
        message: "Minimum length is 3"
    }
}

export const emailValidators = {
    required: "This field is required",
    pattern: {
        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
        message: "Not a valid email"
    }
}

export const phoneNumberValidators = {
    required: "This field is required",
    minLength: {
        value: 8,
        message: "Not a valid number"
    }
}

export const adressValidators = {
    required: "This field is required",
    minLength: {
        value: 10,
        message: "Not a valid adress"
    }
}

export const zipCodeValidators = {
    required: "This field is required",
    minLength: {
        value: 4,
        message: "Must be at least 4 digits long"
    },
    maxLength: {
        value: 12,
        message: "No more than 12 digits"
    }
}

export const cityNameValidators = {
    required: "This field is required",
    minLength: {
        value: 1,
        message: "City name too short"
    },
    maxLength: {
        value: 25,
        message: "City name too long"
    }
}

export const countryNameValidators = {
    required: "This field is required",
    minLength: {
        value: 4,
        message: "Country name is too short"
    },
    maxLength: {
        value: 60,
        message: "Country name is too long"
    }
}

export const eMoneyNumberValidators = {
    required: "This field is required",
    minLength: {
        value: 9,
        message: "E-money number is too short"
    },
    maxLength: {
        value: 9,
        message: "E-money number is too long"
    }
}

export const eMoneyPinValidators = {
    required: "This field is required",
    minLength: {
        value: 4,
        message: "E-money PIN is too short"
    },
    maxLength: {
        value: 4,
        message: "E-money PIN is too long"
    }
}