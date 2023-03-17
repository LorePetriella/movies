import React, { FC } from "react";
import { Button } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

type Props = {
  msg: string;
  show: boolean;
  onClose: () => void;
};

const CustomModal: FC<Props> = ({ msg, show, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate(-1);
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

        <Modal.Body className="text-center">{msg}</Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export { CustomModal };
