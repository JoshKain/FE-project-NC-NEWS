import React from "react";

export default function OrderArticles() {
  const orderBy = ["Ascending", "Descending"];
  return (
    <div>
      {" "}
      Order Articles:
      <select>
        {orderBy.map(order => {
          return <option>{order}</option>;
        })}
      </select>
    </div>
  );
}
