import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../utils/validators/validators";
import {FormField} from "../Common/FormsControls/FormsControls";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props)=> {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                <Field validate={[required]}
                       placeholder={'Login'}
                       type={'input'}
                       name={'login'}
                       component={FormField}
                />
                </div>
                <div>
                    <Field placeholder={'Password'}
                           type={'input'}
                           name={'password'}
                           component={FormField}
                           validate={[required]}
                    /> remember me
                </div>
                <div>
                    <Field  type={'checkbox'}
                            name={'rememberMe'}
                            component={FormField} />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = ()=> {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}