import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";
import authService from "../../../Service/authService";

function Register(): JSX.Element {
    const { handleSubmit, register } = useForm<UserModel>()
    const navigate = useNavigate();

    const send = (data: UserModel) => {
        authService.register(data)
            .then(() => { console.log("successfully logged in"); navigate("/furniture") })
            .catch((err: any) => console.log(err))
    }


    return (
        <div className="Register Box">
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="firstName" {...register('firstName', UserModel.firstNameValidation)} />
                <input type="text" placeholder="lastName" {...register('lastName', UserModel.lastNameValidation)} />
                <input type="text" placeholder="username" {...register('username', UserModel.usernameValidation)} />
                <input type="password" placeholder="password" {...register('password', UserModel.passwordValidation)} />
                <button>register</button>
            </form>

        </div>
    );
}

export default Register;