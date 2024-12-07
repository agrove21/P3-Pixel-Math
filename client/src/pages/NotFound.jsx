import { Link } from "react-router-dom"


function NotFound() {
  return (
    <div className="w-fit m-auto" >
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default NotFound