import Popup from "./Popup";
import * as z from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import MyInput from "../MyInput";
import { useMutation, } from '@tanstack/react-query'
import { verifyPhone } from "../../utils";
import { queryClient } from "../../App";
import { BASE_URL } from "../../config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStore } from "../../store";
import { useEffect } from "react";



export default function SignUpByPhone(): React.ReactElement {


  const { setFetchErrMessage, setIsLoading, setSignInByPhone, setUserPhone, setSignUpByPhone } = useStore()
  const formSchema = z.object({
    phone: z.string().transform((val) => verifyPhone(val)).refine(((val) => val), { message: "Не коректний номер телефону" }),
  });

  type IFormInput = z.infer<typeof formSchema>;

  const { handleSubmit, control, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: ''
    }
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data.phone);
    setUserPhone(data.phone)
    mutation.mutate(data);
  };

  const URL = `${BASE_URL}/auth/otp-send`;

  const SendPhone = async (data: IFormInput) => {
    console.log(data);
    try {
      const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        const errData = await res.json()
        console.log(errData);
        throw new Error(errData.message)
      }
      return res.json()
    } catch (error) {
      throw error
    }
  };

  const mutation = useMutation({
    mutationFn: (pnone: IFormInput) => SendPhone(pnone),
    onSuccess: (data) => {
      if (data === false) {
        queryClient.invalidateQueries({ queryKey: ['phone'] })
        setSignUpByPhone(false)
        setSignInByPhone(true)
        setIsLoading(false)
      }
    },
    onError: (error) => {
      console.log(error.message);
      setFetchErrMessage(error.message)
      setIsLoading(false)
    },
  });

  useEffect(() => {
    if (mutation.isPending) {
      setIsLoading(mutation.isPending);
    }
  }, [mutation.isPending])

  return (
    <Popup btnText="Надіслати" title="Вхід" onSubmitForm={handleSubmit(onSubmit)} >
      <div className="pt-10 pb-20">
        <Controller name="phone" control={control}
          render={({ field: { value, onChange } }) => (
            <MyInput value={value} onChange={onChange} type="number" placeholder="Введіть ваш номер телефону" labelText='Tелефон' />
          )}
        />
        {errors.phone ? <span className="text-[#F2890F] h-8">{errors.phone.message}</span> : <div className="h-8"></div>}
      </div>
    </Popup>
  )

};