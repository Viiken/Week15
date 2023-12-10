import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

function DownloadsRestriction(props) {
  //Modal popup setup
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton id="modalScript">
        <Modal.Title>
          You are Currently Using Basic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modalScript">
        <p>
          Get Premium to Download and Listen to Music 
          Offline for Free. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Stay Basic</Button>
        <Button id="subButton" href="/subscription" variant="primary">Become Epic</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Downloads() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    //Button to call Modal
    <div className="pictureDiv">
      <div className="downloadButn">

        <h2 id="script2" className="customBg">Suggested for You</h2>
				<div className="musicCards">

					<Card id="indiCard" style={{ width: '18rem' }}>
					<Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZ7SvoZ3b1IXKI3tVkSYFJcvMys6T3MI2_-lwTIU9J0zCj-jWj"/>
					<Card.Body>
						<Card.Title>Audiomachine</Card.Title>
						<Card.Text>When it all Falls Down</Card.Text>
						<Button variant="danger" id="add-new-song">Add to Library</Button>
					</Card.Body>
					</Card>

					<Card id="indiCard" style={{ width: '18rem' }}>
					<Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-q64vOUb0mzLd3ca_5tQNWKaCH3esqTl-dFiaWRyoaocZyHEs" />
					<Card.Body>
						<Card.Title>Really Slow Motion</Card.Title>
						<Card.Text>End of an Era</Card.Text>
						<Button variant="danger" id="add-new-song">Add to Library</Button>
					</Card.Body>
					</Card>

					<Card id="indiCard" style={{ width: '18rem' }}>
					<Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1Tb2g4KZ2wVAS0pvObcHkcLkqJ2kgmSC6_5Xyng1dfq8I4nQO" />
					<Card.Body>
						<Card.Title>Two Steps from Hell</Card.Title>
						<Card.Text>Unleashed</Card.Text>
						<Button variant="danger" id="add-new-song">Add to Library</Button>
					</Card.Body>
					</Card>

					<Card id="indiCard" style={{ width: '18rem' }}>
					<Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBJVh5Hjvf3wsG4hRQBaEERhTyYzJ8DCoPfh43FrhvrjyuJJgU" />
					<Card.Body>
						<Card.Title>Thomas Bergersen</Card.Title>
						<Card.Text>Final Frontier</Card.Text>
						<Button variant="danger" id="add-new-song" >Add to Library</Button>
					</Card.Body>
					</Card>

					<Card id="indiCard" style={{ width: '18rem' }}>
					<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSld0xHT8xg951QhgarYasairOCwYnvOAZTAE7n0FMVbwvoxbED" />
					<Card.Body>
						<Card.Title>Two Steps from Hell</Card.Title>
						<Card.Text>Star Sky</Card.Text>
						<Button variant="danger" id="add-new-song">Add to Library</Button>
					</Card.Body>
					</Card>
				</div>

        <Button
          variant="primary"
          onClick={() => setModalShow(true)}>
          My Downloads
        </Button>

        <DownloadsRestriction
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

      </div>
    </div>
  );
}