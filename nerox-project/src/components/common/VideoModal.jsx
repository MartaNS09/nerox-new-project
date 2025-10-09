import Modal from 'react-bootstrap/Modal';

const VideoModal = ({ show, handleClose, videoId = "oMhby921Ux4" }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {" "}
          <Modal.Title>Видео</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="video-modal-wrapper">
              <p>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoModal;
