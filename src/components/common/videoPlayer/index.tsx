import { useState } from "react";
import YouTube from "react-youtube";
import { SectionDetails } from "../../../types";
import { CustomModal } from "../modal";

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [detail, setDetails] = useState<SectionDetails>();

  return (
    <div>
      {detail ? (
        <div className="viewtrailer">
          {playing ? (
            <>
              <YouTube
                videoId={detail?.id?.toString()}
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
              <button onClick={() => setPlaying(false)} className="boton">
                Close
              </button>
            </>
          ) : (
            <div className="container">
              <div className="">
                {trailer ? (
                  <button
                    className="boton"
                    onClick={() => setPlaying(true)}
                    type="button"
                  >
                    Play Trailer
                  </button>
                ) : (
                  <CustomModal />
                  // <p className="text-white fw bold">
                  //   Sorry, no trailer available
                  // </p>
                )}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export { Player };
