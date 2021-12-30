import axios from "axios";
import { memo, useEffect, useState, VFC } from "react";
import { CustomPagination } from "../componets/CustomPagination";
import { Genres } from "../componets/Genres";
import { SingleContent } from "../componets/SingleContent";
import { useGenre } from "../hooks/useGenre";

export const Series: VFC = memo(() => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  // @ts-ignore
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=ja&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);

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

  return (
    <div>
      <span className="uppercase flex justify-center font-serif text-4xl px-1 rounded-3xl text-white">
        TV Series
      </span>

      <Genres
        // @ts-ignore
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />

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
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {
        // @ts-ignore
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      }
    </div>
  );
});
