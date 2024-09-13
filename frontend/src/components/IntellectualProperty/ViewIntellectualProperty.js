import React from "react";
import "./viewIntelectualProperty.css";
import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../shared-components/navbar/NavBar";
import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
import 'jspdf-autotable';



const ViewIntellectualProperty = () => {
  const IntelProperties = [
    {
      Title: "Title 1",
      OwnerofIP: "Jinnah University of Women",
      Address: "Jinnah University for Women, 5-C Nazimabad, 74600, Karachi.",
      // FieldofInvention: "Invention Field 1",
      FieldofInvention:
        "Synthesis of high quality and cost effective in house product To reduce the import of raw material for industries To produce an ecofriendly product which is easily biodegradable",
      // BackgroundOfTheInvention: "Background 1",
      BackgroundOfTheInvention:
        "All major industries of Pakistan namely food, textile, pharmaceutical, paint etc need an ingredient called sodium alginate, which is imported from different countries to meet the requirement. This project is designed to enhance the in house production of above said ingredient for relevant industries.",
      DescriptionOfInvention:
        "The aim of this project is to effectively use the coastal areas of Pakistan and to produce such outcomes that help in the economic growth of the country and also make the country independent of foreign aid over this raw material. The material is whollyeco-friendly and bio-degradable and is also food safe, making it easy to produce as well as use without worrying over pollution. The compound is also very helpful because of its demand in diverse industrial departments. Alginate salts are produced from Alginic acid extracted from the natural marine sources like brown seaweeds and brown algae. These salts vary in texture depending on the type of alkali and alkaline metal used in salt formation and the steps followed during its production.",
      // References: "Reference 1",
      References:
        "Not more than 10 This project will be comprises of 4 phases: • 1st phase: Collection of seaweeds and brown algae and pretreatment of sample. • 2nd phase: Synthesis of Alginic acid and then metal-alginate biopolymer from different metals. • 3rd phase: Characterization of metal-alginate biopolymer (Finding its physical and chemical properties for stability). Transformation of Lab based synthesized product into industrial requirement. • 4th phase: Academia-industries link (A uniform mono dispersed material can be synthesize by aforementioned instrument, similarly their material can be characterized).",
      // InventiveSteps: "Step 1"
      InventiveSteps:
        "Sodium alginate is a food grade compound, being used as the main ingredient in many industries like food, textile, paints, dyes and moreover for detoxification of metals. Currently it is being imported from China. This product is very cost effective for the user and consumers. It will not only substitute the import but it also has export potential.",
    },
    {
      Title: "Title 2",
      OwnerofIP: "Jinnah University of Women",
      Address: "Jinnah University for Women, 5-C Nazimabad, 74600, Karachi.",
      FieldofInvention: "Invention Field 2",
      BackgroundOfTheInvention: "Background 2",
      DescriptionOfInvention: "Description 2",
      References: "Reference 2",
      InventiveSteps: "Step 2",
    },
    {
      Title: "Title 3",
      OwnerofIP: "Jinnah University of Women",
      Address: "Jinnah University for Women, 5-C Nazimabad, 74600, Karachi.",
      FieldofInvention: "Invention Field 3",
      BackgroundOfTheInvention: "Background 3",
      DescriptionOfInvention: "Description 3",
      References: "Reference 3",
      InventiveSteps: "Step 3",
    },
  ];


  const downloadPDF = (IntelProperties) => {
    const doc = new jsPDF();
  
    // Set title font and add the title
    doc.setFontSize(16);
    doc.text("Intellectual Property", 14, 15);
  
    let yOffset = 25; // Initial Y position
  
    IntelProperties.forEach((property, index) => {
      // Title for each publication
      doc.setFontSize(14);
      doc.text(`Intellectual Property ID #${index + 1}`, 14, yOffset);
      yOffset += 5; // Adjust position for the next element
  
      // Prepare data for the table
      const tableData = Object.entries(property).map(([key, value]) => [key, value]);
  
      // Create a table for the publication
      doc.autoTable({
        startY: yOffset,
        head: [['Key', 'Value']],
        body: tableData,
        theme: 'grid',
        headStyles: {
          fillColor: [79, 129, 189], // Blue color for header background
          textColor: [255, 255, 255], // White color for header text
          fontStyle: 'bold',
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
        didDrawPage: (IntelProperties) => {
          yOffset = IntelProperties.cursor.y; // Update yOffset to the position after the table
        },
      });
  
      yOffset += 10; // Space between tables
  
      // If the content reaches the bottom of the page, add a new page
      if (yOffset > 270) {
        doc.addPage();
        yOffset = 20; // Reset Y position for new page
      }
    });
  
    doc.save("IntellectualProperty.pdf");
  };
  
  
  
  const downloadCSV = (IntelProperties) => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + Object?.keys(IntelProperties[0]).join(",") + "\n" // Add headers
      + IntelProperties?.map(row => Object.values(row).join(",")).join("\n"); // Add rows
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "IntellectualProperty.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
    document.body.removeChild(link);
  };

  const downloadExcel = (IntelProperties) => {
    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);
  
    // Initialize row index
    let rowIndex = 0;
  
    // Loop through each publication and create a styled table
    IntelProperties.forEach((property, index) => {
      // Header for the property
      const headerRow = [`Intellectual Property ID #${index + 1}`];
      XLSX.utils.sheet_add_aoa(worksheet, [headerRow], { origin: `A${rowIndex + 1}` });
  
      // Extract keys and values
      const keys = Object.keys(property);
      const values = Object.values(property);
  
      // Add keys and values as table rows
      const tableData = keys.map((key, idx) => [key, values[idx]]);
      XLSX.utils.sheet_add_aoa(worksheet, tableData, { origin: `A${rowIndex + 2}` });
  
      // Apply styles to the header row
      const headerCell = XLSX.utils.encode_cell({ r: rowIndex, c: 0 });
      if (worksheet[headerCell]) {
        worksheet[headerCell].s = {
          font: { bold: true, color: { rgb: "FFFFFF" } },
          fill: { fgColor: { rgb: "4F81BD" } },
          alignment: { horizontal: "center", vertical: "center" }
        };
      }
  
      // Apply background color and border to each cell in the publication table
      for (let r = rowIndex + 1; r <= rowIndex + keys.length + 1; ++r) {
        for (let c = 0; c < 2; ++c) {
          const cell = XLSX.utils.encode_cell({ r, c });
          if (!worksheet[cell]) worksheet[cell] = {}; // Ensure the cell is defined
          worksheet[cell].s = {
            fill: { fgColor: { rgb: "E2ECFF" } },
            border: {
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } }
            }
          };
        }
      }
  
      // Adjust column widths
      worksheet['!cols'] = [
        { wch: 30 }, // Width for key column
        { wch: 50 }  // Width for value column
      ];
  
      // Increment rowIndex by the number of rows in the current table + 3 for spacing
      rowIndex += keys.length + 3;
    });
  
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Intellectual Property');
  
    // Write the workbook to a file and trigger the download
    XLSX.writeFile(workbook, 'IntellectualProperty.xlsx');
  };
  



  return (
    <div className="intelproperty-container">
      <Sidebar />
      <div className="intelproperty">
        <div className="viewintell_navbar-div">
          <h4>Submission | Intellectual Property</h4>
          <NavBar />
        </div>
        {/* <div className="navbar-div">
          <h4>Submission | Intellectual Property</h4>
          <NavBar />
        </div> */}
        <div className="intelproperty-card">
          <h5>Intellectual Property</h5>
          <div className="download-btn" style={{ marginBottom: "20px" }}>
            <button type="button" className="create-user-btn" onClick={()=> downloadPDF(IntelProperties)}>
              DOWNLOAD PDF
            </button>
            <button type="button" className="create-user-btn" onClick={()=> downloadExcel(IntelProperties)}>
              DOWNLOAD EXCEL
            </button>
            <button type="button" className="create-user-btn" onClick={()=> downloadCSV(IntelProperties)}>
              DOWNLOAD CSV
            </button>
          </div>

          <div className="intelproperty-table-data">
            <div className="intelproperty-table-container">
              {IntelProperties.map((property, index) => (
                <div key={index} className="intelproperty-list-table">
                  <h5>Intellectual Property ID# {index + 1}</h5>
                  <div className="intelproperty-list-table-format title">
                    <b>Title:</b>
                    <span>{property.Title}</span>
                  </div>
                  <div className="intelproperty-list-table-format">
                    <b>Owner of IP:</b>
                    <span>{property.OwnerofIP}</span>
                  </div>
                  <div className="intelproperty-list-table-format">
                    <b>Address:</b>
                    <span>{property.Address}</span>
                  </div>
                  <div className="intelproperty-list-table-format">
                    <b>Field of Invention:</b>
                    <span>{property.FieldofInvention}</span>
                  </div>
                  <div className="intelproperty-list-table-format">
                    <b>Background of the Invention:</b>
                    <span>{property.BackgroundOfTheInvention}</span>
                  </div>
                  <div className="intelproperty-list-table-format">
                    <b>Description of Invention:</b>
                    <span>{property.DescriptionOfInvention}</span>
                  </div>
                  <div className="intelproperty-list-table-format">
                    <b>References:</b>
                    <span>{property.References}</span>
                  </div>
                  <div className="intelproperty-list-table-format">
                    <b>Inventive Steps:</b>
                    <span>{property.InventiveSteps}</span>
                  </div>
                </div>
              ))}
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

export default ViewIntellectualProperty;
