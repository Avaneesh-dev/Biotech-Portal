import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container container-fluid">
      <div className="row row-content align-items-center">
        <div className="col-12 col-sm-4 order-sm-last col-md-3">
          <h3>Latest Events in Biotechnology</h3>
        </div>

        <div className="col col-sm order-sm-first col-md-3">
          <img
            className="mr-3 img-thumbnail align-self-center"
            src="/books-photo.jpg"
            alt="stack of books"
          ></img>
        </div>
        <div className="col col-sm order-sm-first col-md-6">
          <h2 className="mt-0">Research Papers</h2>
          <p className="d-none d-sm-block">
            Click the image to read the latest research papers published on top
            sources of Biotechnology Information like NCBI.
          </p>
        </div>
      </div>
      <div className="row row-content align-items-center my-5">
        <div className="col-12 col-sm-4 col-md-3">
          <h3>Bioinformatics Tools</h3>
        </div>
        <div className="col col-sm order-sm-last col-md-3">
          <img
            className="d-flex mr-3 img-thumbnail align-self-center"
            src="/bioinformatics.jpg"
            alt="Bioinformatics"
          ></img>
        </div>
        <div className="col col-sm col-md-6">
          <h2 className="mt-0">
            Sequence Analytics
          </h2>
          <p className="d-none d-sm-block">
            Get insights about any DNA sequence submitted here.
          </p>
        </div>
      </div>

      <div className="row row-content align-items-center container-fluid py-3">
        <div className="col-12 col-sm-4 order-sm-last col-md-3">
          <h3>Project Made Under Advisory of</h3>
        </div>
        <div className="col col-sm order-sm-first col-md">
          <div className="media">
            <img
              className="d-flex mr-3 img-thumbnail align-self-center"
              src="/Rekha-mam.jpg"
              alt="Dr. Rekha Dixit"
            ></img>
            <div className="media-body">
              <h2 className="mt-0">Dr. Rekha Dixit</h2>
              <h4>Professor, HOD</h4>
              <p className="d-none d-sm-block">
                Highly respected Professor with 20+ years of experience in
                Research, teaching and scientific writing. She is currently the
                HOD of Dept. of Commercial Biotechnology in College of
                Biotechnology. She guides several UG, PG and PHD students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
