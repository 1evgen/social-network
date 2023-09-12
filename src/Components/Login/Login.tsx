
import {DataAuthType, StateType} from "../../Redux/auth-reducer";
import {LoginReduxForm} from "./LoginForm";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    loginTC: (dataAuth: DataAuthType)=> void
    auth: StateType
};


export const Login = (props: LoginPropsType)=> {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.loginTC(formData)
    }

if(props.auth.isAuth){
   return <Redirect to={'/profile'}/>
}
console.log((props.auth.isAuth))

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

