

export  interface IQuest {
  id: number,
  title: string
  description: string
  genre: string
  level: string
  people: string
  time: string
  picture: string
 }

 export interface IArrQuests {
  arr:IQuest[]
}

export interface IClassName {
    className: string
}

 export interface IStor {
   allQuests: IQuest[];
   questsOfGenre: IQuest[];
   popupShow: boolean,
   btnIsActive: number,
   setPopupShow: (flag: boolean) => void,
   setBtnActive: (value: number) => void,
   setGenre: (id: string) => void ,
 }

 export interface IIconsProps {
    color?: string,
    className?: string,
    click?: () => void
 }

 export interface ICildrenProps {
  children: React.ReactNode;
}

export interface IBtnProps {
className?: string,
text?: string,
click?: () => void
}
 