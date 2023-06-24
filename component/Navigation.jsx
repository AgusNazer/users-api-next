
import Link from "next/link"


function Navigation (){
    return (
        
        
        // <ul>
        //   <li>
        //     <Link href="/">Home</Link>
        //   </li>
        //   <li>
        //      <Link href="/services">Services</Link>
        //   </li>
        //   <li>
        //      <Link href="/about">About</Link>
        //   </li>
        // </ul>

<nav className="navbar navbar-expand-lg  bg-body-tertiary">
<div className="container">
  <Link className="navbar-brand" href="/">Api users App</Link>
  {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"> </span>
  </button> */}
  <div className="textNavz" id="navbarNav">
    <ul className="navbar-nav ms-auto">
     
      <li className="nav-item">
        <Link className="nav-link" href="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/services">News</Link>
      </li>
     
    </ul>
  </div>
</div>
</nav>
        
    )
}

export default Navigation;