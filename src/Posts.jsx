import { useParams, useLocation } from "react-router-dom"
import PostItem from "./PostItem"

const Posts = () => {
    const { id } = useParams()
    const urlString = new URLSearchParams(useLocation().search)
    const fname = urlString.get("fname")
    const lname = urlString.get("lname")
    return (
        <div>
            {id}
            { 
                (fname && lname) ? <h2>Hello, {fname} {lname}</h2> : ""
            }
            <PostItem title="Iphone13" content="detials of iphone13"/>
            <PostItem title="Iphone14" content="detials of iphone14"/>
        </div>
    )
}

export default Posts