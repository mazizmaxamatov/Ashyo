import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Login, Register } from "@/service/Auth"
import { Dispatch, FC, FormEvent, SetStateAction } from "react"

export const Auth: FC<{ closeAction: Dispatch<SetStateAction<boolean>> }> = ({ closeAction }) => {

    const mutateLogin = Login()
    function handleLogin(e: FormEvent) {

        e.preventDefault()
        const data = {
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value
        }
        mutateLogin.mutate(data)
        closeAction(false)
    }

    const mutateRegister = Register()
    function handleRegister(e: FormEvent) {

        e.preventDefault()
        const data = {
            fullname: (e.target as HTMLFormElement).email.value,
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value
        }
        mutateRegister.mutate(data)
        closeAction(false)
    }

    return (
        <Tabs defaultValue="login" className="w-[400px] mx-auto ">
            <TabsList className="grid w-full grid-cols-2 bg-[#ffffff]">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Card className="bg-[#ffffff]">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleLogin}>
                        <CardContent className="space-y-2 mb-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input name="email" autoComplete="off" type="email" id="email" placeholder="Enter you email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input name="password" autoComplete="off" type="password" id="password" placeholder="Enter you password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="bg-[#000000] text-[#ffffff]">Login</Button>
                        </CardFooter>
                    </form>
                </Card>
            </TabsContent>
            <TabsContent value="register">
                <Card className="bg-[#ffffff]">
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleRegister}>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="fullname">Fullname</Label>
                                <Input id="fullname" type="text" placeholder="Enter your Fullname" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="text" placeholder="Enter your Email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter your Password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="bg-[#000000] text-[#ffffff]">Register</Button>
                        </CardFooter>
                    </form>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
