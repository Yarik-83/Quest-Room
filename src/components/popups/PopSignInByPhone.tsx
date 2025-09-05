import z from "zod";
import Popup from "./Popup";
import { useStore } from "../../store";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "../../config";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../App";
import { useEffect } from "react";
import MyInput from "../MyInput";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { IsVerifyToken } from "../../utils";
import Cookies from "js-cookie";
import { IJwtPayload } from "../../interface";


export default function SignInByPhone() {

  const { setFetchErrMessage, setIsLoading, setSignInByPhone, setUserId, userId, userPhone } = useStore()
  const navigate = useNavigate()

  const formSchema = z.object({
    smsCode: z.string().min(6).max(6),
  });

  type IFormInput = z.infer<typeof formSchema>;

  interface IFormData {
    code: string,
    phone: string
  };

  const { handleSubmit, control, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      smsCode: ''
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newData: IFormData = {
      code: data.smsCode,
      phone: userPhone
    }
    mutation.mutate(newData);
  };

  const URL = `${BASE_URL}/auth/otp-verify`;

  const SendPhone = async (data: IFormData) => {
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
        throw new Error(errData.message)
      }
      return res.json()
    } catch (error) {
      throw error
    }
  };

  const mutation = useMutation({
    mutationFn: (data: IFormData) => SendPhone(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      setSignInByPhone(false)
      setIsLoading(false)
      const token = data?.token
      const decoded = jwtDecode<IJwtPayload>(token);

      if (IsVerifyToken(decoded.exp)) {
        Cookies.set('token', token)
        navigate("/cabinet",)
        setUserId(decoded.id)
      }
    },
    onError: (error) => {
      setFetchErrMessage(error.message)
      setIsLoading(false)
    },
  });

  useEffect(() => {
    if (mutation.isPending) {
      setIsLoading(mutation.isPending);
    }
  }, [mutation.isPending])

    useEffect(() => {
    navigate("/cabinet")
}, [userId])

  return (
    <Popup btnText="Надіслати" title="Вхід" onSubmitForm={handleSubmit(onSubmit)} >
      <div className="pt-10 pb-20">
        <Controller name="smsCode" control={control}
          render={({ field: { value, onChange } }) => (
            <MyInput value={value} onChange={onChange} type="number" placeholder="Введіть код з SMS" labelText='Код підтвердження' />
          )}
        />
        {errors.smsCode ? <span className="text-[#F2890F] h-8">{errors.smsCode.message}</span> : <div className="h-8"></div>}
      </div>
    </Popup>
  )

}
