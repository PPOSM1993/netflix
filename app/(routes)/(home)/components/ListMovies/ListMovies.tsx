"use client";
import { BlockMovies } from "@/components/Shared/BlockMovies";
import { ListMoviesProps } from "./ListMovies.type";

export function ListMovies(props: ListMoviesProps) {

    const { movies } = props;

    return (
        <>
            <div>
                <BlockMovies
                    title="Favorite Movies"
                    isMyList={true}
                    movies={movies}
                />
            </div>
        </>
    )
}