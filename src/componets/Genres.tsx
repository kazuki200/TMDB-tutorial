import { Chip } from "@material-ui/core";
import axios from "axios";
import { memo, useEffect, VFC } from "react";

export const Genres: VFC = memo(
  // @ts-ignore
  ({ selectedGenres, setSelectedGenres, genres, setGenres, setPage, type }) => {

    const handleAdd = (genre: string) => {
      setSelectedGenres([...selectedGenres, genre]);
      // @ts-ignore
      setGenres(genres.filter((g: string) => g.id !== genre.id));
      setPage(1);
    };

    const handleRemove = (genre:string) => {
      setSelectedGenres(
         // @ts-ignore
        selectedGenres.filter((selected:string) => selected.id !== genre.id)
      );
        setGenres([...genres,genre]);
        setPage(1)
    }

    const fetchGenres = async () => {
      const { data } = await axios.get(
        // @ts-ignore
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setGenres(data.genres);
    };
    console.log(genres);
    useEffect(() => {
      fetchGenres();

      return () => {
        setGenres({});
      };
    }, []);

    return (
      <div className="py-1 px-0">
        {selectedGenres &&
          selectedGenres.map((genre: string) => (
            <Chip
              // @ts-ignore
              label={genre.name}
              style={{
                margin: 2,
              }}
              color="primary"
              size="small"
              // @ts-ignore
              key={genre.id}
              clickable
              onDelete={() => handleRemove(genre)}
            />
          ))}
        {genres &&
          genres.map((genre: string) => (
            <Chip
              // @ts-ignore
              label={genre.name}
              style={{
                margin: 2,
              }}
              size="small"
              // @ts-ignore
              key={genre.id}
              clickable
              onClick={() => handleAdd(genre)}
            />
          ))}
      </div>
    );
  }
);
