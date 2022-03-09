import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "reactstrap"

const Users = () => {
  const [users, setUsers] = useState([])

  const jwt = localStorage.getItem("jwt")

  useEffect(() => {
    axios.get("https://blog.berkoca.com/api/users", { headers: { authorization: `Bearer ${jwt}` } })
      .then((response) => {
        if (response && response.data && response.data.data) {
          setUsers(response.data.data)
        }
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Fullname</th>
          <th>E-Mail</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Users
