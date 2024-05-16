import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar"
import { BlogForm } from "../components/BlogForm"
import { useUser } from "../hooks";
import { PopupMsg } from "../components/PopupMsg";

export const Publish=()=>{
    const {isLoggedIn} = useUser();
    const navigate = useNavigate();
    if(!isLoggedIn){
        return <PopupMsg msg="Please login to publish your Blog" onClick={()=>{
            navigate('/signin');
        }}/>
    }
    return <div>
        <Appbar/>
        <div className="my-16">
        <BlogForm/>
        </div>
        
    </div>
}