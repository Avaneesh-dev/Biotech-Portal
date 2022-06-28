import React, { useState } from "react";
import "./Sequence.css";
import { Button } from "reactstrap";
const nuc = require("central-dogma").nucleotide;
const cod = require("central-dogma").codon;

function Sequence() {
  const [seq, setSeq] = useState("");
  const [rnaSeq, setRnaSeq] = useState("");
  const [proSeq, setProSeq] = useState("");
  let rna = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    setRnaSeq(seq);
    setProSeq(seq);
    Rnadata();
    Prodata();
  };

  const Rnadata = () => {
    let i = 0;

    while (i < seq.length) {
      switch (seq[i]) {
        case "A":
          rna += "U";
          break;
        case "T":
          rna += "A";
          break;
        case "G":
          rna += "C";
          break;
        case "C":
          rna += "G";
          break;
        default:
          break;
      }
      i += 1;
    }
    setRnaSeq(rna);
  };

  const Prodata = () => {
    const dnaSequence = seq;
    const dnaCodons = nuc.toCodon(dnaSequence);
    setProSeq(cod.sequenceToAminoAcid(dnaCodons));
  };

  return (
    <div className="seq-container container-fluid">
      <div className="row row-content align-items-center text-center col">
        <h3 className="col-12">Information</h3>
        <h6 className="col-12">Enter the DNA Sequence query below and get the post transcription sequence and post translation amino 
        acid sequence. Due to degeneracy of the Genetic Code and wobble hypothesis, different codons code for the same amino acid.</h6>
      </div>

      <form className="row col-12">
        <div className="row-content text-center col-12">
          <label className="col-12 col-sm-12 col-md-6">
            <h4>
              Enter the DNA Sequence:
            </h4>
          </label>
          <input className="col-12 col-sm-12 col-md-6"
            type="text"
            value={seq}
            onChange={(e) => setSeq(e.target.value)}
          />
        </div>
        <div className="row-content text-center col-12">
          <label className="col-12 col-sm-12 col-md-6">
            <h4> The Entered DNA Sequence: </h4>
          </label>
          <textarea className="col-12 col-sm-12 col-md-6" type="text" value={seq} readOnly />
        </div>
        <div className="row-content text-center col-12">
          <label className="col-12 col-sm-12 col-md-6">
            <h4>The derived mRNA sequence after Transcription:</h4>
          </label>
          <textarea className="col-12 col-sm-12 col-md-6" type="text" value={rnaSeq} readOnly />
        </div>
        <div className="row-content text-center col-12">
          <label className="col-12 col-sm-12 col-md-6">
            <h4>The derived protein sequence after Translation:</h4>
          </label>
          <textarea className="col-12 col-sm-12 col-md-6" type="text" value={proSeq} readOnly />
        </div>
        <div className="col-12 text-center p-2">
          <Button type="submit" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Sequence;
