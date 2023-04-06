/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumb, Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiHome, HiPencilAlt, HiTrash } from "react-icons/hi";
import React, { useCallback, useMemo, useState } from 'react';
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
    
    const tagList = [
      {
        subject: "Famous",
        description: "New topic",
        start_dateOfTag: "01/01/2001",
        end_dateOfTag: "01/01/2001",
        end_dateOfIead: "01/01/2001",
      },
      {
        subject: "Famous",
        description: "Old topic",
        start_dateOfTag: "01/01/2001",
        end_dateOfTag: "01/01/2001",
        end_dateOfIead: "01/01/2001",
      },
      {
        subject: "Famous",
        description: "Old topic",
        start_dateOfTag: "01/01/2001",
        end_dateOfTag: "01/01/2001",
        end_dateOfIead: "01/01/2001",
      }
    ]

const [createModalOpen, setCreateModalOpen] = useState(false);
const [tableData, setTableData] = useState(() => tagList);
const [validationErrors, setValidationErrors] = useState({});

const handleCreateNewRow = (values) => {
  tableData.push(values);
  setTableData([...tableData]);
};

// const handleDeleteRow = useCallback(
//   (row) => {
//     if (
//       !window.confirm("Are you want to delete?")
//     ) {
//       return;
//     }
//     //send api delete request here, then refetch or update local table data for re-render
//     tableData.splice(row.index, 1);
//     setTableData([...tableData]);
//   },
//   [tableData],
// );

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
      accessorKey: 'end_dateOfIead',
      header: `Idea's end date`,
      size: 80,
      // muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
      //   ...getCommonEditTextFieldProps(cell),
      //   type: 'number',
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
      editingMode="modal" //default
      enableColumnOrdering
      enableEditing
      onEditingRowSave={handleSaveRowEdits}
      onEditingRowCancel={handleCancelRowEdits}
      renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Tooltip arrow placement="left" title="Edit">
            <IconButton> 
              <span
                type="button"
                class="cursor text-blue-700"
                data-te-toggle="modal"
                data-te-target="#exampleModalScrollableEdit"
                data-te-ripple-init
                data-te-ripple-color="light">
                <HiPencilAlt size='1.5rem'/>
              </span>
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error">
              <span
                type="button"
                class="cursor text-red-700"
                data-te-toggle="modal"
                data-te-target="#exampleModalCenterDelete"
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
          data-te-target="#exampleModalScrollable"
          data-te-ripple-init
          data-te-ripple-color="light">
          <i class="gg-add-r"></i>
        </span>
      )}
    />
    <AddTag />
    <EditTag />
    <DeleteTag />
  </>
    )
  }

  // export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  //   const [values, setValues] = useState(() =>
  //     columns.reduce((acc, column) => {
  //       acc[column.accessorKey ?? ''] = '';
  //       return acc;
  //     }, {}),
  //   );
  
  //   const handleSubmit = () => {
  //     //put your validation logic here
  //     onSubmit(values);
  //     onClose();
  //   };
  
  //   return (
  //     <Dialog open={open}>
  //       <DialogTitle textAlign="center">Create New Account</DialogTitle>
  //       <DialogContent>
  //         <form onSubmit={(e) => e.preventDefault()}>
  //           <Stack
  //             sx={{
  //               width: '100%',
  //               minWidth: { xs: '300px', sm: '360px', md: '400px' },
  //               gap: '1.5rem',
  //             }}
  //           >
  //             {columns.map((column) => (
  //               <TextField
  //                 key={column.accessorKey}
  //                 label={column.header}
  //                 name={column.accessorKey}
  //                 onChange={(e) =>
  //                   setValues({ ...values, [e.target.name]: e.target.value })
  //                 }
  //               />
  //             ))}
  //           </Stack>
  //         </form>
  //       </DialogContent>
  //       <DialogActions sx={{ p: '1.25rem' }}>
  //         <Button onClick={onClose}>Cancel</Button>
  //         <Button color="secondary" onClick={handleSubmit} variant="contained">
  //           Create New Account
  //         </Button>
  //       </DialogActions>
  //     </Dialog>
  //   );
  // };
  
const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validateAge = (age) => age >= 18 && age <= 50;