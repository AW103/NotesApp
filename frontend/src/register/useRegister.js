import axios from "axios";
import { useState } from "react";

const useRegister = () => {
const [isRegistered, setIsRegistered] = useState(false)

    const register = async (username,password) => {
        let response = await axios.post("http://localhost:8080/api/v1/users/register", {
            username: username,
            password: password
        });
        console.log(response.data);
        // setUserId(response.data[1]);
        console.log(username);
        response.data.map(res => {
            console.log("res in map is " + res);
            if(String(res).includes("Error")){
                console.log(`first statement hit`);
                console.log(res);
                return isRegistered;
        } else {
            console.log("User registered");
            console.log(res);
            setIsRegistered(true);
            return isRegistered;
        }
      })
  }
return [register, isRegistered];
}

export default useRegister;