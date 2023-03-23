import React, { FC } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

type Props = {
  msg: string;
  show: boolean;
  onClose: () => void;
  navigate?: () => void;
};

const CustomModal: FC<Props> = ({ msg, show, onClose, navigate }) => {
  const handleModalClose = () => {
    onClose();
    onClose();
    if (navigate) {
      navigate();
    }
  };

  return (
    <div
      className="modal show"
      style={{ display: show ? "block" : "none", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Trailer Status</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          <p className="lead">{msg}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export { CustomModal };
