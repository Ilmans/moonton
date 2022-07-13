import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Flickity from "react-flickity-component";

function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>

            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity options={flickityOptions} className="gap-[30px]">
                    {/* Movie Thumbnail */}
                    {[1, 2, 3, 4].map(() => (
                        <FeaturedMovie
                            key={Math.random()}
                            slug="the-batman"
                            thumbnail="../images/featured-1.png"
                            name="The Batman In Love"
                            rating={4.5}
                        />
                    ))}
                </Flickity>
                <div className="mt-4">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="" options={flickityOptions}>
                        {[1, 2, 3, 4, 5, 6].map(() => (
                            <MovieCard key={Math.random()} 
                            thumbnail={"../images/featured-1.png"}
                            name={"The Batman In Love"}
                            category={"Action"}
                            slug={"the-batman"}
                            />
                        ))}
                    </Flickity>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <Authenticated children={page} />;
export default Dashboard;
