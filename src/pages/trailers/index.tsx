import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { servicesMovies } from "../../services/movies";
import "./styles.scss";
import YouTube from "react-youtube";
import { CustomModal } from "../../components/common";
import { BeatLoader } from "react-spinners";

type TrailerProps = {
  key: string;
  name: string;
};

const TrailerPage = () => {
  const { id } = useParams();

  const [trailer, setTrailer] = useState<TrailerProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const navigate = useNavigate();
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
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <div className="text-center mt-5">
          <BeatLoader color="#FFFFFF" />
        </div>
      ) : trailer ? (
        <YouTube
          videoId={trailer.key}
          className="reproductor container"
          opts={{
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <CustomModal
          show={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          msg={"Lo sentimos, el trailer no está disponible"}
          navigate={() => navigate(-1)}
        />
      )}
    </Layout>
  );
};

export const Trailer = withAuth(TrailerPage);
