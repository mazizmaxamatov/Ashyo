import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Login, Register } from "@/service/Auth"
import { useTranslations } from "next-intl"
import { Dispatch, FC, FormEvent, SetStateAction } from "react"

export const Auth: FC<{ closeAction: Dispatch<SetStateAction<boolean>> }> = ({ closeAction }) => {
    const t = useTranslations("AuthCantent")
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
                <TabsTrigger value="login">{t("auth1")}</TabsTrigger>
                <TabsTrigger value="register">{t("auth2")}</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Card className="bg-[#ffffff]">
                    <CardHeader>
                        <CardTitle>{t("auth1")}</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleLogin}>
                        <CardContent className="space-y-2 mb-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">{t("auth3")}</Label>
                                <Input name="email" autoComplete="off" type="email" id="email" placeholder={t("auth5")} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">{t("auth4")}</Label>
                                <Input name="password" autoComplete="off" type="password" id="password" placeholder={t("auth6")} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="bg-[#000000] text-[#ffffff]">{t("auth1")}</Button>
                        </CardFooter>
                    </form>
                </Card>
            </TabsContent>
            <TabsContent value="register">
                <Card className="bg-[#ffffff]">
                    <CardHeader>
                        <CardTitle>{t("auth2")}</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleRegister}>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="fullname">{t("auth7")}</Label>
                                <Input id="fullname" type="text" placeholder={t("auth8")} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">{t("auth3")}</Label>
                                <Input id="email" type="text" placeholder={t("auth5")} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">{t("auth4")}</Label>
                                <Input id="password" type="password" placeholder={t("auth6")} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="bg-[#000000] text-[#ffffff] mt-[8px]">{t("auth2")}</Button>
                        </CardFooter>
                    </form>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
