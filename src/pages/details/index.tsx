// import { FC, useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import { CustomModal, Layout, MovieCard } from "../../components";
// import { BASE_IMG } from "../../constants";
// import { withAuth } from "../../hoc";
// import { servicesMovies } from "../../services/movies";
// import { SectionDetails } from "../../types";
// import "./styles.scss";
// import YouTube from "react-youtube";

// const DetailsPage = () => {
//   const [detail, setDetails] = useState<SectionDetails>();
//   const { id } = useParams();
//   const [playing, setPlaying] = useState(false);
//   const [trailer, setTrailer] = useState();
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   useEffect(() => {
//     if (id) {
//       servicesMovies.getById(id).then((data) => setDetails(data));
//     }
//   }, []);
//   return (
//     <Layout>
//       <Container
//         fluid
//         className="d flex"
//         style={{
//           backgroundImage: `url(${BASE_IMG}${detail?.backdrop_path})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "100vh",
//         }}
//       >
//         <Row>
//           <Col>
//             <MovieCard
//               title={""}
//               img={`${BASE_IMG}${detail?.poster_path}`}
//               id={Number(`${id}`)}
//               label={"Trailer"}
//             />
//           </Col>
//           <Col className="text-light fw-bolder ">
//             <h2 className="fw-bold">{detail?.title}</h2>
//             <p className="">Resúmen: {detail?.overview}</p>

//             <p className="">Página Web: {detail?.homepage}</p>
//             <p className="">
//               Producida por:{" "}
//               {detail?.production_companies.map((co) => co.name).join(", ")}
//             </p>
//             <p className="">Lanzamiento: {detail?.release_date}</p>
//             <p className="">Presupuesto: {detail?.budget}</p>
//             <p className="">Cantidad de Votos: {detail?.vote_count}</p>
//           </Col>
//         </Row>
//       </Container>

//       <div>
//         {detail ? (
//           <div className="viewtrailer">
//             {playing ? (
//               <>
//                 <YouTube
//                   videoId={detail?.id?.toString()}
//                   className="reproductor container"
//                   opts={{
//                     width: "100%",
//                     height: "100%",
//                     playerVars: {
//                       autoplay: 1,
//                       controls: 0,
//                       cc_load_policy: 0,
//                       fs: 0,
//                       iv_load_policy: 0,
//                       modestbranding: 0,
//                       rel: 0,
//                       showinfo: 0,
//                     },
//                   }}
//                 />
//                 <button onClick={() => setPlaying(false)} className="boton">
//                   Close
//                 </button>
//               </>
//             ) : (
//               <div className="container">
//                 <div className="">
//                   {trailer ? (
//                     <button
//                       className="boton"
//                       onClick={() => setPlaying(true)}
//                       type="button"
//                     >
//                       Play Trailer
//                     </button>
//                   ) : (
//                     <CustomModal />
//                     // <p className="text-white fw bold">
//                     //   Sorry, no trailer available
//                     // </p>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : null}
//       </div>
//     </Layout>
//   );
// };

// export const Details = withAuth(DetailsPage);

import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout, MovieCard } from "../../components";
import { BASE_IMG } from "../../constants";
import { withAuth } from "../../hoc";
import { servicesMovies } from "../../services/movies";
import { SectionDetails } from "../../types";

const DetailsPage = () => {
  const [detail, setDetails] = useState<SectionDetails>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      servicesMovies.getById(id).then((data) => setDetails(data));
    }
  }, []);
  return (
    <Layout>
      <Container
        fluid
        className="d flex"
        style={{
          backgroundImage: `url(${BASE_IMG}${detail?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Row>
          <Col>
            <MovieCard
              title={""}
              img={`${BASE_IMG}${detail?.poster_path}`}
              id={Number(`${id}`)}
              label={"Trailer"}
            />
          </Col>
          <Col className="text-light fw-bolder ">
            <h2 className="fw-bold">{detail?.title}</h2>
            <p className="">Resúmen: {detail?.overview}</p>

            <p className="">Página Web: {detail?.homepage}</p>
            <p className="">
              Productora:{" "}
              {detail?.production_companies.map((co) => co.name).join(", ")}
            </p>
            <p className="">Lanzamiento: {detail?.release_date}</p>
            <p className="">Presupuesto: {detail?.budget}</p>
            <p className="">Cantidad de Votos: {detail?.vote_count}</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const Details = withAuth(DetailsPage);
