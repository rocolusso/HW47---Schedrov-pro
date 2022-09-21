import React from "react";

const Link = (data) => {
  const linkStyle = {
    textDecoration: "none",
    color: "var(--bs-heading-color)",
    cursor: "pointer",
  };

  return (
    <>
      {data.data !== null ? (
        <a style={linkStyle} href={data.data}>
          {data.children}
        </a>
      ) : (
        data.children
      )}
    </>
  );
};

export default Link;
