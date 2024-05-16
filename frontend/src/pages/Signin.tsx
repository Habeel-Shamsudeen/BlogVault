import { useNavigate } from "react-router-dom";
import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
import { useUser } from "../hooks";

export const Signin = () => {
  const {loading,user,isLoggedIn} = useUser();
  const navigate = useNavigate();
  if(isLoggedIn){
    navigate('/blogs');
  }
    return <div>
      <div className="md:grid grid-cols-2">
        <div>
            <Auth type="signin"/>
        </div>
        <div className="invisible md:visible">
        <Quote/>
        </div>    
    </div>
    </div>;
  };
  