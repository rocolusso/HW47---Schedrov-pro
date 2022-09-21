import React from "react";
import ArticleItem from "./ArticleItem";
import Link from "./Link";

const Posts = (props) => {
  const data = props.data;
  return (
    <div className={"container"}>
      <div className={"articles row flex-column"}>
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className={
                item.link !== null && typeof (item.link === "string")
                  ? "col mb-3 mt-3 article-item link"
                  : "col mb-3 mt-3 article-item"
              }
            >
              <Link data={item.link}>
                <ArticleItem articleData={item} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
