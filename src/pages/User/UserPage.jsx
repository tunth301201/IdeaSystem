import { Breadcrumb, Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiHome, HiPencilAlt, HiTrash } from "react-icons/hi";
import React, {useEffect,useCallback, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import getUser,{deleteUser,addUser,updateUser} from './userService';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import AddUser from "./AddUser";
import DeleteUser from "./Delete";
import EditUser from "./EditUser";
import RenderImg from "./RenderImg";
  
export default function UserPage() {
  return (
    <>
      <div className="block  items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/users/list">Users</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              All users
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <AllUsersTable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
//AllUsersTable
const AllUsersTable = ()=> {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const users = await getUser();
      setUserList(users);
    }
    fetchUser();
  }, []);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => userList);
  const [validationErrors, setValidationErrors] = useState({});
  
  useEffect(() => {
    setTableData(userList);
  }, [userList]);
  // console.log(tableData.map(m => m.user.props))
  const [users, setUsers] = useState([]);
  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);
  
  const handleUpdateUser = async (id) => {
    console.log("id:", id);
    const userToUpdate = tableData.find((user) => user._id === id);
    setSelectedUser(userToUpdate);
    console.log(id);
    if (userToUpdate) {
      try {
        const { _id, ...updatedUser } = userToUpdate;
        const response = await updateUser(_id, updatedUser);
        console.log(response);
        setSuccess(true);
 
      } catch (error) {
        console.log(error);
      }
      
    }
  };
  const handleSaveUser = (updatedUser) => {
    updateUser(updatedUser._id, updatedUser)
      .then(response => {
        console.log(response); 
        setSuccess(true);
        setSelectedUser(null);
        window.location.reload()
      })
      .catch(error => {
        console.log(error);
      });
  };
  const [userToDelete, setUserToDelete] = useState(null);

const handleDeleteUser = async (id) => {

  const userToDelete = tableData.find((user) => user._id === id);
  console.log(userToDelete);
  window.location.reload()
  if (userToDelete) {
    try {
      const { _id, ...user } = userToDelete; // Renamed the destructured variable
      const response = await deleteUser(_id, user); // Used the new variable name
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};

const handleDeleteClick = (id) => {
  const userToDelete = tableData.find((user) => user._id === id);
  if (userToDelete) {
    setUserToDelete(userToDelete);
  }
};
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const columns = useMemo(() => [
    {
      accessorKey: 'image',
      header: 'Image',
      size: 120,
      enableColumnOrdering: false,
      enableEditing: false, //disable editing on this column
      enableSorting: false,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      // }),
    },
    {
      accessorKey: 'fullname',
      header: 'Name',
      size: 80,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      // }),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      // enableColumnOrdering: false,
      // enableEditing: false, //disable editing on this column
      // enableSorting: true,
      size: 80,
    },
    {
      accessorKey: 'permission',
      header: 'Position',
      size: 80,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      // }),
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
      size: 140,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      // }),
    },
    {
      accessorKey: 'department',
      header: 'Department',
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      //   type: 'email',
      // }),
    },
  ],
  // [getCommonEditTextFieldProps],
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        // enableRowSelection
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing     
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => handleUpdateUser(row.original._id)}> 
                <span
                  type="button"
                  class="cursor text-blue-700"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenterEditUser"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <HiPencilAlt size='1.5rem'/>
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={() => handleDeleteClick(row.original._id)}>
                <span
                  type="button"
                  class="cursor text-red-700"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenterDeleteUser"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <HiTrash size='1.5rem' />
                </span>
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <span 
            type="button"
            class="cursor inline-block rounded px-3 pt-2.5 pb-2 text-blue-700"
            data-te-toggle="modal"
            data-te-target="#exampleModalCenter"
            data-te-ripple-init
            data-te-ripple-color="light">
            <i class="gg-add-r"></i>
          </span>
        )}
      />
      <AddUser addUser={addUser} />
      {selectedUser && <EditUser user={selectedUser} onSaveUser={handleSaveUser} />}
      {(
  <DeleteUser user={userToDelete} onDeleteUser={() => handleDeleteUser(userToDelete._id)} />
)}
    </>
  )
}