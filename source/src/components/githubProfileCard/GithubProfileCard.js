import React, {useState} from "react";
import "./GithubProfileCard.scss";
import {profileInfo} from "../../portfolio";

export default function ProfileAvatar() {
  const [failed, setFailed] = useState(false);
  const initials = profileInfo.name
    .split(" ")
    .map(w => w[0])
    .join("");
  return failed ? (
    <div className="profile-image profile-image-fallback">{initials}</div>
  ) : (
    <img
      src={profileInfo.avatarUrl}
      alt={profileInfo.name}
      className="profile-image"
      onError={() => setFailed(true)}
    />
  );
}
