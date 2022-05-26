import { useEffect, useState } from "react"

const useToken = (user) => {
  const [users, setUsers] = useState("")
  useEffect(() => {
    const email = user?.user?.email
    const name = user?.user?.name
    const currentUser = { name: name, email: email }
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data)
        })
    }
  }, [user])
  return [users]
}
export default useToken
