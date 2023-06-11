import Users from "@/component/users";


async function fetchUsers(){
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  console.log(data.data);
  return data.data
}

async function IndexPage () {
  const users = await  fetchUsers();
//   console.log(users); 


  return <Users users={users} /> 
    
   }

export default IndexPage;