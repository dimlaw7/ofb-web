"use client";
import { useEffect, useState } from "react";
import DeleteIcon from "@/public/icons/delete.svg";
import ProfileIcon from "@/public/icons/union.svg";
import { Circles } from "react-loader-spinner";

const TableBody = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [modifyRow, setModifyRow] = useState(null);
  const [deleteRow, setDeleteRow] = useState(null);
  const [roleInput, setRoleInput] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTableData(data); // Sync state with new props if data changes
  }, [data]);

  const handleRoleSelect = async (userID) => {
    if (!roleInput) {
      console.log("Action Canceled! No role selected");
      return;
    }

    setLoader(true);
    const response = await fetch("/api/v1/admin/user-mgt", {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({ action: "modify", userID, roleInput }),
    });
    const apiData = await response.json();
    const { data } = apiData;
    setTableData(data);
    setLoader(false);
    setModifyRow(null);
  };

  return (
    <tbody>
      <tr>
        <td className="bg-grey-bg p-2 text-sm text-grey-txt" colSpan={3}>
          Showing 7 of 56 total users
        </td>
      </tr>
      {tableData.map((item, index) => (
        <tr className="text-sm" key={index}>
          <td className="name border-b p-2">
            <div className=" flex items-center">
              <input type="checkbox" name="" className="mb-0" />
              <div className="ml-4">
                <p className="font-medium">{item.fullName}</p>
                <p className="text-grey-txt">{item.email}</p>
              </div>
            </div>
          </td>
          <td className="user-role border-b p-2">
            <div>
              {item.role == 0 && <button>Member</button>}
              {item.role == 1 && <button>Admin</button>}
            </div>
          </td>
          <td className="actions hidden border-b p-2 lg:table-cell">
            {modifyRow == index ? (
              ""
            ) : deleteRow == index ? (
              ""
            ) : (
              <div className="flex items-center text-xs font-semibold text-grey-txt">
                <button
                  onClick={() => setModifyRow(index)}
                  className="flex items-center fill-grey-txt hover:fill-purp-black hover:text-purp-black"
                >
                  <ProfileIcon className="h-4 w-4" />
                  Modify Role
                </button>
                <button
                  onClick={() => setDeleteRow(index)}
                  className="ml-4 flex items-center fill-grey-txt hover:fill-purp-black hover:text-purp-black"
                >
                  <DeleteIcon className="h-8 w-8" />
                  Delete Member
                </button>
              </div>
            )}
            {modifyRow == index && (
              <div className="modify-toggle border p-4">
                <h6 className="title mb-4 font-semibold text-grey-txt">
                  Choose New Role
                </h6>
                <select
                  name=""
                  onChange={(e) => setRoleInput(e.target.value)}
                  className="mb-4 block h-full w-60 rounded-md border border-purp-60 p-2 focus:outline-none"
                >
                  <option value="0" selected={item.role == 0 && true}>
                    Member
                  </option>
                  <option value="1" selected={item.role == 1 && true}>
                    Admin
                  </option>
                </select>
                <div className="btn flex">
                  <button
                    onClick={() => handleRoleSelect(item.id)}
                    className="flex rounded-md bg-yellow-400 p-2 text-xs font-medium text-purp-black"
                  >
                    {loader ? (
                      <Circles
                        height="20"
                        width="20"
                        color="#fff"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    ) : (
                      <span>Upgrade</span>
                    )}
                  </button>
                  <button
                    onClick={() => setModifyRow(null)}
                    className="rounded-md bg-red-600 p-2 text-xs font-medium text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            {deleteRow == index && (
              <div className="delete-toggle border p-4">
                <h6 className="mb-4 font-semibold text-grey-txt">
                  Are you sure you want to delete?
                </h6>
                <div>
                  <button className="rounded-md bg-yellow-400 p-2 text-xs font-medium text-purp-black">
                    Yes, Delete User
                  </button>
                  <button
                    onClick={() => setDeleteRow(null)}
                    className="rounded-md bg-red-600 p-2 text-xs font-medium text-white"
                  >
                    No, Cancel
                  </button>
                </div>
              </div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
