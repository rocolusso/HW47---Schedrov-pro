import React from "react";
import IconFolder from "../assets/icons/iconFolder.svg";
import IconXlsx from "../assets/icons/xlsxIcon.svg";
import IconDocx from "../assets/icons/docxIcon.svg";
import IconPdf from "../assets/icons/pdfIcon.svg";

const DirItem = (props) => {
  const checkData = (data) => {
    const dataProperties = data.split(".");

    if (dataProperties[1] === "xlsx")
      return (
        <div className="dir-item-name d-flex align-items-center">
          <img src={IconXlsx} style={{ maxHeight: "30px" }} />
          <p className={"ms-2"} style={{ margin: "0" }}>
            {dataProperties[0]}
          </p>
        </div>
      );

    if (dataProperties[1] === "docx")
      return (
        <div className="dir-item-name d-flex align-items-center">
          <img src={IconDocx} style={{ maxHeight: "30px" }} />
          <p className={"ms-2"} style={{ margin: "0" }}>
            {dataProperties[0]}
          </p>
        </div>
      );

    if (dataProperties[1] === "pdf")
      return (
        <div className="dir-item-name d-flex align-items-center">
          <img src={IconPdf} style={{ maxHeight: "30px" }} />
          <p className={"ms-2"} style={{ margin: "0" }}>
            {dataProperties[0]}
          </p>
        </div>
      );

    if (
      dataProperties[1] !== "xlsx" &&
      data.split(".")[1] !== "docx" &&
      data.split(".")[1] !== "pdf"
    )
      return (
        <div className="dir-item-name d-flex align-items-center">
          <img src={IconFolder} style={{ maxHeight: "30px" }} />
          <p className={"ms-2"} style={{ margin: "0" }}>
            {data}
          </p>
        </div>
      );
  };

  return (
    <>
      {props.data.map((item) => (
        <>
          <div className={"dir-item"}>
            {checkData(item.name)}

            {Array.isArray(item.children) && item.children.length > 0 && (
              <div className={"dir-item-sub ms-3"}>
                <DirItem data={item.children} />
              </div>
            )}
          </div>
        </>
      ))}
    </>
  );
};

const Directories = (props) => {
  return (
    <div className={"directories"} style={{ width: "20vw" }}>
      <DirItem data={props.data} />
    </div>
  );
};


export default Directories;
