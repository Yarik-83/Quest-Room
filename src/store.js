import { quests } from "../mock-data";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create((set, get) => ({
  
      allQuests: quests,
      questsOfGenre: quests,
      popupShow: false,
      btnIsActive: false,
      local: "",

      setPopupShow: (flag) => set({ popupShow: flag }),

      setBtnActive: (value) => set({ btnIsActive: value }),

      setLocation: (value) => set({ local: value }),

      setGenre: (id) => {
        const { allQuests} = get();
        if (id === "Всі Ігри") {
          set({ questsOfGenre: allQuests });
        } else {
          const filterQuest = allQuests.filter((el) => el.genre === id);
          set({ questsOfGenre: filterQuest });
        }
      },
    }),
);
