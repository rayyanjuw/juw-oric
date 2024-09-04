import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./researchPublication.css";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";
import NavBar from "../shared-components/navbar/NavBar";

const ResearchPublication = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const initialPublication = {
    ArticleType: "",
    TitleofManuscript: "",
    Journal: "",
    ISSN: "",
    Volume: "",
    Issue: "",
    Year: "",
    DateofPublication: "",
    Pages: "",
    HECCategory: "",
    WebofScience: "",
    ImpactFactor: "",
    Scopus: "",
    URLofPublication: "",
  };

  const [publications, setPublications] = useState([initialPublication]);

  const handleInput = (e, index) => {
    const { name, value } = e.target;
    const updatedPublications = publications.map((publication, i) =>
      i === index ? { ...publication, [name]: value } : publication
    );
    setPublications(updatedPublications);
  };

  const addMorePublications = () => {
    setPublications([...publications, initialPublication]);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/research", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(publications),
      });

      const result = await response.json();

      if (result.success) {
        alert("Research added successfully");
      } else {
        alert("Error while adding research");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while adding research");
    }
  };

  console.log(publications);

  const breadCrumps = [
    {
      label: " Personal Information",
      path: "/researchportfolio",
    },
    {
      label: "Honor and Awards, Scholarship",
      path: "/honorandawards",
    },
    {
      label: "Membership",
      path: "/membership",
    },
    {
      label: "Publications",
      // path: "/researchpublication",
      path: "/viewallpublications",
    },
    {
      label: "Research Grants and Contracts",
      path: "/research-grants-and-contracts",
    },
  ];

  return (
    <>
      <div className="research-publication-container">
        <Sidebar />
        <div className="research-publication">
          <div className="navbar-div">
            <NavBar />
          </div>
          <div className="research-publication-card">
            <h3 className="research-portfolio">
              Research portfolio | Publications
            </h3>
            <div className="bred-crumb">
              <Breadcrumb items={breadCrumps} activePath={currentPath} />
            </div>
            {publications.map((publication, index) => (
              <div
                key={index}
                className={`card-content ${publication.new ? "" : "mt-2"}`}
              >
                <h5>Publication Details ({index + 1}):</h5>
                <div className="multi-input-fields">
                  <div className="d-flex flex-column gap-01">
                    <label>Article Type:</label>
                    <select
                      name="ArticleType"
                      value={publication.ArticleType}
                      onChange={(e) => handleInput(e, index)}
                    >
                      <option value="Selectoption">Select Article Type</option>
                      <option value="Original Research">
                        Original Research
                      </option>
                      <option value="Review Article">Review Article</option>
                    </select>
                  </div>
                  <div className="">
                    <label>Title of Manuscript:</label>
                    <input
                      type="text"
                      name="TitleofManuscript"
                      placeholder="Title of Manuscript:"
                      value={publication.TitleofManuscript}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>
                  <div className="">
                    <label>Journal:</label>
                    <input
                      type="text"
                      name="Journal"
                      placeholder="Journal:"
                      value={publication.Journal}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>

                  <div className="">
                    <label>ISSN:</label>
                    <input
                      type="Number"
                      name="ISSN"
                      placeholder=" Journal ISSN:"
                      value={publication.ISSN}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>

                  <div className="">
                    <label>Volume:</label>
                    <input
                      type="text"
                      name="Volume"
                      placeholder="Volume:"
                      value={publication.Volume}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>

                  <div className="">
                    <label>Issue:</label>
                    <input
                      type="text"
                      name="Issue"
                      placeholder="Issue:"
                      value={publication.Issue}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>

                  <div className="">
                    <label>Year:</label>
                    <input
                      type="Date"
                      name="Year"
                      placeholder="Year:"
                      value={publication.Year}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>

                  <div className="">
                    <label>Date of Publication:</label>
                    <input
                      type="Date"
                      name="DateofPublication"
                      placeholder="Date of Publication:"
                      value={publication.DateofPublication}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>

                  <div className="">
                    <label>Pages:</label>
                    <input
                      type="Number"
                      name="Pages"
                      placeholder="Pages:"
                      value={publication.Pages}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>

                  <div className="d-flex flex-column gap-01">
                    <label>HEC Category:</label>
                    <select
                      name="HECCategory"
                      value={publication.HECCategory}
                      onChange={(e) => handleInput(e, index)}
                    >
                      <option value="Category">HEC Category</option>
                      <option value="W-Category">W Category</option>
                      <option value="X-Category">X Category</option>
                      <option value="Y-Category">Y Category</option>
                      <option value="Z-Category">Z Category</option>
                    </select>
                  </div>

                  <div className="d-flex flex-column gap-01">
                    <label>Web of Science (Yes/No):</label>
                    <select
                      name="WebofScience"
                      id="WebofScience"
                      placeholder="Web of Science (Yes/No):"
                      value={publication.WebofScience}
                      onChange={(e) => handleInput(e, index)}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="">
                    <label>Impact Factor:</label>
                    <input
                      type="Number"
                      name="ImpactFactor"
                      placeholder="Impact Factor:"
                      value={publication.ImpactFactor}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>

                  <div className="d-flex flex-column gap-01">
                    <label>Scopus (Yes/No):</label>
                    <select
                      name="Scopus"
                      id="Scopus"
                      placeholder="Scopus"
                      value={publication.Scopus}
                      onChange={(e) => handleInput(e, index)}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="url-publication">
                    <label>URL of Publication:</label>
                    <input
                      type="url"
                      name="URLofPublication"
                      placeholder="URL of Publication:"
                      value={publication.URLofPublication}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="add-more-bg">
              <button className="button" onClick={addMorePublications}>
                ADD MORE
              </button>
            </div>
            <div className="save-button">
              <button className="button" onClick={handleSubmit}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchPublication;

// add research api call in frontend
// const addResearchData = async (researchData, userId) => {
//   const response = await fetch('/api/research', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ ...researchData, publishedBy: userId })
//   });

//   const result = await response.json();
//   return result;
// }
