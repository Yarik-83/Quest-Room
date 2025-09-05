import phone from "phone"


export const IsVerifyToken = (exp: number) => exp > Math.floor(Date.now() / 1000) ? true : false


export async function fetchData(url: string,) {
  try {
    return fetch(url).then(res => res.json())
  }catch(error){
     if (error instanceof Error)  throw new Error(`${error.message}`)
  }
};

export function verifyPhone(num: string): string{
  const validPhone = phone(num, {country: 'UA'})
  return validPhone.isValid? validPhone.phoneNumber : ''
}

