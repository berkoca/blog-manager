import axios from "../../utility/axios"
import { useEffect, useState } from "react"
import { Table } from "reactstrap"

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("/api/users")
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
