

import { useForm, Controller } from "react-hook-form";
import { useStore } from "../../store";
import { useEffect, } from "react";
import { string, z, } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MyInput from "../MyInput";
import Popup from "./Popup";
import {  useMutation, } from '@tanstack/react-query';
import { queryClient } from "../../App";
import { BASE_URL } from "../../config";



const formSchema = z.object({
  name: z.string().min(2, { message: 'Не менше 2 символів' }).max(20, { message: 'Не більше 20 символів' }),
  email: z.string().email({ message: "Некоректний email" }),
  password: string().min(5, { message: 'Не коротше 5 символів' })
});


type FormData = z.infer<typeof formSchema>;

export default function PopupSignUp(): React.ReactElement {

  const { setFetchErrMessage, setPopupSignIn, setPopupSignUp, setIsLoading } = useStore();

  const URL =`${BASE_URL}/auth/signUp`

  const { control, handleSubmit, formState: { errors }, } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  const fetchUser = async (data: FormData) => {
    try {
      const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(`${errData.message}`)
      }
      return res.body
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  };

  const mutation = useMutation({
    mutationFn: (newUser: FormData) => fetchUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setFetchErrMessage(null)
      setIsLoading(false)
      setPopupSignUp(false)
      setPopupSignIn(true)
    },
    onError: (error: object) => {
      if (error instanceof Error) setFetchErrMessage(error.message);
      setIsLoading(false)
    }
  });


  useEffect(() => {
    if (mutation.isPending) setIsLoading(mutation.isPending);
  }, [mutation.isPending]);


  return (
    <Popup btnText="Продовжити" onSubmitForm={handleSubmit(onSubmit)} title="Реєстрація" >

      <Controller name="name" control={control}
        render={({ field }) => (
          <MyInput {...field} type="name" placeholder="Вкажіть ваше ім'я" labelText="Ім'я" />
        )}
      />
      {errors.name ? <span className="text-[#F2890F] h-8">{errors.name.message}</span> : <div className="h-8"></div>}

      <Controller name="email" control={control}
        render={({ field: { value, onChange } }) => (
          <MyInput value={value} onChange={onChange} type="email" placeholder="Ваша електронна пошта" labelText='Email' />
        )}
      />
      {errors.email ? <span className="text-[#F2890F] h-8">{errors.email.message}</span> : <div className="h-8"></div>}

      <Controller name="password" control={control}
        render={({ field: { value, onChange } }) => (
          <MyInput value={value} onChange={onChange} type="password" placeholder="Введіть пароль" labelText='Пароль' />
        )}
      />

      {errors.password ? <span className="text-[#F2890F] h-8">{errors.password.message}</span> : <div className="h-8"></div>}

    </Popup>
  )
};