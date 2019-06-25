import React from "react";

export default function SortArticles() {
  const sortBy = ["Date-Created", "Number-Of-Comments", "Votes"];
  return (
    <div>
      Sort Articles By:
      <select>
        {sortBy.map(sort => {
          return <option key={sort}>{sort}</option>;
        })}
      </select>
    </div>
  );
}
