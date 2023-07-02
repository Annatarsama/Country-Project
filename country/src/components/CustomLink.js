import { Link } from "react-router-dom";

export default function CustomLink ({to, children,...props}){
    return (
    <Link to={to} {...props}>
        {children}
    </Link>
    )
}