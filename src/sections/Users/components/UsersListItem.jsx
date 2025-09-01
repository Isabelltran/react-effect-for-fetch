function UsersListItem(props) {
    const { user } = props;
  return (
    <ul className="users-list">
        <li style={{background: user.favouriteColour}}>
            <img
              src={user.profileImage}
            />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
        </li>
    </ul>
  )
}

export default UsersListItem