import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorModal, Layout } from "../../components";
import { withAuth } from "../../hoc";
import { servicesMovies } from "../../services/movies";
import "./styles.scss";
import YouTube from "react-youtube";

type TrailerProps = {
  key: string;
  name: string;
};

const TrailerPage = () => {
  const { id } = useParams();

  const [trailer, setTrailer] = useState<TrailerProps>();

  useEffect(() => {
    if (id) {
      servicesMovies
        .getById(id, {
          append_to_response: "videos",
        })
        .then((data) => {
          setTrailer(data.results);
          console.log(id, trailer, data.videos);

          if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
              (vid: { name: string }) => vid.name === "Official Trailer"
            );
            setTrailer(trailer ? trailer : data.videos.results[0]);
            console.log(trailer);
          }
        });
    }
  }, []);

  return (
    <Layout>
      {trailer ? (
        <>
          <YouTube
            videoId={trailer.key}
            className="reproductor container"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }}
          />
        </>
      ) : (
        <ErrorModal />
      )}
    </Layout>
  );
};
export const Trailer = withAuth(TrailerPage);
