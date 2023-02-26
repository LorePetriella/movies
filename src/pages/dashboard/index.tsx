import { Layout, Slider } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { servicesMovies } from "../../services/movies";
import { Movie } from "../../types";

const DashboardPage = () => {
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    servicesMovies
      .get("/movie/now_playing")
      .then((data) => setnowPlaying(data.results));
  }, []);

  return (
    <Layout>
      <Slider movies={nowPlaying} />
    </Layout>
  );
};

export const Dashboard = withAuth(DashboardPage);
