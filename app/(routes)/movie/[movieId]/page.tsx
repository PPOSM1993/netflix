import React from "react";

export default async function MovieIdPage({
    params,
}: {
    params: { movieId: string };
}) {

    return (
        <>
            <div>
                <h1>
                    Movie Page Id
                    <p className="text-3xl text-white">{params.movieId}</p>
                </h1>
            </div>
        </>
    )
}