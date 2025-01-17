import { Password } from "@mui/icons-material";
import Axioscustom from "./axioscustom";

const AutherAPI = {
    login(email , password) {
        const url ="api/login";
        return Axioscustom.post(url ,{email , password});
    }
}
export default AutherAPI;