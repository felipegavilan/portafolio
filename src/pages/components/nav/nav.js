import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  const isOnSpecificRouter = router.pathname === "/";

  const scrollToDiv = () => {
    const divPosition = document.getElementById("projectos").offsetTop;
    window.scrollTo({
      top: divPosition,
      behavior: "smooth",
    });
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden rounded-full"
                    src="https://t3.ftcdn.net/jpg/03/47/10/94/360_F_347109439_Rx98eJV8RRkZNwdDORnJxuaqzmBTOJbg.jpg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block rounded-full"
                    src="https://t3.ftcdn.net/jpg/03/47/10/94/360_F_347109439_Rx98eJV8RRkZNwdDORnJxuaqzmBTOJbg.jpg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link key="about" href="/">
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">
                        About
                      </p>
                    </Link>
                    {!isOnSpecificRouter ?
                    <Link key="projects" href={"/#projectos"}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        Projects
                      </p>
                    </Link> : 
                    <button onClick={scrollToDiv}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">
                        Projects
                      </p>
                    </button>
                    }

                    <Link key="contact" href="/contact">
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">
                        Contact
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link key="about" href="/">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  About
                </p>
              </Link>
              {
                !isOnSpecificRouter ? 
              <Link key="projects" href={"/#projectos"}>
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Projects
                </p>
              </Link> :
              <button onClick={scrollToDiv}>
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Projects
                </p>
              </button>
              }
              <Link key="contact" href="/contact">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Contact
                </p>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
