
import CloseIcon from '../icons/CloseIcon';
import { useStore } from '../../store';
import Checkbox from '../Checkbox';
import { useEffect, } from 'react';
import z, { optional } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../App';
import MyInput from '../MyInput';
import Popup from './Popup';
import Cookies from 'js-cookie';
import { BASE_URL } from '../../config';
import { verifyPhone } from '../../utils';



export default function PopupRequestOnGame(): React.JSX.Element {

  const { setGameRequest, setFetchErrMessage, setIsLoading, setPopupSignIn, minPlayers, maxPlayers, questId, userId } = useStore()

  const formSchema = z.object({
    name: z.string().min(2, { message: 'Не менше 2 символів' }).max(20, { message: 'Не більше 20 символів' }),
    phone: z.string().refine((val) => verifyPhone(val), { message: "Не коректний номер телефону" }),
    person: z.string().refine((val) => +val >= minPlayers! && +val <= maxPlayers!, {
      error: `Від ${minPlayers} до ${maxPlayers} гравців`
    })
  })

  type FormData = z.infer<typeof formSchema>;

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      person: '',
    }
  })

  const onSubmit = (data: FormData) => {
    const newData = {
      ...data,
      clientId: userId,
      questId: questId,
    }
    mutation.mutate(newData);
  };
  const URL = `${BASE_URL}/order`;

  const postData = async (body: FormData) => {
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    if (!res.ok) {
      const error = await res.json();
      if (error.message[0].startsWith('clientId must')) {
        throw new Error(`Ввійдіть в свій кабінет!`);
      }
      throw  error;
    }
    return res.json();
  };

  const mutation = useMutation({
    mutationFn: (newOrder: FormData) => postData(newOrder),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      });
      setIsLoading(false)
      setPopupSignIn(false)
    },

    onError: (error: object) => {
      setIsLoading(false)
      if (error instanceof Error) {
        setFetchErrMessage(error.message)
        reset()
        setGameRequest(false)
        setPopupSignIn(true)
      }
    }
  });

  useEffect(() => {
    if (mutation.isPending) setIsLoading(mutation.isPending);
  }, [mutation.isPending])

  const closePopup = () => { setGameRequest(false) }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
  }, [closePopup]);

  return (
    <>
      <Popup btnText="Відправити заявку" onSubmitForm={handleSubmit(onSubmit)} title="Заявка на гру" >

        <Controller name="name" control={control}
          render={({ field }) => (
            <MyInput {...field} type="text" placeholder="Вкажіть і'мя " labelText="Ім'я" />
          )}
        />
        {errors.name ? <span className="text-[#F2890F] h-8">{errors.name.message}</span> : <div className="h-8"></div>}  {/* Костиль  !? */}

        <Controller name="phone" control={control}
          render={({ field }) => (
            <MyInput {...field} type="phone" placeholder="Контактний номер телефону" labelText='Телефон' />
          )}
        />
        {errors.phone ? <span className="text-[#F2890F] h-8">{errors.phone.message}</span> : <div className="h-8"></div>}  {/* Костиль  !? */}

        <Controller name="person" control={control}
          render={({ field }) => (
            <MyInput {...field} type="number" placeholder="Вкажіть кількість гравців" labelText='Гравців' />
          )}
        />

        {errors.person ? <span className="text-[#F2890F] h-8">{errors.person.message}</span> : <div className="h-8"></div>}  {/* Костиль  !? */}

        <div className=" flex gap-6 ">
          <Checkbox className='appearance-none bg-[#535353] min-w-[16px] max-h-[16px] checked:border-[#F2890F] checked:border-[2px]' />
          <p className=" text-[#e5e5e5] leading-[144%] font-bold mb-8 ">Погоджуюсь з <span className=' underline  '>правилами обробки персональних даних</span>  та <span className='trxt-rules__span'>угодою користувачів</span> </p>
        </div>

      </Popup>
      {mutation.isSuccess && <div className=" flex justify-center z-10 absolute top-0 w-full h-[768px] backdrop-blur-md ">
        <div className=" flex flex-col bg-[#141414] w-120 h-120 rounded-2xl mt-25 pl-8 pr-11 pt-13 relative text-center ">
          <CloseIcon click={closePopup} color="#A6A6A6" className=' items-end justify-end absolute right-8 top-8' />
          <h3 className=" text-[40px] font-extrabold text-[#ffffff] mt-5 ">Заявка прийнята</h3>
          <h4 className=' text-[#ffffff] mt-5'>Дякуємо! Ваше замовлення прийнято. Наш менеджер зв’яжеться з вами найближчим часом</h4>
        </div>
      </div>}
    </>
  )
}






