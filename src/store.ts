import { quests } from "../mock-data";
import { create } from "zustand";
import { IStor } from "./interface";
import { string } from "zod";

export const useStore = create<IStor>((set, get) => ({
  allQuests: [],
  questsOfGenre: [],
  listQuests: [],
  popupGameRequest: false,
  popupSignUp: false,
  popupSignIn: false,
  signUpByPhone: false,
  signInByPhone: false,
  popLoginOptions: false,
  fetchErrMessage: null,
  btnIsActive: 0,
  isLoading: false,
  userId: null,
  questId: null,
  minPlayers: null,
  maxPlayers: null,


  setAllQuests: (arr) => set({ allQuests: arr, questsOfGenre: arr }),
  setListQuests: (arr) => set({ listQuests: ["Всі Ігри", ...arr] }),
  setGameRequest: (flag) => set({ popupGameRequest: flag }),
  setPopupSignUp: (flag) => set({ popupSignUp: flag }),
  setPopupSignIn: (flag) => set({ popupSignIn: flag }),
  setSignUpByPhone: (flag) => set({ signUpByPhone: flag }),
  setSignInByPhone: (flag) => set({ signInByPhone: flag }),
  setPopLoginOpt: (flag) => set({ popLoginOptions: flag }),
  setFetchErrMessage: (text) => set({ fetchErrMessage: text }),
  setBtnActive: (index) => set({ btnIsActive: index }),
  setIsLoading: (flag) => set({ isLoading: flag }),
  setUserId: (val) => set({ userId: val }),
  setQuestId: (val) => set({ questId: val }),
  setMinPlayers: (val) => set({ minPlayers: val }),
  setMaxPlayers: (val) => set({ maxPlayers: val }),
  setGenre: (id) => {
    const { allQuests } = get();
    if (id === "Всі Ігри") {
      set({ questsOfGenre: allQuests });
    } else {
      const filterQuest = allQuests.filter((el) => el.genre[0] === id);
      set({ questsOfGenre: filterQuest });
    }
  },
}));
