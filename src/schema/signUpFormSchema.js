// Libraries
import * as yup from "yup";

const signUpFormSchema = yup.object().shape({

// firstName
    firstName: yup
        .string()
        .trim()
        .required('First name field is required!')
        .min(2, 'First name must be 2 or more characters long!'),

// lastName
    lastName: yup
        .string()
        .trim()
        .required('Last name field is required!')
        .min(2, 'First name must be 2 or more characters long!'),

// username
    username: yup
        .string()
        .trim()
        .required('Username field is required!')
        .min(2, 'First name must be 2 or more characters long!'),

// password
    password: yup
        .string()
        .trim()
        .required('Password field is required!'),

// email
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email field is required!'),

// role
    role: yup.boolean()
        .oneOf([true], 'Click one of the roles!')
})

export default signUpFormSchema;