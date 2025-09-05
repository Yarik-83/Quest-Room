export interface IQuest {
  id: number;
  title: string;
  description: string;
  genre: string;
  level: string;
  people: string;
  time: string;
  picture: string;
  maxPlayers: number;
  minPlayers: number;
}

export interface IQuests {
  arr: IQuest[];
}

export interface IUser {
  name?: string;
  email?: string;
  phone?: string;
  createAt: any;
}

export interface IStor {
  allQuests: IQuest[];
  questsOfGenre: IQuest[];
  listQuests: string[];
  popupGameRequest: boolean;
  popupSignUp: boolean;
  popupSignIn: boolean;
  signInByPhone: boolean;
  signUpByPhone: boolean;
  popLoginOptions: boolean;
  fetchErrMessage: string | null;
  btnIsActive: number;
  isLoading: boolean;
  userId: null | number;
  questId: null | number;
  minPlayers: number | null;
  maxPlayers: number | null;
  userPhone: string;

  setAllQuests: (arr: IQuest[]) => void;
  setListQuests: (arr: string[]) => void;
  setGameRequest: (flag: boolean) => void;
  setPopupSignUp: (flag: boolean) => void;
  setPopupSignIn: (flag: boolean) => void;
  setSignUpByPhone: (flag: boolean) => void;
  setSignInByPhone: (flag: boolean) => void;
  setPopLoginOpt: (flag: boolean) => void;
  setFetchErrMessage: (text: string | null) => void;
  setBtnActive: (value: number) => void;
  setUserPhone: (value: string) => void;
  setGenre: (id: string) => void;
  setIsLoading: (flag: boolean) => void;
  setUserId: (val: null | number) => void;
  setQuestId: (val: null | number) => void;
  setMinPlayers: (val: number) => void;
  setMaxPlayers: (val: number) => void;
 
}

export interface IIconsProps {
  color?: string;
  className?: string;
  click?: () => void;
}

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IBtnProps {
  className?: string;
  text?: string;
  click?: () => void;
}

export interface IOrderGameRes {
  clientId: number;
  createAt: string;
  id: number;
  name: string;
  person: number;
  phone: string;
  quest: IQuestRes;
  questId: number;
}

export interface IQuestRes extends IQuest {
  id: number;
}

export interface IResUser extends IUser{
  id: number;
  creatAt: string;
  updateAt: string;
}
export interface IJwtPayload {
  id: number;
  exp: number;
}
