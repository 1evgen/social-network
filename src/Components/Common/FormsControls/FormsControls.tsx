import React, {ChangeEvent, ReactNode} from "react";
import styles from './FormControls.module.css'
import {maxLengthCreator} from "../../utils/validators/validators";
type ReduxFormInput<T>  = {
    name: string
    onBlur?: (e: React.ChangeEvent<T>) => void ;
    onChange?: (e: React.ChangeEvent<T>) => void;
    onDragStart?: (e: React.DragEvent<T>) => void;
    onDrop?: (e: React.DragEvent<T>) => void;
    onFocus?: (e: React.ChangeEvent<T>) => void;
    value: string
    }
type ReduxFormMeta  = {
        active: boolean
        asyncValidating: boolean
        autofilled: boolean
        dirty: boolean
        dispatch: any
        error: string
        form: string
        initial: undefined
        invalid: boolean
        pristine: boolean
        submitFailed: boolean
        submitting: boolean
        touched: boolean
        valid: boolean
        visited: boolean
        warning: undefined
    }

interface FormsControlsProps {
    input: ReduxFormInput<HTMLTextAreaElement | HTMLInputElement>;
    meta: ReduxFormMeta;
    placeholder?: string;
    type: string
}

export const maxLength10 = maxLengthCreator(10)
export const FormField: React.FC<FormsControlsProps> = ({input,
                                                        meta,
                                                        type,
                                                        placeholder,
                                                        ...props}) =>
{
    const  hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {
                type === 'textarea' ? (
                    <div>
                        <textarea {...input}
                                  placeholder={placeholder}
                                  {...props}
                                  {...meta}
                        />
                    </div>
                ): (
                    <div>
                        <input type={type}
                               placeholder={placeholder}
                               {...input}
                               {...props}
                               {...meta}
                        />
                    </div>
                )
            }
            {hasError && <span>{meta.error}</span>}
        </div>
    )}




//
// export const TextArea: React.FC<FormsControlsProps> = ({ input, meta, ...props }) => {
//     const  hasError = meta.touched && meta.error && props.placeholder?.length
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
//
// export const Input: React.FC<FormsControlsProps> = ({input, meta,...props }) => {
//     const  hasError = meta.touched && meta.error && props.placeholder?.length
//     console.log(input)
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

