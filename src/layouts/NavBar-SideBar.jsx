import { Footer } from "flowbite-react"
import { MdFacebook } from "react-icons/md"
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";

export default function NavbarSidebarLayout({ children, isFooter = true }) {
    return (
      <>
        <NavBar />
        <div className="flex items-start pt-16">
          <SideBar />
          <MainContent isFooter={isFooter}>{children}</MainContent>
        </div>
      </>
    )
}

const MainContent = function({ children, isFooter }) {
    return (
      <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
        {children}
        {isFooter && (
          <div className="mx-4 mt-4">
            <MainContentFooter />
          </div>
        )}
      </main>
    )
}

const MainContentFooter = function() {
    return (
      <>
        <Footer container>
          <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
            <Footer.LinkGroup>
              <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
                Terms and conditions
              </Footer.Link>
              <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" className="mr-3">
                Licensing
              </Footer.Link>
              <Footer.Link href="#" className="mr-3">
                Cookie Policy
              </Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
            <Footer.LinkGroup>
              <div className="flex gap-x-1">
                <Footer.Link
                  href="#"
                  className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
                >
                  <MdFacebook className="text-lg" />
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
                >
                  <FaInstagram className="text-lg" />
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
                >
                  <FaTwitter className="text-lg" />
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
                >
                  <FaGithub className="text-lg" />
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
                >
                  <FaDribbble className="text-lg" />
                </Footer.Link>
              </div>
            </Footer.LinkGroup>
          </div>
        </Footer>
        <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
          &copy; 2019-2022 Flowbite.com. All rights reserved.
        </p>
      </>
    )
}