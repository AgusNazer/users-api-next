"use client";

import { useRouter } from "next/navigation";

function users ({users})  {

const router = useRouter()

  return (
<ul>
   {/* {JSON.stringify(users)}  no es neesario, es mejor hacer el map directamente */} 
   
       {users.map((user) => (
             <li key={user.id}
             className="list-group-item d-flex border border-dark-subtle
              justify-content-between align-items-center list-group-item-action p-1 list-group-item-light"
              onClick={() => {
                router.push(`/users/${user.id}`)
              }}
             >
                 <div>
                     <h5>{user.id} {user.first_name} {user.last_name}</h5>
                     <p>{user.email}</p>
                 </div>
                  <img className="rounded-circle" src={user.avatar} alt={user.email} />
             </li>
            ))
          }
          </ul>

  )
}

export default users