import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/profile-reducer";
import s from './MyPost.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {FormField} from "../../Common/FormsControls/FormsControls";



type MyPostMainType = {
    addPost: (value: AddPostFormType)=> void
    profile: PostType
}


export const MyPost = (props: MyPostMainType) => {
    let posts = props.profile.post.postData.map((el) =>
        <Post key={el.id} messagePost={el.message} counterLike={el.likesCount}/>)

    const addPost = (value: AddPostFormType) => {
        props.addPost(value)
    }

    return (

        <div className={s.container}>
            <div>
                My posts
                <div >
                    <AddNewPostFormRedux  onSubmit={addPost}/>
                </div>
            </div>
            {posts}
        </div>
    )
}

export type AddPostFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText'
                   type='textarea'
                   component={FormField}
                   placeholder='enter your post'
                   validate={[required, maxLength10]}
            />
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)