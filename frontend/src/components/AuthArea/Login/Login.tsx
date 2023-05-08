import { useForm } from "react-hook-form";
import "./Login.css";
// import CredentialsModel from "../../../Models/CredencialsModel";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Service/authService";
// import authService from "../../../service/authService";

function Login(): JSX.Element {
        const { handleSubmit, register } = useForm<CredentialsModel>()
        const navigate = useNavigate();
    
        const send = (data: CredentialsModel) => {
            if(sessionStorage.getItem("token")){
                alert("You are already logged in!")
            }else{
                authService.login(data)
                .then(() => { 
                    console.log("successfully logged in"); navigate("/books") 
                navigate("/furniture")
                })
                .catch(err => console.log(err))
            }
         
        }

    return (
        <div className="Login">
            <h2>Login</h2>
			 <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="username" {...register('username', CredentialsModel.usernameValidation)} />
                <input type="password" placeholder="password" {...register('password', CredentialsModel.passwordValidation)} />
                <button>login</button>
            </form>
        </div>
    );
}

export default Login;