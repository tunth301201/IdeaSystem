/* eslint-disable jsx-a11y/anchor-is-valid */
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
import AddTag from "./AddTag";
import DeleteTag from "./DeleteTag";
import EditTag from "./EditTag";
import { getAllTags, deleteTag } from "../../api/apiServices";
import { decodeJwt } from "../../api/decodeJwt";

export default function TagPage() {
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
                <Breadcrumb.Item>Tags</Breadcrumb.Item>
              </Breadcrumb>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                All Tags
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <TagsTable />
              </div>
            </div>
          </div>
        </div> 
      </>
    )
  }
  
  const TagsTable = function() {
  
  const [tableData, setTableData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  const [user_id, setUser_id] = useState('')
  const [row, setRow] = useState('')
  const [data, setData] = useState('')
  useEffect(() => {
    if (decodeJwt().id !== "") {
      setUser_id(decodeJwt()?.id)
    }
    getAllTags()
      .then(res => {
        setTableData(res)
      })
      .catch(err => {
        console.log(err); 
      }) 
  }, [tableData.length])

  const handleDelete = useCallback(async (row) => {
    await deleteTag(row.original._id)
      .then((response) => { 
        tableData.splice(row, 1);
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
      accessorKey: 'subject',
      header: 'Subject',
      enableColumnOrdering: false,
      enableEditing: false, //disable editing on this column
      enableSorting: false,
      size: 80,
    },
    {
      accessorKey: 'description',
      header: 'Description',
      size: 140,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      // }),
    },
    {
      accessorKey: 'start_dateOfTag',
      header: `Tag's start date`,
      size: 140,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      // }),
    },
    {
      accessorKey: 'end_dateOfTag',
      header: `Tag's end date`,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      //   type: 'email',
      // }),
    },
    {
      accessorKey: 'end_dateOfIdea',
      header: `Idea's end date`,
      size: 80,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      //   type: 'number',
      // }),
    },
    {
      accessorFn: (originalRow) => originalRow.user_id.fullname, //alternative to accessorKey, using accessorFn
      id: 'fullname',
      header: `Created By`,
      size: 80,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      //   type: 'number',
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
        enableEditing
        enableColumnOrdering
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => {return setData(row.original)}}> 
                <button
                  type="button"
                  class="text-blue-700"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalScrollableEdit"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <HiPencilAlt size='1.5rem'/>
                </button>
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => {return setRow(row)}}>
                <button
                  type="button"
                  class="text-red-700"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenterDelete"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <HiTrash size='1.5rem' />
                </button>
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <button
            type="button"
            class="inline-block rounded px-3 pt-2.5 pb-2 text-blue-700"
            data-te-toggle="modal"
            data-te-target="#exampleModalScrollable"
            data-te-ripple-init
            data-te-ripple-color="light">
            <i class="gg-add-r"></i>
          </button>
        )}
      />
      <AddTag 
        data={tableData}
        setData={setTableData}
        user_id={user_id}/>
      <EditTag 
        data={data}
        setData={setData}
      />
      <DeleteTag handleDelete={() => handleDelete(row)}/>
    </>
  )
}
