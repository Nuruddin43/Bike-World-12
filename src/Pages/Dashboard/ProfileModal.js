import axios from "axios"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"
import auth from "../../firebase.init"

const ProfileModal = () => {
  const [user] = useAuthState(auth)

  const handleProfile = (event) => {
    event.preventDefault()
    const profile = {
      name: user?.displayName,
      email: user?.email,
      education: event.target.education.value,
      location: event.target.location.value,
      social: event.target.social.value,
    }
    axios.post("http://localhost:5000/myprofile", profile).then((response) => {
      const { data } = response
      if (data.insertedId) {
        toast("Profile is set")
      } else {
        toast.error("profile is failed to set")
      }
      event.target.reset()
    })
  }
  return (
    <div>
      <input type="checkbox" id="profile-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <label
            for="profile-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>

          <form
            onSubmit={handleProfile}
            className="grid grid-cols-1 gap-2 justify-items-center mt-8"
          >
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="education"
              placeholder="Education"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="social"
              placeholder="Social Links"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn border-0 w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
