import {
    Breadcrumb,
    Button,
    Checkbox,
    Label,
    Modal,
    Table,
    TextInput,
    Select
} from "flowbite-react"
import { useState } from "react"
import {
    HiChevronLeft,
    HiChevronRight,
    HiCog,
    HiDocumentDownload,
    HiDotsVertical,
    HiExclamationCircle,
    HiHome,
    HiOutlineExclamationCircle,
    HiOutlinePencilAlt,
    HiPlus,
    HiTrash,
    HiUpload
} from "react-icons/hi"

export default function EditUser() {
    const [isOpen, setOpen] = useState(false)
  
    return (
      <>
        <Button color="primary" onClick={() => setOpen(true)}>
          <div className="flex items-center gap-x-2">
            <HiOutlinePencilAlt className="text-lg" />
            Edit
          </div>
        </Button>
        <Modal onClose={() => setOpen(false)} show={isOpen}>
          <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
            <strong>Edit user</strong>
          </Modal.Header>
          <Modal.Body>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                <Label htmlFor="name">Name</Label>
                <div className="mt-1">
                    <TextInput
                    id="name"
                    name="name"
                    placeholder="Ariana Grande"
                    />
                </div>
                </div>
                <div>
                <Label htmlFor="password">Password</Label>
                <div className="mt-1">
                    <TextInput id="password" name="password" placeholder="123123213" />
                </div>
                </div>
                <div>
                <Label htmlFor="email">Email</Label>
                <div className="mt-1">
                    <TextInput
                    id="email"
                    name="email"
                    placeholder="example@company.com"
                    type="email"
                    />
                </div>
                </div>
                <div>
                <Label htmlFor="gender">Gender</Label>
                <div className="mt-1">
                    <Select
                        id="gender"
                        name="gender"
                    >
                        <option>Female</option>
                        <option>Male</option>
                    </Select>
                </div>
                </div>
                <div>
                <Label htmlFor="department">Department</Label>
                <div className="mt-1">
                    <Select
                        id="department"
                        name="department"
                    >
                        <option>Department A</option>
                        <option>Department B</option>
                        <option>Department C</option>
                    </Select>
                </div>
                </div>
                <div>
                <Label htmlFor="permission">Permission</Label>
                <div className="mt-1">
                    <Select
                        id="permission"
                        name="permission"
                    >
                        <option>Staff</option>
                        <option>QA</option>
                    </Select>
                </div>
                </div>
              <div>
                <Label htmlFor="passwordCurrent">Current password</Label>
                <div className="mt-1">
                  <TextInput
                    id="passwordCurrent"
                    name="passwordCurrent"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="passwordNew">New password</Label>
                <div className="mt-1">
                  <TextInput
                    id="passwordNew"
                    name="passwordNew"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
                <div className="lg:col-span-2">
                    <div className="flex w-full items-center justify-center">
                        <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <HiUpload className="text-4xl text-gray-300" />
                            <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                            Upload a file or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                            PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                        <input 
                            type="file" 
                            className="hidden"
                            />
                        </label>
                    </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="primary" onClick={() => setOpen(false)}>
              Save all
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}