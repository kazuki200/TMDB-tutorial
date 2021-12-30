import { memo, VFC } from "react";
import { img_300, unavailable } from "../config/config";
import Badge from '@mui/material/Badge';
import { ContentModal } from "./ContentModal";
interface SingleProp {
  id: number;
  title: string;
  name: string;
  poster: string;
  first_air_date: string;
  date: string;
  media_type: string;
  vote_average: number;
}


export const SingleContent: VFC<SingleProp> = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    // @ts-ignore
    <ContentModal>
      <Badge badgeContent={vote_average} color={vote_average>6 ? "primary" : "secondary"}/>
      <img
        className="rounded-xl"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="w-full text-center text-lg py-2 px-0">{title}</b>
      <span className="flex justify-between pb-1 py-0 px-1 ">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="flex justify-between pb-1 py-0 px-1 ">{date}</span>
      </span>
    </ContentModal>
  );
};
