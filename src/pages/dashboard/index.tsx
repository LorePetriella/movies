import { CustomModal, Gallery, Layout, Slider } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { servicesMovies } from "../../services/movies";
import { Movie } from "../../types";
import { useSearchParams } from "react-router-dom";

const DashboardPage = () => {
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

  const [popular, setPopular] = useState<Movie[]>([]);

  const [topRated, settopRated] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    servicesMovies.getNowPlaying().then((data) => {
      setnowPlaying(data.results);
    });

    servicesMovies
      .getPopular({ page: searchParams.get("page") || "1" })
      .then((data) => {
        setPopular(data.results);
      });

    servicesMovies.getTopRated().then((data) => settopRated(data.results));
  }, []);

  return (
    <Layout>
      <Slider movies={nowPlaying} />

      <Gallery movies={popular} section={"Populares"} />
      <Gallery movies={topRated} section={"Las más votadas"} />
    </Layout>
  );
};

export const Dashboard = withAuth(DashboardPage);
