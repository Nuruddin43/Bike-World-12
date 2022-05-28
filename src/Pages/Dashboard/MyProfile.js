import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import ProfileModal from "./ProfileModal"

const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [profile, setProfile] = useState([])
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/myprofile`, {
        method: "GET",
        headers: {},
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile(data)
        })
    }
  }, [user])

  return (
    <div>
      <div class="card w-96 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className="text-2xl">My Profile</h2>
          <label
            onChange={() => setProfile(user)}
            htmlFor="profile-modal"
            className="btn border-0 font-bold"
          >
            Edit
          </label>
        </div>
      </div>

      <div className="m-8">
        <div className="m-8">
          <p className="font-bold">Full Name</p>
          <p className="text-3xl"> {user?.displayName}</p>
        </div>
        <div>
          <p className="font-bold">Email Address</p>
          <p className="text-3xl"> {user?.email}</p>
        </div>
        {profile.map((p) => (
          <div key={p._id}>
            <div>
              <p className="font-bold">Education</p>
              <p className="text-3xl"> {p?.education}</p>
            </div>
            <div>
              <p className="font-bold">Location</p>
              <p className="text-3xl"> {p?.location}</p>
            </div>
            <div>
              <p className="font-bold">Social Link</p>
              <p className="text-3xl"> {p?.social}</p>
            </div>
          </div>
        ))}
      </div>
      {profile && <ProfileModal profile={profile}></ProfileModal>}
    </div>
  )
}

export default MyProfile
