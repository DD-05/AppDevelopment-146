import React from 'react';
import { useUser } from './UserContext';
import '../assets/css/Profile.css';

const Profile = () => {
    const { user, loading } = useUser();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>No user data available.</div>;
    }

    return (
        <div className="profile-container">
            <h1>Profile Page</h1>
            <div className="profile-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Password:</strong> {user.password}</p>
            </div>
        </div>
    );
};

export default Profile;
