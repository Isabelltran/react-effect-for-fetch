import UsersListItem from "./UsersListItem"

function UsersList({props}) {
    const { user } = props
  return (
    <div className="scroll-container">
        <UsersListItem user = {user} />

    </div>
  )
}

export default UsersList