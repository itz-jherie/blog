import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div className="errorpage">
            <h2>Sorry</h2>
            <p>That page cant be found</p>
            <Link to='/'>Back to hompage</Link>
        </div>
     );
}
 
export default ErrorPage;