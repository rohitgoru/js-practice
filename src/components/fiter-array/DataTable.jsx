import React from "react";

const DataTable = ({ filteredArray }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 rounded-md bg-gray-100">
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Age</th>
              <th className="py-2 px-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredArray.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.age}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
