import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouritesState {
  favouriteIds: number[];
  toggleFavourite: (eventId: number) => void;
  isFavourite: (eventId: number) => boolean;
}

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favouriteIds: [],
      toggleFavourite: (eventId) => {
        const { favouriteIds } = get();
        const isAlreadyFavourite = favouriteIds.includes(eventId);

        set({
          favouriteIds: isAlreadyFavourite
            ? favouriteIds.filter((id) => id !== eventId)
            : [...favouriteIds, eventId],
        });
      },
      isFavourite: (eventId) => get().favouriteIds.includes(eventId),
    }),
    { name: "favourite-events" } // Persist in localStorage
  )
);
