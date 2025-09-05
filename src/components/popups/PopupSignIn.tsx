

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useStore } from "../../store";
import { useEffect, } from "react";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MyInput from "../MyInput";
import Popup from "./Popup";
import { useMutation, QueryClient, } from '@tanstack/react-query';
import { jwtDecode } from "jwt-decode";
import { IsVerifyToken } from "../../utils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { IJwtPayload } from "../../interface";








export default function ShowSignIn(): React.ReactElement {


  const { setFetchErrMessage, setPopupSignIn, setPopupSignUp, setIsLoading, setUserId } = useStore()
  const navigate = useNavigate();


const formSchema = z.object({
  email: z.string().email({ message: "Некоректний email" }),
  password: string().min(5, { message: 'Не коротше 5 символів' })
})

interface IUserSignIn {
  email: string;
  password: string;
}

 type FormData = z.infer<typeof formSchema>;
const queryClient = new QueryClient()

  const URL = `${BASE_URL}/auth/signIn`
  const { control, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: '',
        password: '',
      }
    })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data)
  }

  const openSignUpPopup = () => {
    setPopupSignIn(false)
    setPopupSignUp(true)
    setFetchErrMessage(null)
  }

  async function fetchData(data: IUserSignIn) {
    try {
      const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        const errData = await res.json()
        throw new Error(`${errData.message}`);
      }
      return await res.json();
    } catch (err) {
      throw err;
    }
  }

  const mutation = useMutation({
    mutationFn: (dataUser: IUserSignIn) => fetchData(dataUser),
    onSuccess: (query) => {
      setFetchErrMessage(null)
      setIsLoading(false)
      setPopupSignIn(false)
      setPopupSignUp(false)
      const token = query?.token

      const decoded = jwtDecode<IJwtPayload>(token);
      if (IsVerifyToken(decoded.exp)) {
        Cookies.set('token', token)
        navigate("/cabinet")
        setUserId(decoded.id)
      }
    },
    onError: (error) => {
      if (error instanceof Error) {
        setFetchErrMessage(error.message)
        setIsLoading(false)
      }
    }
  });

  useEffect(() => {
    if (mutation.isPending) setIsLoading(mutation.isPending);
  }, [mutation.isPending])

  return (
    <Popup btnText="Увійти" onSubmitForm={handleSubmit(onSubmit)} title="Вхід" >

      <Controller name="email" control={control}
        render={({ field: { value, onChange } }) => (
          <MyInput value={value} onChange={onChange} type="email" placeholder="Ваша електронна пошта" labelText='Email' />
        )}
      />
      {errors.email ? <span className="text-[#F2890F] h-8">{errors.email.message}</span> : <div className="h-8"></div>}

      <Controller name="password" control={control}
        render={({ field: { value, onChange } }) => (
          <MyInput value={value} onChange={onChange} type="password" placeholder="Введіть пароль" labelText="Пароль" />
        )}
      />
      {errors.password ? <span className="text-[#F2890F] h-8">{errors.password.message}</span> : <div className="h-8"></div>}

      <div className='mx-auto'>
        <p className='text-amber-50 flex gap-3 mb-6'>
          Немає акаунту?
          <button className=" flex gap-6 text-amber-50 hover:text-[#fec432] mr-1 " onClick={openSignUpPopup}>
            <span className="underline ">Зареєструватися</span>
          </button>
        </p>
      </div>
    </Popup>

  )
}