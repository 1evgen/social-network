import React, {ChangeEvent} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string)=> void
}

export class ProfileStatus extends React.Component<PropsType>{

    state = {
        editMode: false,
        status: this.props.status
    }
        activateEditMode = ()=> {
            this.setState({
                editMode: true
            })
        }
        deactivateEditMode = ()=> {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.currentTarget.value;
        this.setState({
            status: newStatus
        });
       // this.props.updateStatus(newStatus);

    }

    render() {

        return (
            <div>
                {
                    !this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----' }</span>
                }
                {
                    this.state.editMode && <div>
                        <input value={this.state.status}
                               autoFocus onBlur={this.deactivateEditMode}
                               onChange={this.onStatusChange}
                               placeholder={"enter your status"}/>
                    </div>
                }

            </div>
        );
    }


};
