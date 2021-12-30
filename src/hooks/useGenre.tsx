export const useGenre = (selectedGenres: string) => {
  if (selectedGenres.length < 1) return "";
 // @ts-ignore
  const GenreIds = selectedGenres.map((g) => g.id);
 // @ts-ignore
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};
