import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MainContent.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MainContent() {
  const floodLocations = [
    { lat: -6.966667, lng: 110.416664, description: "Banjir di Jalan Pemuda" },
    { lat: -6.973333, lng: 110.42, description: "Banjir di Jalan Gajahmada" },
    {
      lat: -6.9775,
      lng: 110.425833,
      description: "Banjir di Jalan Pandanaran",
    },
  ];

  console.log("MainContent rendered");

  return (
    <Container className="main-content">
      <Row className="text-center">
        <Col>
          <Image
            src={`${process.env.PUBLIC_URL}/images/banjir1.png`}
            alt="Semarang Siaga Banjir"
            fluid
            className="main-image"
          />
        </Col>
      </Row>
      <Row className="content mt-4">
        <Col className="text-center">
          <p className="text">
            Badan Nasional Penanggulangan Bencana atau BNPB juga menjelaskan
            bahwa Semarang sering mengalami banjir adalah karena sistem drainase
            dan tata kelola air di wilayah itu kurang baik. Misalnya, saluran
            primer yang kerap tergenang, ditambah saluran sekunder-tersier yang
            tak layak untuk disalurkan lantaran banyaknya sampah yang menyumbat
            di drainase. Selain itu, konsumsi air tanah secara berlebihan di
            wilayah Semarang hilir juga menjadi faktor lain pemicu banjir.
            Menurut BNPB, konsumsi air tanah secara berlebihan tersebut bisa
            menyebabkan penurunan muka tanah. Bahkan penurunan tanah di Kota
            Semarang mencapai 13 sentimeter per tahunnya.
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <Image
            src={`${process.env.PUBLIC_URL}/images/banjir2.png`}
            alt="Rescue"
            fluid
            className="rescue-image"
          />
        </Col>
      </Row>
      <Row className="content mt-4">
        <Col className="text-center">
          <p className="text">
            Dengan berbagai resiko yang muncul akibat bencana banjir, perlu ada
            pembinaan perihal evakuasi diri ketika banjir melanda. Melalui
            Semarang Siaga Bencana (SSB), diharapkan masyarakat dapat lebih
            waspada ketika terjadi bencana banjir. Semarang Siaga Bencana (SSB)
            juga bisa menjadi perpanjangan tangan para donatur untuk menolong
            para korban terdampak melalui berbagai program kebaikan.Semarang
            Siaga Bencana (SSB) juga bisa menjadi perpanjangan tangan para
            donatur untuk menolong para korban terdampak melalui berbagai
            program kebaikan.
          </p>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <MapContainer
            center={[-6.966667, 110.416664]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {floodLocations.map((location, idx) => (
              <Marker key={idx} position={[location.lat, location.lng]}>
                <Popup>{location.description}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Col>
      </Row>
      <div className="spacer"></div>

      <Row className="text-center mt-4">
        <Col>
          <div className="donation-container">
            <p className="donation-message">
              Bencana datang tanpa diduga. <br />
              Siagakan bantuan untuk mereka yang terdampak bencana
            </p>
            <Link to="/donation">
              <button className="donate-button">Donasi</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
