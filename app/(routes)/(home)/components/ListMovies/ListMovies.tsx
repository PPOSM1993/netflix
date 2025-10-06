"use client";
import { BlockMovies } from "@/components/Shared/BlockMovies";
import { ListMoviesProps } from "./ListMovies.type";
import { useLovedFilms } from "@/hooks/use-loved-films";
import { useCurrentNetflixUser } from "@/hooks/use-current.users";


export function ListMovies(props: ListMoviesProps) {
  const { movies } = props;
  const { lovedFilmsByUser } = useLovedFilms();
  const { currentUser } = useCurrentNetflixUser();

  const userNetflix = currentUser?.id;
  const lovedFilms = userNetflix ? lovedFilmsByUser[userNetflix] : [];

  return (
    <div>
      <BlockMovies
        title="Favorite Movies"
        movies={lovedFilms}
        isMyList={true}
      />
      <BlockMovies
        title="Must Favorite Movies"
        movies={movies}
        isMyList={false}
      />
    </div>
  );
}