// Problem 6
import { User } from "../types";

// Function that verifies if a user has all required attributes
export function verifyUser(user: User | null | undefined): User | string[] {
    // TODO: Implement logic to check for missing properties and return either the user object or an array of missing properties
    const missing: string[] = []
    if(user != null){
        if (!("id" in user)){
            missing.push("id")
        }
        if(!("name" in user)){
            missing.push("name")
        }
        if (user.address !== undefined){
            if(!("street" in user.address)){
                missing.push("street")
            }
            if(!("city" in user.address)){
                missing.push("city")
            }
        }
        else{
            missing.push("address")
            missing.push("street")
            missing.push("city")
        }
    }
    else{
        missing.push("id")
        missing.push("name")
        missing.push("city")
        missing.push("address")
        missing.push("street")
        missing.push("userData")
    }
    if (missing.length === 0){
        return user;
    }
    else{
        return missing;
    }
     // Placeholder return statement
}

export default verifyUser