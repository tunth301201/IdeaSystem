import { Breadcrumb, Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiHome, HiPencilAlt, HiTrash } from "react-icons/hi";
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
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
import { getUsers, deleteUser } from "../../api/apiServices";
  
export default function UserPage() {
  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
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
                All Users
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

const AllUsersTable = function() {

  useEffect( () => {
     getUsers()
      .then(res =>
        setTableData(res)
      )
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  const [tableData, setTableData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [row, setRow] = useState("");
  const [data, setData] = useState("");

  const handleDelete = useCallback(async (row) => {
    await deleteUser(row.original._id)
      .then((response) => { 
        tableData.splice(row.index, 1);
        setTableData([...tableData]);
        })
      .catch((err)=>{
          console.log(err)
      })  
  }, [tableData])

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
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
      size: 40,
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
  []
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
        data={tableData || []}
        // enableRowSelection
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing     
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit"
              onClick={() => { return setData(row.original) }}>
              <IconButton> 
                <span
                  type="button"
                  className="cursor text-blue-700"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenterEditUser"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <HiPencilAlt size='1.5rem'/>
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => {return setRow(row)}}>
                <span
                  type="button"
                  className="cursor text-red-700"
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
            className="cursor inline-block rounded px-3 pt-2.5 pb-2 text-blue-700"
            data-te-toggle="modal"
            data-te-target="#exampleModalCenter"
            data-te-ripple-init
            data-te-ripple-color="light">
            <i className="gg-add-r"></i>
          </span>
        )}
      />
      <AddUser data={tableData} setData={setTableData} />
      <EditUser 
        data={data}
        setData={setData}
      />
      <DeleteUser handleDelete={() => handleDelete(row)}/>
    </>
  )
}