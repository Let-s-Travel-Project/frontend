import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SectorStore {
  selectedSector: number;
  setSelectedSector: (val: number) => void;
}
export const useSectorStore = create(
  devtools<SectorStore>((set) => ({
    selectedSector: 0,
    setSelectedSector: (val) => set(() => ({ selectedSector: val })),
  }))
);
