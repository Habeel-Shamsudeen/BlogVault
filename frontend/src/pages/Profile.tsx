import { Appbar } from "../components/Appbar";
import { UserProfile } from "../components/UserProfile";

export const Profile = () => {
  return (
    <div>
        <Appbar/>
    <div className="flex flex-col items-center mt-2">
        <UserProfile />
      </div>
    </div>
    
  );
};
