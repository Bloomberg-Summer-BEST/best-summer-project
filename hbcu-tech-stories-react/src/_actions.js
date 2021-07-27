import React from "react";

export const renderTextHTML = (content, type) => {
  if (type) {
    return <span dangerouslySetInnerHTML={{ __html: content }}></span>;
  } else {
    return (
      <div
        className="render-display"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    );
  }
};
