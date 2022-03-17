import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
export default function DetailsModal({ product }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { title, image, price, category, rating, description } = product;

  let stars = [];
  for (let i = 1; i < rating.rate; i++) {
    stars.push(i);
  }

  return (
    <>
      <Button
        variant="primary"
        className="btn btn-sm btn-info rounded-0"
        onClick={handleShow}
      >
        Show Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title as={"h5"}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-header text-center p-2">
            <img src={image} alt={title} width={"200"} />
          </div>
          <div className="d-flex align-items-center justify-content-between py-3">
            <span>{price} $</span>
            <span className="text-danger">
              {stars.map((number) => (
                <AiFillStar key={number} />
              ))}
              {rating.rate}{" "}
              <small className="text-dark">({rating.count})</small>
            </span>
          </div>
          <p className="my-3">{description}</p>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-wrap align-items-center justify-content-between">
          <span>{category}</span>
          <div className="d-flex gap-2 flex-wrap align-items-center">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Buy Now
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
