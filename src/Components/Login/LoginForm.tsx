import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../utils/validators/validators";
import {FormField} from "../Common/FormsControls/FormsControls";
import s from '../Common/FormsControls/FormControls.module.css'

type FormDataType = {
    email: string
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
                       name={'email'}
                       component={FormField}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       type={'password'}
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
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
