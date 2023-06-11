async function getUser(id) {
  console.log(id);

  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img
              className="rounded-circle"
              src={user.avatar}
              alt="imagen-perfil"
            />
          </div>
          <div className="card-body text-center">
            <h3 className="text-center">
              {user.first_name} {user.last_name}
            </h3>
            <p className="text-center">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
