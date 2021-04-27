import { PlusIcon as PlusIconOutline } from '@heroicons/react/outline'

export default function NavBar(props){
    const loggedIn = props.loggedIn
    return (
      <div className="w-full">
        {loggedIn?
        <div className="bg-surface px-8 py-4 border-b border flex justify-between items-center">
          <a href="/">
              <div className="font-extrabold text-4xl text-blackpearl">
                {props.title}
              </div>
            </a>
          <div className="flex flex-row space-x-6 items-center">
            <a
            href="/create"
            className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-cinnabar hover:bg-mandarianorange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIconOutline className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="profiles/123">
            <img
              className="inline-block h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            </a>
          </div>
        </div>
        : 
        <div className="pt-10 bg-blackpearl sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden pb-12">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Listen to the World</span>
                  <span className="block text-cinnabar">Lend your ears</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Soundscapes presented by content creators from all over the world.
                </p>
                <div className="mt-10 sm:mt-12">
                  <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full py-3 px-4 rounded-md shadow bg-cinnabar text-white font-medium hover:bg-mandarianorange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        >
                          Let's Go!
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                      By providing your email, you agree to our{' '}
                      <a href="#" className="font-medium text-white">
                        terms or service
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <div className="block h-32">
                  {/* image placeholder */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        }
      </div>
    )
}