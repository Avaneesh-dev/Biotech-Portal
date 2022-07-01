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
      <div className="row row-content col">
        <div className="col-12">
          <h3 className="text-center">Links to various insilico analysis tools:</h3>
          <ul className="list-font">
            <li><a href="https://www.ncbi.nlm.nih.gov/">BLASTN</a>: BLAST finds regions of similarity between biological sequences. The program compares nucleotide or protein sequences to sequence databases and calculates the statistical significance.</li>
            <li><a href="https://www.ncbi.nlm.nih.gov/">BLASTX</a>: BLAST finds regions of similarity between biological sequences. The program compares nucleotide or protein sequences to sequence databases and calculates the statistical significance.</li>
            <li><a href="https://www.ncbi.nlm.nih.gov/">Primer BLAST</a>: Primer-blast tries to find target-specific primers by placing candidate primers on unique template regions that are not similar to other targets</li>
            <li><a href="https://www.ncbi.nlm.nih.gov/">In Silico PCR</a>: In-Silico PCR searches a sequence database with a pair of PCR primers, using an indexing strategy for fast performance.</li>
            <li><a href="https://www.ncbi.nlm.nih.gov/">ORF Finder</a>: ORF finder searches for open reading frames (ORFs) in the DNA sequence you enter. The program returns the range of each ORF, along with its protein translations</li>
            <li><a href="https://www.ncbi.nlm.nih.gov/">Phyre-2</a>: Phyre2 is a suite of tools available on the web to predict and analyse protein structure, function and mutations</li>
            <li><a href="https://www.ncbi.nlm.nih.gov/">RasMol</a>: RasMol is an important scientific tool for visualisation of molecules created by Roger Sayle in 1992.</li>
            <li><a href="https://www.ncbi.nlm.nih.gov/">Mega 11</a>: Molecular Evolutionary Genetics Analysis (MEGA) is computer software for conducting statistical analysis of molecular evolution and for constructing phylogenetic trees.</li>
            <li><a href="https://www.ncbi.nlm.nih.gov/">BioEdit</a>: A User-Friendly Biological Sequence Alignment Editor and Analysis Program for Windows 95/98/NT.</li>
          </ul>
        </div>
        <div className="text-center col-12 mb10">
        <h3 className="col-12">Information</h3>
        <h6 className="col-12">Enter the DNA template strand sequence query below</h6>
        </div>
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
