// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const CustomModal = () => {
//   const values: (boolean | string)[] = [
//     true,
//     "sm-down",
//     "md-down",
//     "lg-down",
//     "xl-down",
//     "xxl-down",
//   ];
//   const [fullscreen, setFullscreen] = useState<
//     boolean | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down"
//   >(true);
//   const [show, setShow] = useState<boolean>(false);

//   function handleShow(
//     breakpoint:
//       | boolean
//       | "sm-down"
//       | "md-down"
//       | "lg-down"
//       | "xl-down"
//       | "xxl-down"
//   ) {
//     setFullscreen(breakpoint);
//     setShow(true);
//   }

//   return (
//     <>
//       {values.map((v, idx) => (
//         <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
//           Full screen
//           {typeof v === "string" && `below ${v.split("-")[0]}`}
//         </Button>
//       ))}
//       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Modal body content</Modal.Body>
//       </Modal>
//     </>
//   );
// };

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          Perdón! Trailer no disponible
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { CustomModal };
