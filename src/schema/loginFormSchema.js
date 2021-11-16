// Libraries
import * as yup from "yup";

const loginFormSchema = yup.object().shape({

// username
    username: yup
        .string()
        .trim()
        .required('Username field is required!')
        .min(2, 'First name must be 2 or more characters long!'),

// password
    password: yup
        .string()
        .required('Password field is required!')
        .min(2, 'Password must be at least 2 or more characters long!')

})

export default loginFormSchema;