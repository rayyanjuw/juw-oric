import React from "react";
import "./ORICFundedProject.css";
import Sidebar from "../../Sidebar/Sidebar";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import "jspdf-autotable";
import NavBar from "../../shared-components/navbar/NavBar";

const ORICFundedProject = () => {
  const proposal_coverState = {
    Title:
      "Low cost effective production of alginate salts. Low cost effective production of alginate salts. Low cost effective production of alginate salts. Low cost effective production of alginate salts.",
    NameofPI:
      "Low cost effective production of alginate salts. Low cost effective production of alginate salts. Low cost effective production of alginate salts. Low cost effective production of alginate salts.",
    NameofFaculty:
      "Low cost effective production of alginate salts. Low cost effective production of alginate salts. Low cost effective production of alginate salts. Low cost effective production of alginate salts.",
    TotalBudgetRequested: "30000",
  };

  const research_projectState = {
    ProjectTitle: "",
    NatureofProposedResearch: "",
    DomainofProposedResearch: "",
    ShortSummaryoftheProject: "",
    ProjectDuration: "",
    TotalFundsRequested: "",
    Summary_or_Abstract: "",
    ProblemtobeAddressed: "",
  };

  const ObjectiveswithExpectedOutputs = {
    Objective1Description: "",
    MeasurableOutput_or_ExpectedResults1: "",
    Benefits1: "",
    Objective2Description: "",
    MeasurableOutput_or_ExpectedResults2: "",
    Benefits2: "",
    Objective3Description: "",
    MeasurableOutput_or_ExpectedResults3: "",
    Benefits3: "",
    ExpectedSocioEconomicBenefit: "",
    Methodology: "",
    ActivitiesduringTimeperiod1stQuarter: "",
    ActivitiesduringTimeperiod2ndQuarter: "",
    ActivitiesduringTimeperiod3rdQuarter: "",
    ActivitiesduringTimeperiod4thQuarter: "",
    ResearcherPriorExperience: "",
  };

  const facilitiesAndFundingState = {
    Facilitiesavailableinthedepartment: "",
    otherfundingsources: "",
  };

  const justification = {
    ScientificEquipment: "",
    Travel: "",
  };

  const estimatedBudget = [
    {
      PermanentEquipment: {
        HotPlatesQty: "",
        HotPlatesUnitPrice: "",
        HotPlatesAmount: "",
        PrinterQty: "",
        PrinterUnitPrice: "",
        PrinterAmount: "",
      },
    },
    {
      PaperRim: "",
      Literature: "",
      LocalTravel: "",
      OtherCosts: "",
    },
  ];

  const downloadORICFundedProjectPDF = () => {
    const doc = new jsPDF();

    // Set title font and add the title
    doc.setFontSize(16);
    doc.text("ORIC Funded Project", 14, 15);

    let yOffset = 25; // Initial Y position

    const sections = [
      { title: "PROPOSAL COVER", data: proposal_coverState },
      { title: "RESEARCH PROJECT", data: research_projectState },
      {
        title: "OBJECTIVES WITH EXPECTED OUTPUTS",
        data: ObjectiveswithExpectedOutputs,
      },
      { title: "FACILITIES AND FUNDING", data: facilitiesAndFundingState },
      {
        title: "JUSTIFICATION FOR THE REQUESTED BUDGET ITEMS",
        data: justification,
      },
      {
        title: "ESTIMATED BUDGET FOR PROPOSED RESEARCH PERIOD",
        data: estimatedBudget,
      },
    ];

    sections.forEach((section) => {
      // Section title
      doc.setFontSize(14);
      doc.text(section.title, 14, yOffset);
      yOffset += 10; // Adjust position for the next element

      const tableData = Object.entries(section.data).map(([key, value]) => [
        key,
        value,
      ]);

      // Create a table for the section
      doc.autoTable({
        startY: yOffset,
        head: [["Key", "Value"]],
        body: tableData,
        theme: "grid",
        headStyles: {
          fillColor: [79, 129, 189], // Blue color for header background
          textColor: [255, 255, 255], // White color for header text
          fontStyle: "bold",
        },
        bodyStyles: {
          fillColor: [226, 236, 255], // Light blue color for body background
          textColor: [0, 0, 0], // Black color for body text
        },
        alternateRowStyles: {
          fillColor: [255, 255, 255], // White background for alternate rows
        },
        styles: {
          lineColor: [0, 0, 0], // Black border for cells
          lineWidth: 0.1,
          fontSize: 10,
        },
        margin: { top: 10, left: 14, right: 14 },
        didDrawPage: (data) => {
          yOffset = data.cursor.y; // Update yOffset to the position after the table
        },
      });

      yOffset += 10; // Space between tables

      // If the content reaches the bottom of the page, add a new page
      if (yOffset > 270) {
        doc.addPage();
        yOffset = 20; // Reset Y position for new page
      }
    });

    doc.save("ORICFundedProject.pdf");
  };


  const downloadORICFundedProjectExcel = () => {
    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);

    // Initialize row index
    let rowIndex = 0;

    // Define the sections with their respective data
    const sections = [
      { title: "PROPOSAL COVER", data: proposal_coverState },
      { title: "RESEARCH PROJECT", data: research_projectState },
      {
        title: "OBJECTIVES WITH EXPECTED OUTPUTS",
        data: ObjectiveswithExpectedOutputs,
      },
      { title: "FACILITIES AND FUNDING", data: facilitiesAndFundingState },
      { title: "JUSTIFICATION", data: justification },
      { title: "ESTIMATED BUDGET", data: estimatedBudget },
    ];

    // Loop through each section and add the content to the worksheet
    sections.forEach((section) => {
      // Add the section title as a header row
      const headerRow = [section.title];
      XLSX.utils.sheet_add_aoa(worksheet, [headerRow], {
        origin: `A${rowIndex + 1}`,
      });

      // Style the header row
      const headerCell = XLSX.utils.encode_cell({ r: rowIndex, c: 0 });
      worksheet[headerCell] = worksheet[headerCell] || {};
      worksheet[headerCell].s = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "4F81BD" } },
        alignment: { horizontal: "center", vertical: "center" },
      };

      // Extract keys and values from the section data
      const keys = Object.keys(section.data);
      const values = Object.values(section.data);

      // Add the keys and values as table rows
      const tableData = keys.map((key, idx) => [key, values[idx]]);
      XLSX.utils.sheet_add_aoa(worksheet, tableData, {
        origin: `A${rowIndex + 2}`,
      });

      // Apply background color and border styling to the table cells
      for (let r = rowIndex + 1; r <= rowIndex + keys.length + 1; r++) {
        for (let c = 0; c < 2; c++) {
          const cell = XLSX.utils.encode_cell({ r, c });
          worksheet[cell] = worksheet[cell] || {};
          worksheet[cell].s = {
            fill: { fgColor: { rgb: "E2ECFF" } },
            border: {
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
            },
          };
        }
      }

      // Adjust column widths for the key and value columns
      worksheet["!cols"] = [
        { wch: 30 }, // Width for the key column
        { wch: 50 }, // Width for the value column
      ];

      // Update the rowIndex for the next section, adding spacing
      rowIndex += keys.length + 3;
    });

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "ORIC Funded Project");

    // Trigger the download of the Excel file
    XLSX.writeFile(workbook, "ORICFundedProject.xlsx");
  };

  const downloadORICFundedProjectCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,";

    const sections = [
      { title: "PROPOSAL COVER", data: proposal_coverState },
      { title: "RESEARCH PROJECT", data: research_projectState },
      {
        title: "OBJECTIVES WITH EXPECTED OUTPUTS",
        data: ObjectiveswithExpectedOutputs,
      },
      { title: "FACILITIES AND FUNDING", data: facilitiesAndFundingState },
      { title: "JUSTIFICATION", data: justification },
      { title: "ESTIMATED BUDGET", data: estimatedBudget },
    ];

    let csvRows = [];

    sections.forEach((section) => {
      csvRows.push(section.title);
      const keys = Object.keys(section.data);
      const values = Object.values(section.data);
      keys.forEach((key, idx) => {
        csvRows.push(`${key},${values[idx]}`);
      });
      csvRows.push(""); // Add an empty row between sections
    });

    const encodedUri = encodeURI(csvContent + csvRows.join("\n"));
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ORICFundedProject.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="oricfundedproject_container">
      <Sidebar />
      <div className="oricfundedproject">
        <div className="oric_navbar-div">
          <NavBar />
        </div>
        <div className="oricfundedproject-card">
          <h5>ORIC Funded Project</h5>

          <div className="download-btn" style={{ marginBottom: "20px" }}>
            {/* <button type="button" className="create-user-btn" onClick={()=> downloadPDF(IntelProperties)}> */}
            <button
              type="button"
              className="create-user-btn"
              onClick={downloadORICFundedProjectPDF}
            >
              DOWNLOAD PDF
            </button>
            {/* <button type="button" className="create-user-btn" onClick={()=> downloadExcel(IntelProperties)}> */}
            <button
              type="button"
              className="create-user-btn"
              onClick={downloadORICFundedProjectExcel}
            >
              DOWNLOAD EXCEL
            </button>
            {/* <button type="button" className="create-user-btn" onClick={()=> downloadCSV(IntelProperties)}> */}
            <button
              type="button"
              className="create-user-btn"
              onClick={downloadORICFundedProjectCSV}
            >
              DOWNLOAD CSV
            </button>
          </div>

          <div className="oricfundedproject-table-data">
            <div className="oricfundedproject-table-container">
              <h2>Project Title: test</h2>
              <div className="oricfundedproject-list-table">
                <div className="project_detail">
                  <h5>PROPOSAL COVER</h5>
                </div>
                <div className="oricfundedproject-list-table-format title">
                  <b>Title:</b>
                  <span>{proposal_coverState.Title}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Owner of IP:</b>
                  <span>{proposal_coverState.NameofPI}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Address:</b>
                  <span>{proposal_coverState.NameofFaculty}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Field of Invention:</b>
                  <span>{proposal_coverState.TotalBudgetRequested}</span>
                </div>
              </div>
              <div className="oricfundedproject-list-table">
                <div className="project_detail">
                  <h5>RESEARCH PROJECT</h5>
                </div>
                <div className="oricfundedproject-list-table-format title">
                  <b>Project Title</b>
                  <span>{research_projectState.ProjectTitle}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Nature of Proposed Research</b>
                  <span>{research_projectState.NatureofProposedResearch}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Domain of Proposed Research</b>
                  <span>{research_projectState.DomainofProposedResearch}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Short Summary of the Project</b>
                  <span>{research_projectState.ShortSummaryoftheProject}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Project Duration (Years)</b>
                  <span>{research_projectState.ProjectDuration}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Total Funds Requested (Rs)</b>
                  <span>{research_projectState.TotalFundsRequested}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Summary / Abstract</b>
                  <span>{research_projectState.Summary_or_Abstract}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Background of The Problem to be Addressed</b>
                  <span>{research_projectState.ProblemtobeAddressed}</span>
                </div>
              </div>
              <div className="oricfundedproject-list-table">
                <div className="project_detail">
                  <h5>Objectives with Expected Outputs</h5>
                </div>
                <div className="oricfundedproject-list-table-format title">
                  <b>Objective 1 Description</b>
                  <span>
                    {ObjectiveswithExpectedOutputs.Objective1Description}
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Measurable Output / Expected Results</b>
                  <span>
                    {
                      ObjectiveswithExpectedOutputs.MeasurableOutput_or_ExpectedResults1
                    }
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Benefits</b>
                  <span>{ObjectiveswithExpectedOutputs.Benefits1}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Objective 2 Description</b>
                  <span>
                    {ObjectiveswithExpectedOutputs.Objective2Description}
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Measurable Output / Expected Results</b>
                  <span>
                    {
                      ObjectiveswithExpectedOutputs.MeasurableOutput_or_ExpectedResults2
                    }
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Benefits</b>
                  <span>{ObjectiveswithExpectedOutputs.Benefits2}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Objective 3 Description</b>
                  <span>
                    {ObjectiveswithExpectedOutputs.Objective3Description}
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Measurable Output / Expected Results</b>
                  <span>
                    {
                      ObjectiveswithExpectedOutputs.MeasurableOutput_or_ExpectedResults3
                    }
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Benefits</b>
                  <span>{ObjectiveswithExpectedOutputs.Benefits3}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Expected Socio-Economic Benefit</b>
                  <span>
                    {ObjectiveswithExpectedOutputs.ExpectedSocioEconomicBenefit}
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Methodology</b>
                  <span>{ObjectiveswithExpectedOutputs.Methodology}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Activities during Time period 1st Quarter</b>
                  <span>
                    {
                      ObjectiveswithExpectedOutputs.ActivitiesduringTimeperiod1stQuarter
                    }
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Activities during Time period 2nd Quarter</b>
                  <span>
                    {
                      ObjectiveswithExpectedOutputs.ActivitiesduringTimeperiod2ndQuarter
                    }
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Activities during Time period 3rd Quarter</b>
                  <span>
                    {
                      ObjectiveswithExpectedOutputs.ActivitiesduringTimeperiod3rdQuarter
                    }
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Activities during Time period 4th Quarter</b>
                  <span>
                    {
                      ObjectiveswithExpectedOutputs.ActivitiesduringTimeperiod4thQuarter
                    }
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>
                    Researcher’s Prior Experience in Relation to Current Project
                    Details
                  </b>
                  <span>
                    {ObjectiveswithExpectedOutputs.ResearcherPriorExperience}
                  </span>
                </div>
              </div>

              <div className="oricfundedproject-list-table">
                <div className="project_detail">
                  <h5>FACILITIES AND FUNDING</h5>
                </div>
                <div className="oricfundedproject-list-table-format title">
                  <b>
                    Facilities available for the research project in the
                    department
                  </b>
                  <span>
                    {
                      facilitiesAndFundingState.Facilitiesavailableinthedepartment
                    }
                  </span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Other source of funding (if any)</b>
                  <span>{facilitiesAndFundingState.otherfundingsources}</span>
                </div>
              </div>

              <div className="oricfundedproject-list-table">
                <div className="project_detail">
                  <h5>JUSTIFICATION FOR THE REQUESTED BUDGET ITEMS</h5>
                </div>
                <div className="oricfundedproject-list-table-format title">
                  <b>Scientific Equipment (if any)</b>
                  <span>{justification.ScientificEquipment}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>Travel (if required)</b>
                  <span>{justification.Travel}</span>
                </div>
              </div>

              <div className="oricfundedproject-list-table">
                <div className="project_detail">
                  <h5>ESTIMATED BUDGET FOR PROPOSED RESEARCH PERIOD</h5>
                </div>
                <div className="oricfundedproject-list-table-format title">
                  <b>A. Permanent Equipment</b>
                  <span>{estimatedBudget.PermanentEquipment}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>B. Paper Rim</b>
                  <span>{estimatedBudget.PaperRimy}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>
                    C. Literature, documentation, information, online literature
                    search, contingencies, postage
                  </b>
                  <span>{estimatedBudget.Literature}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>D. Local Travel (For project involving field work etc.)</b>
                  <span>{estimatedBudget.LocalTravel}</span>
                </div>
                <div className="oricfundedproject-list-table-format">
                  <b>E. Other costs (specify)</b>
                  <span>{justification.OtherCosts}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="juw_copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </div>
  );
};

export default ORICFundedProject;
