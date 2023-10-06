import React from "react";

const ProfileBio = ({ currentProfile, currentUser }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>

      {currentProfile?._id === currentUser?.result._id && (
        <div>
          <h4>Login history</h4>

          {currentProfile?.loginHistory ? (
            <ul>
              {currentProfile.loginHistory.reverse().map((loginInfo) => (
                <li key={loginInfo._id}>
                  {new Date(loginInfo.timeStamp).toLocaleString()} -{" "}
                  {loginInfo.browser}, {loginInfo.os}, {loginInfo.platform}, IP:{" "}
                  {loginInfo.ipAddress}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileBio;
