import { quests } from "../mock-data";
import { create } from "zustand";
 import { IStor } from "./interface";


export const useStore = create<IStor>((set, get) => ({
  allQuests: quests,
  questsOfGenre: quests,
  popupShow: false,
  btnIsActive: 0,

  setPopupShow: (flag) => set({ popupShow: flag }),

  setBtnActive: (index) => set({ btnIsActive: index }),

  setGenre: (id) => {
    const { allQuests } = get();
    if (id === "Всі Ігри") {
      set({ questsOfGenre: allQuests });
    } else {
      const filterQuest = allQuests.filter((el) => el.genre === id);
      set({ questsOfGenre: filterQuest });
    }
  },
}));
