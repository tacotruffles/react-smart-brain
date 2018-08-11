import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            pet: this.props.user.pet
        }
    }

    onFormChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onProfileUpdate = (data) => {
        fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
            },
            body: JSON.stringify({ formInput: data })
        }).then(res => {
            if (res.status === 200 || res.status === 304) {
                this.props.toggleModal();
                this.props.loadUser({ ...this.props.user, ...data });
            }
        }).catch(console.log('error updating profile'));
    }

    render() {

        const { user, toggleModal } = this.props;
        const { name, age, pet } = this.state;

        return (
            <div className="profile-modal">
                <div className="br3 ba b-black mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">

                    <article className="mv4 w-100 w-50-m w-25-l mw6 center">
                        <main className="pa4 black-80 w-80">
                            <img
                                src="http://tachyons.io/img/logo.jpg"
                                className="br-100 ba h3 w3 dib" alt="avatar" />
                            <h3>{this.state.name}</h3>
                            <h4>{`Images Submitted: ${user.entries}`}</h4>
                            <p>{`Member since: ${user.joined}`}</p>
                            <hr />
                            <div className="mt3">
                                <label className="fw6 mt2" htmlFor="name">Name:</label>
                                <input
                                    className="hover-black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    placeholder={user.name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onFormChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="fw6 mt2" htmlFor="age">Age:</label>
                                <input
                                    className="hover-black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    placeholder={user.age}
                                    type="text"
                                    name="age"
                                    id="age"
                                    onChange={this.onFormChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="fw6 mt2" htmlFor="pet">Pet:</label>
                                <input
                                    className="hover-black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    placeholder={user.pet}
                                    type="text"
                                    name="pet"
                                    id="pet"
                                    onChange={this.onFormChange}
                                />
                            </div>

                            <div className="fw6 mt4" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <button onClick={() => this.onProfileUpdate({ name, age, pet })} className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib">Save</button>
                                <button onClick={toggleModal} className="b ph3 pv2 input-reset ba b--black bg-light-red grow pointer f6 dib">Cancel </button>
                            </div>
                        </main>
                        <div className="modal-close" onClick={toggleModal}>&times;</div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Profile;
