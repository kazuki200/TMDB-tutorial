import { memo, VFC } from "react";
import { img_300, unavailable } from "../config/config";
import Badge from '@mui/material/Badge';
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
    <div className="flex flex-col w-6/12 sm:w-52 pt-1 my-1 mx-0 bg-gray-600 rounded-xl   relative font-header  hover:bg-white hover:text-black ">
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
    </div>
  );
};
