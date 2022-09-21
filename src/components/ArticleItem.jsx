import React from "react";

const ArticleItem = (data) => {
  const { articleData } = data;

  const ItemContent = (content) => {
    return <div dangerouslySetInnerHTML={{ __html: content.content }} />;
  };

  const itemDate = (date) => {
    const data = new Date(date.slice(0, 19));
    return data.toDateString();
  };
  const articleDate = itemDate(articleData.dateCreated);

  return (
    <>
      <div className={"article-title mb-3 d-flex flex-wrap"}>
        <h5>{articleData.title}</h5>
        {articleData.isSpecial && (
          <h5
            className={"text-primary"}
            style={{ marginLeft: "10px", fontStyle: "bold" }}
          >
            Special
          </h5>
        )}
      </div>
      <div className={"d-flex flex-wrap"}>
        {articleData.photo && (
          <div className="article-img">
            <img
              style={{ maxHeight: "100px" }}
              src={articleData.photo}
              alt={articleData.title}
            />
          </div>
        )}
        <div
          className={
            articleData.photo ? "article-content ms-3" : "article-content"
          }
        >
          <ItemContent content={articleData.content} />
        </div>
      </div>
      {articleData.categories.length > 0 && (
        <ul className="article-categories list-group  flex-row">
          {articleData.categories.map((item) => (
            <li
              style={{ border: "none", flex: "wrap" }}
              className={"list-group-item"}
              key={item.id}
            >
              <p style={{ color: "rgba(9,81,115,0.89)", fontSize: "14px" }}>
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      )}
      <div className="article-info d-flex mt-3">
        <div className="article-date">
          <p style={{ color: "#858385", fontSize: "12px" }}>{articleDate}</p>
        </div>
        <div className="article-author d-flex ms-4">
          <div style={{ color: "#858385", fontSize: "12px", display: "flex" }}>
            <p>Author:</p>
            <p style={{ marginLeft: "5px" }}>{articleData.author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleItem;
