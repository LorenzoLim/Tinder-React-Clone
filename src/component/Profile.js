import React from 'react';

const Profile = ({ firstName, lastName, imageURL }) => {
  return (
    <div className="profile">
      <div>
        <img src={ imageURL } alt="User"></img>
      </div>
      <p>
        { firstName } { lastName }
      </p>
    </div>
  )
}

export default Profile;
