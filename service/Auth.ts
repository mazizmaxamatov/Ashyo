import { instance } from "@/hooks/instance"
import { useMutation } from "@tanstack/react-query"
import { setCookie } from "cookies-next"

interface LoginType{
    email:string,
    password:string
}
interface RegisterType{
    fullname:string,
    email:string,
    password:string
}
export const Login = () => {
    const mutateLogin = useMutation({
        mutationFn:(data:LoginType) => instance().post("/auth/login", data).then(res =>{
            setCookie("NEXT_TOKEN", res.data.accessToken)
        })
    })
    return mutateLogin
}
export const Register = () => {
    const mutateRegister = useMutation({
        mutationFn:(data:RegisterType) => instance().post("/auth/register", data).then(res =>{
            setCookie("NEXT_TOKEN", res.data.accessToken)
        })
    })
    return mutateRegister
}