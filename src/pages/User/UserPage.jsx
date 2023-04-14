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
  
  // const userList = [
  //   {
  //     image: <RenderImg img={"https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952"}/>,
  //     name:"Ariana Grande" ,
  //     email: "arianagrande@gmail.com",
  //     permission: "QA Manager",
  //     gender: "Female",
  //     department: "Department A" 
  //   },
  //   {
  //     image: <RenderImg img={"https://media1.popsugar-assets.com/files/thumbor/lcn_wDi1eGsJ5E-sOnR4cfZdKJw/0x68:2312x2380/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/03/018/n/1922398/03ad07805e5ee78bbd70d3.36131857_/i/Emma-Stone.jpg"}/>,
  //     name: "Emma Stone",
  //     email: "emmastone@gmail.com",
  //     permission: "QA",
  //     gender: "Female",
  //     department: "Department B" 
  //   },
  //   {
  //     image: <RenderImg img={"https://media1.popsugar-assets.com/files/thumbor/5HcZqJL9BiCSn4aLp6rjj3l3CTM/144x83:1984x1923/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/24/897/n/1922398/582a03955e5432c1e88d95.90383166_/i/Katy-Perry.jpg"}/>,
  //     name: "Katy Perry",
  //     email: "katyperry@gmail.com",
  //     permission: "Admin",
  //     gender: "Female",
  //     department: "Department C" 
  //   },
  //   {
  //     image: <RenderImg img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AHgiK1harDlnQqxE2RKXGHeyPHwBDbA4EQ&usqp=CAU"} />,
  //     name: "Sam Smith",
  //     email: "samsmith@gmail.com",
  //     permission: "Staff",
  //     gender: "Male",
  //     department: "Department A" 
  //   },
  //   {
  //     image: <RenderImg img={"https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/30311ded2aa378d2c4ad67909493fdfe.jpg"}/>,
  //     name: "G-Eazy",
  //     email: "g-eazy@gmail.com",
  //     permission: "Admin",
  //     gender: "Male",
  //     department: "Department B" 
  //   },
  //   { 
  //     image: <RenderImg img={"https://www.grazia-magazin.de/sites/default/files/styles/amp_image_ratio_1x1/public/teaser/05.01.2018/justintimberlake.jpg"}/>,
  //     name: "Justin Timberlake",
  //     email: "justintimberlake@gmail.com",
  //     permission: "Staff",
  //     gender: "Male",
  //     department: "Department C" 
  //   }
  // ]

  useEffect( () => {
     getUsers()
      .then(res =>
        setTableData(res)
      )
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [deleteUserID, setDeleteUserID] = useState("");
  const [row, setRow] = useState("");
  const [userID, setUserID] = useState("")
  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")
  const [gender, setGender] = useState("")
  const [image, setImage] = useState("")
  const [password, setPassword] = useState("")
  const [permission, setPermission] = useState("")
  const [department, setDepartment] = useState("")

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  }

  const handleDelete = useCallback(async (row, id) => {
    await deleteUser(id)
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
              onClick={() => {
                return setUserID(row.original._id), 
                  setEmail(row.original.email),
                  setFullname(row.original.fullname),
                  setGender(row.original.gender),
                  setImage(row.original.image),
                  setPassword(row.original.password),
                  setDepartment(row.original.department),
                  setPermission(row.original.permission)
              }}>
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
              <IconButton color="error" onClick={() => {return setDeleteUserID(row.original._id), setRow(row.index)}}>
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
        id={userID}
        email={email}
        fullname={fullname}
        gender={gender}
        image={image}
        password={password}
        department={department}
        permission={permission}
        changeEmail={setEmail}
        changeName={setFullname}
        changeGender={setGender}
        changeImage={setImage}
        changePass={setImage}
        changeDepart={setDepartment}
        changePermiss={setPermission}
      />
      <DeleteUser handleDelete={() => handleDelete(row, deleteUserID)}/>
    </>
  )
}