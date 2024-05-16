"use client";
import { useState } from "react";
import DeleteIcon from "@/public/icons/delete.svg";
import ProfileIcon from "@/public/icons/union.svg";

const TableBody = ({ data }) => {
  const [modifyRow, setModifyRow] = useState(null);
  const [deleteRow, setDeleteRow] = useState(null);
  return (
    <tbody>
      <tr>
        <td className="bg-grey-bg text-grey-txt p-2 text-sm" colSpan={3}>
          Showing 7 of 56 total users
        </td>
      </tr>
      {data.map((item, index) => (
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
              <div className="text-grey-txt flex items-center text-xs font-semibold">
                <button
                  onClick={() => setModifyRow(index)}
                  className="hover:text-purp-black hover:fill-purp-black fill-grey-txt flex items-center"
                >
                  <ProfileIcon className="h-4 w-4" />
                  Modify Role
                </button>
                <button
                  onClick={() => setDeleteRow(index)}
                  className="hover:text-purp-black hover:fill-purp-black fill-grey-txt ml-4 flex items-center"
                >
                  <DeleteIcon className="h-8 w-8" />
                  Delete Member
                </button>
              </div>
            )}
            {modifyRow == index && (
              <div className="modify-toggle border p-4">
                <h6 className="text-grey-txt mb-4 font-semibold">
                  Choose New Role
                </h6>
                <div>
                  <select
                    name=""
                    className="mb-4 block h-full w-60 rounded-md border border-purp-60 p-2 focus:outline-none"
                  >
                    <option value="">--Choose New Rank--</option>
                    <option value="0">Member</option>
                    <option value="1">Admin</option>
                  </select>
                  <button className="text-purp-black rounded-md bg-yellow-400 p-2 text-xs font-medium">
                    Upgrade User
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
                <h6 className="text-grey-txt mb-4 font-semibold">
                  Are you sure you want to delete?
                </h6>
                <div>
                  <button className="text-purp-black rounded-md bg-yellow-400 p-2 text-xs font-medium">
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
