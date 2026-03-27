import React from "react";
import PaidMediaBlock from "../PaidMediaBlock";

const chunkColumns = (data, size = 3) => {
  const result = [];
  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }
  return result;
};

const PaidMediaColumns = ({ data }) => {
  const columns = chunkColumns(data, 3);

  return (
    <div
      className="
        flex justify-center

        gap-x-[10px]   /* horizontal gap */
        gap-y-[10px]   /* vertical gap (when wrapping on mobile) */

        flex-wrap
        max-w-[360px] mx-auto

        lg:flex-nowrap
        lg:max-w-none
      "
    >
      {columns.map((col, i) => (
        <div
          key={i}
          className="
            flex flex-col

            gap-y-[10px]   /* vertical gap between blocks */

            w-[calc(50%-8.5px)]   /* 17px / 2 */
            lg:w-auto
          "
        >
          {col.map((item) => (
            <PaidMediaBlock key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default React.memo(PaidMediaColumns);