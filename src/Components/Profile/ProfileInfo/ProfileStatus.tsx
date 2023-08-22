import React from 'react';


type PropsType = {}

export class ProfileStatus extends React.Component<PropsType>{
    state = {
       editMode: false
    }
        activateEditMode = ()=> {
            this.setState({
                editMode: true
            })
        }

    deativateEditMode = ()=> {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (

            <div>
                {
                    !this.state.editMode && <span onDoubleClick={this.activateEditMode}>dddd</span>
                }
                {
                    this.state.editMode && <div>
                        <input autoFocus onBlur={this.deativateEditMode}  placeholder={"enter your status"}/>
                    </div>
                }

            </div>
        );
    }


};
