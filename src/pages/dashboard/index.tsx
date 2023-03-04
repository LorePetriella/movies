import { CustomModal, Gallery, Layout, Slider } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { servicesMovies } from "../../services/movies";
import { Movie } from "../../types";

const DashboardPage = () => {
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

  const [popular, setPopular] = useState<Movie[]>([]);

  const [topRated, settopRated] = useState<Movie[]>([]);

  useEffect(() => {
    servicesMovies
      .get("/movie/now_playing")
      .then((data) => setnowPlaying(data.results));

    servicesMovies
      .get("/movie/popular")
      .then((data) => setPopular(data.results));

    servicesMovies
      .get("/movie/top_rated")
      .then((data) => settopRated(data.results));
  }, []);

  return (
    <Layout>
      <Slider movies={nowPlaying} />

      <Gallery movies={popular} section={"Populares"} />
      <Gallery movies={topRated} section={"Las más votadas"} />
      <CustomModal />
    </Layout>
  );
};

export const Dashboard = withAuth(DashboardPage);
