import React from 'react';
import './Profile.css';

const Profile = ({ isProfileOpen, toggleModal }) => {
    return (
        <div className="profile-modal">
            <div className="br3 ba b-black mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">

                <article className="mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="pa4 black-80 w-80">
                        <img
                            src="http://tachyons.io/img/logo.jpg"
                            className="br-100 ba h3 w3 dib" alt="avatar" />
                        <h3>John Doe</h3>
                        <h4>Images Submitted: 5</h4>
                        <p>Member since: January</p>
                        <hr />
                        <div className="mt3">
                            <label className="fw6 mt2" htmlFor="name">Name:</label>
                            <input
                                className="hover-black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                placeholder="John"
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="fw6 mt2" htmlFor="age">Age:</label>
                            <input
                                className="hover-black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                placeholder="48"
                                type="text"
                                name="age"
                                id="age"
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="fw6 mt2" htmlFor="pet">Pet:</label>
                            <input
                                className="hover-black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                placeholder="Dragon"
                                type="text"
                                name="pet"
                                id="pet"
                                onChange={this.onNameChange}
                            />
                        </div>

                        <div className="fw6 mt4" style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <button className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib">Save</button>
                            <button onClick={toggleModal} className="b ph3 pv2 input-reset ba b--black bg-light-red grow pointer f6 dib">Cancel </button>
                        </div>
                    </main>
                    <div className="modal-close" onClick={toggleModal}>&times;</div>
                </article>
            </div>
        </div>
    )
}

export default Profile;
