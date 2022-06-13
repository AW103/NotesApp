import axios from "axios";
import { useState } from "react";

const useLogin = () => {
   const [authorized, setAuthorized] = useState(false)
   const [userId, setUserId] = useState(null);
    const errorMessage = "Unable to find username or password. If you are a new user, please register below."
    const login = async (username,password) => {
        let response = await axios.post("http://localhost:8080/api/v1/users/login", {
            username: username,
            password: password
        });
        console.log(response.data);
        setUserId(response.data[1]);
        console.log(username);
        response.data.map(res => {
            // console.log("res in map is " + res);
            if(String(res).includes("Error")){
                // console.log(`first statement hit`);
                return errorMessage;
        } else {
            setAuthorized(true);
            return authorized;
        }
      })
  }
return [login, authorized, userId];
}

export default useLogin;