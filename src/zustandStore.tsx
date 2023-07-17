import create from "zustand";

type Item = {
  id: number;
  name: string;
  description: string;
};

type State = {
  username: string;
  description: string;
  items: Item[];
};

export const useStore = create<State>(() => ({
  username: "Petri Sarajärvi",
  description: "Full-Stack developer",
  items: [
    { id: 1, name: "Item 1", description: "This is item 1" },
    { id: 2, name: "Item 2", description: "This is item 2" },
    { id: 3, name: "Item 3", description: "This is item 3" },
    { id: 4, name: "Item 4", description: "This is item 4" },
  ],
}));
