import { VFC, useState, useEffect, memo } from "react";
import axios from "axios";
import { SingleContent } from "../componets/SingleContent";
import { CustomPagination } from "../componets/CustomPagination";

interface Mv {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  first_air_date: string;
  release_date: string;
  media_type: string;
  vote_average: number;
}
export const Trending: VFC = memo(() => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="uppercase flex justify-center font-serif text-4xl px-1 rounded-3xl text-white">Trending</span>
      <div className="flex flex-wrap justify-between">
        {content &&
          content.map((c: Mv) => (
            // @ts-ignore
            <SingleContent
              // @ts-ignore
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              key={c.id}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div> 
      {
         // @ts-ignore
         <CustomPagination setPage={setPage} />
      }
      
    </div>
  );
});
