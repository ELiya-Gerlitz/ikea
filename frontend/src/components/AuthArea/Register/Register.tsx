import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";
import authService from "../../../Service/authService";

function Register(): JSX.Element {
    const { handleSubmit, register } = useForm<UserModel>()
    const navigate = useNavigate();

    const send = (data: UserModel) => {
        if(sessionStorage.getItem("token")){
            alert("You are already logged in!")
        }else{
        authService.register(data)
            .then(() => { console.log("successfully logged in")
             navigate("/furniture") })
            .catch((err: any) => console.log(err))
              }
         }
    return (
        <div className="Register Box">

            <h2>Register</h2>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="firstName" {...register('firstName', UserModel.firstNameValidation)} /><br></br>
                <input type="text" placeholder="lastName" {...register('lastName', UserModel.lastNameValidation)} /><br></br>
                <input type="text" placeholder="username" {...register('username', UserModel.usernameValidation)} /><br></br>
                <input type="password" placeholder="password" {...register('password', UserModel.passwordValidation)} /><br></br>
                <button>register</button>
            </form>

        </div>
    );
}

export default Register;