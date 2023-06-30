import { create } from "zustand";

const useAppState = create((set) => ({
  messages: [],
  userName: "",
  socket: null,
  setSocket: (socket) => set({ socket }),
  setUserName: (userName) => set({ userName }),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  setMessageList: async (messages) => set({ messages }),
}));

export { useAppState };
