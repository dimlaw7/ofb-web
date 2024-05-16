const TableHead = () => {
  const th = ["Name", "User Role", "Actions"];
  return (
    <thead>
      <tr className="borber-b">
        {th.map((item, index) => {
          if (item == "Name") {
            return (
              <th
                className="text-purp-black p-2 text-left text-sm font-semibold"
                key={index}
              >
                <input type="checkbox" name="" className="mb-0 mr-4" />
                {item}
              </th>
            );
          } else if (item == "Actions") {
            return (
              <th
                className="text-purp-black hidden p-2 text-left text-sm font-semibold lg:table-cell"
                key={index}
              >
                {item}
              </th>
            );
          } else {
            return (
              <th
                className="text-purp-black p-2 text-left text-sm font-semibold"
                key={index}
              >
                {item}
              </th>
            );
          }
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
