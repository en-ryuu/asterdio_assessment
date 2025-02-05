import { IconButton } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { toaster } from "../ui/toaster";
import { Tooltip } from "../ui/tooltip";

interface IFavouritesButton {
  isFavourite: boolean;
  onClickAction: () => void;
  toastMessage?: boolean;
}
export default function FavouriteButton({
  isFavourite,
  onClickAction,
  toastMessage = true,
}: IFavouritesButton) {
  return (
    <Tooltip
      content={`${
        isFavourite ? "Remove this from" : "Add this to"
      } your favourites`}
    >
      <IconButton
        aria-label="Add to favourites"
        variant="outline"
        pos={"absolute"}
        top={3}
        right={3}
        size={"sm"}
        onClick={() => {
          onClickAction();
          if (toastMessage)
            toaster.create({
              type: "info",
              title: isFavourite
                ? "Removed from favourites"
                : "Added to favourites.",
            });
        }}
      >
        {isFavourite ? (
          <BsFillHeartFill size="1.5rem" fill="red" />
        ) : (
          <BiHeart size="1.5rem" />
        )}
      </IconButton>
    </Tooltip>
  );
}
