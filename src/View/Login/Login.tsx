import FormUI from '../../UI/FormUI'
import Input from '../../UI/Input'

const Login = () => {
    const loginInputs = [
        { type: "email", name: "email", placeholder: "Email", inputInfo: "Please enter a valid email address. <b>examle@email.com</b>" },
        {
            type: "password", name: "password", placeholder: "Password", inputInfo:
                `Password must: 
                    <ul>
                        <li>Include letters and numbers.</li>  
                        <li>At least one special character <b>!@#$%^&*</b></li>  
                        <li>Without spaces.</li>  
                        <li>At least 6 sybmols.</li>  
                    </ul>`
        }
    ]

    return (
        <FormUI title={"Login"}>
            {loginInputs.map((input, index) => (
                <Input key={index} {...input} />
            ))}
        </FormUI>
    )
}

export default Login
