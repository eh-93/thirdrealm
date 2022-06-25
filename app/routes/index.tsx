import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="bg-white">
      <main>
        {/* <!-- Hero section --> */}
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className="mt-20">
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    Third Realm
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Social Graphs Based On Token Ownership
                  </p>
                </div>
                <div className="mt-6 sm:ml-3 sm:flex sm:w-full sm:max-w-lg">
                  <Link
                    to={"/spaces"}
                    className="block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-center text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full"></div>
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                  width="404"
                  height="392"
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="392"
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                <img
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=h600"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Testimonial/stats section --> */}
        <div className="relative mt-20">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"></div>
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width="404"
                  height="392"
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="392"
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                {/* <!-- Testimonial card--> */}
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://openseauserdata.com/files/dooplicator_hero_4x3_3451EA3F.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-rose-500 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"></div>
                  <div className="relative px-8">
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-rose-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          Third Realm offers our community an unprecedented way
                          of connecting. It's like a gated community that keeps
                          the noise from scammers and spammers out.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-rose-200">
                          A completely made up review
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* <!-- Content area --> */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  On a mission to connect communities
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    Cut through the noise, and give token holders the platform
                    they deserve. By limiting voices to token holders only
                    projects can connect with their users directly without the
                    headache of fighting scammers and spammers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Logo cloud section --> */}
        <div className="mt-32">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Built on top of world-class projects
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                  Third Realm's spaces are sourced from top exchanges, high
                  quality data providers and the strongest builder communities.
                </p>
                <div className="mt-6">
                  <Link
                    to={"/spaces"}
                    className="text-base font-medium text-rose-500"
                  >
                    {" "}
                    Spaces &rarr;
                  </Link>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <img
                    className="max-h-12"
                    src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg"
                    alt="OpenSea"
                  />
                </div>

                <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <img
                    className="max-h-12"
                    src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6088f4c7c34ad61ab10cdf72_horizontal-logo-onecolor-neutral-alchemy.svg"
                    alt="Alchemy"
                  />
                </div>

                <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <svg
                    viewBox="0 0 105 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.858398 15.9996V1.4541H3.42942V6.89444H3.53596C3.66853 6.62929 3.85556 6.34757 4.09703 6.04927C4.33851 5.74624 4.66522 5.48819 5.07715 5.27512C5.48908 5.05732 6.01465 4.94842 6.65385 4.94842C7.49666 4.94842 8.2566 5.16386 8.93368 5.59473C9.6155 6.02086 10.1553 6.65297 10.553 7.49103C10.9555 8.32437 11.1567 9.34709 11.1567 10.5592C11.1567 11.7571 10.9602 12.7751 10.5672 13.6132C10.1742 14.4513 9.63918 15.0905 8.96209 15.5308C8.28501 15.9711 7.51796 16.1913 6.66096 16.1913C6.03596 16.1913 5.51749 16.0872 5.10556 15.8788C4.69363 15.6705 4.36219 15.4195 4.11124 15.126C3.86503 14.8277 3.67327 14.546 3.53596 14.2808H3.38681V15.9996H0.858398ZM3.37971 10.545C3.37971 11.2505 3.47914 11.8684 3.678 12.3987C3.8816 12.929 4.17279 13.3433 4.55158 13.6416C4.9351 13.9352 5.39912 14.0819 5.94363 14.0819C6.51181 14.0819 6.98766 13.9304 7.37118 13.6274C7.75471 13.3196 8.04353 12.9006 8.23766 12.3703C8.43652 11.8353 8.53596 11.2268 8.53596 10.545C8.53596 9.86793 8.43889 9.2666 8.24476 8.74103C8.05063 8.21547 7.76181 7.80353 7.37829 7.50524C6.99476 7.20694 6.51654 7.05779 5.94363 7.05779C5.39438 7.05779 4.928 7.20221 4.54448 7.49103C4.16096 7.77986 3.86976 8.18469 3.6709 8.70552C3.47677 9.22636 3.37971 9.83952 3.37971 10.545Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M20.2955 11.4115V5.09047H22.8666V15.9996H20.3737V14.0606H20.26C20.0138 14.6714 19.609 15.171 19.0455 15.5592C18.4868 15.9475 17.7979 16.1416 16.9788 16.1416C16.2638 16.1416 15.6317 15.983 15.0825 15.6657C14.538 15.3438 14.1118 14.8774 13.8041 14.2666C13.4963 13.6511 13.3424 12.9077 13.3424 12.0365V5.09047H15.9134V11.6388C15.9134 12.33 16.1028 12.8793 16.4816 13.2865C16.8604 13.6937 17.3576 13.8973 17.9731 13.8973C18.3519 13.8973 18.7188 13.805 19.074 13.6203C19.4291 13.4356 19.7203 13.161 19.9475 12.7964C20.1795 12.4271 20.2955 11.9655 20.2955 11.4115Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M25.5104 15.9996V5.09047H28.0814V15.9996H25.5104ZM26.803 3.54217C26.3958 3.54217 26.0454 3.40723 25.7519 3.13734C25.4583 2.86272 25.3115 2.53365 25.3115 2.15012C25.3115 1.76187 25.4583 1.43279 25.7519 1.16291C26.0454 0.888287 26.3958 0.750977 26.803 0.750977C27.2149 0.750977 27.5653 0.888287 27.8541 1.16291C28.1477 1.43279 28.2945 1.76187 28.2945 2.15012C28.2945 2.53365 28.1477 2.86272 27.8541 3.13734C27.5653 3.40723 27.2149 3.54217 26.803 3.54217Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M33.2963 1.4541V15.9996H30.7252V1.4541H33.2963Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M39.9884 16.1913C39.1314 16.1913 38.3643 15.9711 37.6872 15.5308C37.0101 15.0905 36.4751 14.4513 36.0821 13.6132C35.6891 12.7751 35.4926 11.7571 35.4926 10.5592C35.4926 9.34709 35.6915 8.32437 36.0892 7.49103C36.4917 6.65297 37.0338 6.02086 37.7156 5.59473C38.3975 5.16386 39.1574 4.94842 39.9955 4.94842C40.6347 4.94842 41.1602 5.05732 41.5722 5.27512C41.9841 5.48819 42.3108 5.74624 42.5523 6.04927C42.7938 6.34757 42.9808 6.62929 43.1134 6.89444H43.2199V1.4541H45.798V15.9996H43.2696V14.2808H43.1134C42.9808 14.546 42.789 14.8277 42.5381 15.126C42.2871 15.4195 41.9557 15.6705 41.5438 15.8788C41.1318 16.0872 40.6134 16.1913 39.9884 16.1913ZM40.7057 14.0819C41.2502 14.0819 41.7142 13.9352 42.0977 13.6416C42.4813 13.3433 42.7725 12.929 42.9713 12.3987C43.1702 11.8684 43.2696 11.2505 43.2696 10.545C43.2696 9.83952 43.1702 9.22636 42.9713 8.70552C42.7772 8.18469 42.4884 7.77986 42.1048 7.49103C41.7261 7.20221 41.2597 7.05779 40.7057 7.05779C40.1328 7.05779 39.6546 7.20694 39.271 7.50524C38.8875 7.80353 38.5987 8.21547 38.4046 8.74103C38.2104 9.2666 38.1134 9.86793 38.1134 10.545C38.1134 11.2268 38.2104 11.8353 38.4046 12.3703C38.6034 12.9006 38.8946 13.3196 39.2781 13.6274C39.6664 13.9304 40.1423 14.0819 40.7057 14.0819Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M57.1599 7.97399L54.8161 8.22967C54.7499 7.99293 54.6338 7.77039 54.4681 7.56206C54.3071 7.35372 54.0893 7.18564 53.8147 7.05779C53.5401 6.92995 53.2039 6.86603 52.8062 6.86603C52.2712 6.86603 51.8213 6.98204 51.4568 7.21404C51.0969 7.44605 50.9194 7.74672 50.9241 8.11603C50.9194 8.43327 51.0354 8.69132 51.2721 8.89018C51.5136 9.08904 51.9113 9.2524 52.4653 9.38024L54.3261 9.77797C55.3583 10.0005 56.1253 10.3532 56.6272 10.8362C57.1338 11.3192 57.3895 11.9513 57.3943 12.7325C57.3895 13.4191 57.1883 14.0251 56.7906 14.5507C56.3976 15.0715 55.8507 15.4787 55.1499 15.7723C54.4492 16.0658 53.6443 16.2126 52.7352 16.2126C51.3999 16.2126 50.3251 15.9333 49.5107 15.3746C48.6963 14.8111 48.211 14.0275 48.0548 13.0237L50.5619 12.7822C50.6755 13.2747 50.917 13.6463 51.2863 13.8973C51.6556 14.1482 52.1362 14.2737 52.7281 14.2737C53.3389 14.2737 53.8289 14.1482 54.1982 13.8973C54.5723 13.6463 54.7593 13.3362 54.7593 12.9669C54.7593 12.6544 54.6386 12.3963 54.3971 12.1927C54.1604 11.9891 53.791 11.8329 53.2892 11.724L51.4284 11.3334C50.382 11.1156 49.6078 10.7486 49.1059 10.2325C48.604 9.71168 48.3554 9.05353 48.3602 8.25808C48.3554 7.58573 48.5377 7.00334 48.9071 6.51092C49.2811 6.01376 49.7996 5.63024 50.4624 5.36035C51.1301 5.08573 51.8995 4.94842 52.7707 4.94842C54.0491 4.94842 55.0553 5.22067 55.7892 5.76518C56.5278 6.30969 56.9847 7.04596 57.1599 7.97399Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M59.5143 20.0905V5.09047H62.0427V6.89444H62.1919C62.3244 6.62929 62.5115 6.34757 62.7529 6.04927C62.9944 5.74624 63.3211 5.48819 63.733 5.27512C64.145 5.05732 64.6705 4.94842 65.3097 4.94842C66.1525 4.94842 66.9125 5.16386 67.5896 5.59473C68.2714 6.02086 68.8112 6.65297 69.2089 7.49103C69.6114 8.32437 69.8126 9.34709 69.8126 10.5592C69.8126 11.7571 69.6161 12.7751 69.2231 13.6132C68.8301 14.4513 68.2951 15.0905 67.618 15.5308C66.9409 15.9711 66.1739 16.1913 65.3168 16.1913C64.6918 16.1913 64.1734 16.0872 63.7615 15.8788C63.3495 15.6705 63.0181 15.4195 62.7671 15.126C62.5209 14.8277 62.3292 14.546 62.1919 14.2808H62.0853V20.0905H59.5143ZM62.0356 10.545C62.0356 11.2505 62.135 11.8684 62.3339 12.3987C62.5375 12.929 62.8287 13.3433 63.2075 13.6416C63.591 13.9352 64.055 14.0819 64.5995 14.0819C65.1677 14.0819 65.6436 13.9304 66.0271 13.6274C66.4106 13.3196 66.6994 12.9006 66.8936 12.3703C67.0924 11.8353 67.1918 11.2268 67.1918 10.545C67.1918 9.86793 67.0948 9.2666 66.9007 8.74103C66.7065 8.21547 66.4177 7.80353 66.0342 7.50524C65.6507 7.20694 65.1724 7.05779 64.5995 7.05779C64.0503 7.05779 63.5839 7.20221 63.2004 7.49103C62.8169 7.77986 62.5257 8.18469 62.3268 8.70552C62.1327 9.22636 62.0356 9.83952 62.0356 10.545Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M75.1535 16.2197C74.4622 16.2197 73.8396 16.0966 73.2856 15.8504C72.7364 15.5995 72.3008 15.2301 71.9788 14.7425C71.6615 14.2548 71.5029 13.6534 71.5029 12.9385C71.5029 12.3229 71.6166 11.814 71.8438 11.4115C72.0711 11.009 72.3812 10.6871 72.7742 10.4456C73.1672 10.2041 73.6099 10.0218 74.1024 9.8987C74.5995 9.77086 75.1133 9.67853 75.6436 9.62172C76.2828 9.55543 76.8012 9.49624 77.199 9.44416C77.5967 9.38734 77.8855 9.30211 78.0654 9.18848C78.2501 9.07011 78.3424 8.88781 78.3424 8.6416V8.59899C78.3424 8.06395 78.1838 7.64965 77.8666 7.35609C77.5493 7.06253 77.0924 6.91575 76.4958 6.91575C75.8661 6.91575 75.3666 7.05306 74.9972 7.32768C74.6327 7.6023 74.3864 7.92664 74.2586 8.30069L71.858 7.95978C72.0474 7.2969 72.3599 6.74293 72.7955 6.29785C73.2311 5.84804 73.7638 5.51187 74.3936 5.28933C75.0233 5.06206 75.7193 4.94842 76.4816 4.94842C77.0072 4.94842 77.5304 5.00997 78.0512 5.13308C78.5721 5.25618 79.0479 5.45978 79.4788 5.74387C79.9097 6.02323 80.2553 6.40439 80.5157 6.88734C80.7809 7.3703 80.9134 7.97399 80.9134 8.69842V15.9996H78.4418V14.501H78.3566C78.2004 14.804 77.9802 15.0881 77.6961 15.3532C77.4167 15.6137 77.064 15.8244 76.6379 15.9854C76.2165 16.1416 75.7217 16.2197 75.1535 16.2197ZM75.8211 14.3305C76.3372 14.3305 76.7846 14.2287 77.1634 14.0251C77.5422 13.8168 77.8334 13.5422 78.037 13.2013C78.2454 12.8604 78.3495 12.4887 78.3495 12.0862V10.8007C78.269 10.867 78.1317 10.9285 77.9376 10.9854C77.7482 11.0422 77.5351 11.0919 77.2984 11.1345C77.0616 11.1771 76.8273 11.215 76.5953 11.2481C76.3632 11.2813 76.162 11.3097 75.9916 11.3334C75.608 11.3854 75.2648 11.4707 74.9617 11.589C74.6587 11.7074 74.4196 11.8731 74.2444 12.0862C74.0692 12.2945 73.9816 12.5644 73.9816 12.8959C73.9816 13.3693 74.1544 13.7268 74.5001 13.9683C74.8457 14.2098 75.2861 14.3305 75.8211 14.3305Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M88.2572 16.2126C87.1682 16.2126 86.233 15.9735 85.4518 15.4953C84.6753 15.0171 84.0763 14.3566 83.6549 13.5138C83.2382 12.6662 83.0299 11.6908 83.0299 10.5876C83.0299 9.47967 83.243 8.50192 83.6691 7.65439C84.0953 6.80211 84.6966 6.13923 85.4731 5.66575C86.2543 5.18753 87.1776 4.94842 88.243 4.94842C89.1284 4.94842 89.912 5.11177 90.5938 5.43848C91.2804 5.76045 91.8273 6.21736 92.2345 6.80922C92.6417 7.39634 92.8737 8.08289 92.9305 8.86887H90.4731C90.3737 8.34331 90.1369 7.90533 89.7629 7.55495C89.3936 7.19984 88.8988 7.02228 88.2785 7.02228C87.7529 7.02228 87.2913 7.16433 86.8936 7.44842C86.4958 7.72778 86.1857 8.13024 85.9632 8.65581C85.7454 9.18137 85.6365 9.81111 85.6365 10.545C85.6365 11.2884 85.7454 11.9276 85.9632 12.4626C86.181 12.9929 86.4864 13.4025 86.8793 13.6913C87.2771 13.9754 87.7435 14.1175 88.2785 14.1175C88.6573 14.1175 88.9958 14.0464 89.2941 13.9044C89.5972 13.7576 89.8505 13.5469 90.0541 13.2723C90.2577 12.9977 90.3973 12.6639 90.4731 12.2709H92.9305C92.8689 13.0426 92.6417 13.7268 92.2487 14.3234C91.8557 14.9153 91.3206 15.3793 90.6436 15.7155C89.9665 16.0469 89.171 16.2126 88.2572 16.2126Z"
                      fill="#111111"
                    ></path>
                    <path
                      d="M99.8712 16.2126C98.7774 16.2126 97.8328 15.9854 97.0374 15.5308C96.2467 15.0715 95.6382 14.4229 95.2121 13.5848C94.786 12.742 94.5729 11.75 94.5729 10.6089C94.5729 9.48677 94.786 8.50192 95.2121 7.65439C95.643 6.80211 96.2443 6.13923 97.0161 5.66575C97.7878 5.18753 98.6946 4.94842 99.7362 4.94842C100.409 4.94842 101.043 5.05732 101.64 5.27512C102.241 5.48819 102.771 5.81963 103.231 6.26944C103.695 6.71925 104.059 7.29217 104.324 7.98819C104.589 8.67948 104.722 9.50334 104.722 10.4598V11.2481H95.7803V9.51518H102.258C102.253 9.02276 102.146 8.58478 101.938 8.20126C101.73 7.813 101.438 7.50761 101.064 7.28507C100.695 7.06253 100.264 6.95126 99.7718 6.95126C99.2462 6.95126 98.7845 7.0791 98.3868 7.33478C97.9891 7.58573 97.6789 7.91717 97.4564 8.3291C97.2386 8.7363 97.1273 9.18374 97.1226 9.67143V11.1842C97.1226 11.8187 97.2386 12.3632 97.4706 12.8177C97.7026 13.2675 98.027 13.6132 98.4436 13.8547C98.8603 14.0914 99.348 14.2098 99.9067 14.2098C100.281 14.2098 100.619 14.1577 100.922 14.0535C101.225 13.9446 101.488 13.786 101.711 13.5777C101.933 13.3693 102.101 13.1113 102.215 12.8035L104.616 13.0734C104.464 13.7079 104.175 14.2619 103.749 14.7354C103.328 15.2041 102.788 15.5687 102.13 15.8291C101.472 16.0848 100.719 16.2126 99.8712 16.2126Z"
                      fill="#111111"
                    ></path>
                  </svg>
                </div>

                <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <svg
                    viewBox="0 0 1093 148"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M488.795 47.8158H502.261C501.644 30.4779 485.652 17.5166 463.433 17.5166C441.438 17.5166 424.156 30.3096 424.156 49.6113C424.156 65.0976 435.378 74.2996 453.333 79.4616L467.473 83.5015C479.593 86.8681 490.366 91.1325 490.366 102.579C490.366 115.147 478.246 123.452 462.311 123.452C448.62 123.452 436.5 117.392 435.378 104.374H421.014C422.361 123.227 437.623 136.02 462.311 136.02C488.795 136.02 503.832 121.432 503.832 102.803C503.832 81.2572 483.408 74.2996 471.513 71.1574L459.842 68.0153C451.313 65.7709 437.623 61.2821 437.623 48.938C437.623 37.9405 447.722 29.8607 462.984 29.8607C476.899 29.8607 487.448 36.4817 488.795 47.8158Z"
                      fill="black"
                    ></path>
                    <path
                      d="M322.878 134H336.794V96.7434L351.158 80.5838L391.108 134H407.941L359.686 70.933L407.941 19.0877H389.761L338.14 76.0951H336.794V19.0877H322.878V134Z"
                      fill="black"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M131.516 18.5166C160.917 18.5166 182.239 41.1849 182.239 77.5439C182.239 113.903 160.917 136.571 131.516 136.571C102.114 136.571 80.7925 113.903 80.7925 77.5439C80.7925 41.1849 102.114 18.5166 131.516 18.5166ZM131.516 123.554C152.388 123.554 168.772 107.394 168.772 77.5439C168.772 47.6936 152.388 31.534 131.516 31.534C110.643 31.534 94.2588 47.6936 94.2588 77.5439C94.2588 107.394 110.643 123.554 131.516 123.554Z"
                      fill="black"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M251.871 18.5166C281.272 18.5166 302.594 41.1849 302.594 77.5439C302.594 113.903 281.272 136.571 251.871 136.571C222.469 136.571 201.148 113.903 201.148 77.5439C201.148 41.1849 222.469 18.5166 251.871 18.5166ZM251.871 123.554C272.744 123.554 289.128 107.394 289.128 77.5439C289.128 47.6936 272.744 31.534 251.871 31.534C230.998 31.534 214.614 47.6936 214.614 77.5439C214.614 107.394 230.998 123.554 251.871 123.554Z"
                      fill="black"
                    ></path>
                    <path
                      d="M68.21 134H0.878418V19.0874H14.7936V121.656H68.21V134Z"
                      fill="black"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M541.923 133.727H528.008V18.8145H566.836C593.768 18.8145 605.888 33.7396 605.888 54.0513C605.888 69.3131 599.043 81.2645 584.398 86.2582L610.377 133.727H594.217L569.978 88.7832C569.024 88.8393 568.07 88.8393 567.06 88.8393H541.923V133.727ZM541.923 31.1586V76.2707H566.611C585.015 76.2707 592.197 67.8543 592.197 54.0513C592.197 40.2483 585.015 31.1586 566.387 31.1586H541.923Z"
                      fill="black"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M645.409 101.183L633.851 133.727H619.262L661.457 18.8145H675.821L718.015 133.727H703.427L691.868 101.183H645.409ZM668.19 36.994L649.786 88.8393H687.492L669.088 36.994H668.19Z"
                      fill="black"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M736.218 133.727H750.133V88.8393H775.271C776.281 88.8393 777.234 88.8393 778.188 88.7832L802.428 133.727H818.587L792.608 86.2582C807.253 81.2645 814.098 69.3131 814.098 54.0513C814.098 33.7396 801.979 18.8145 775.046 18.8145H736.218V133.727ZM750.133 76.2707V31.1586H774.597C793.226 31.1586 800.408 40.2483 800.408 54.0513C800.408 67.8543 793.226 76.2707 774.822 76.2707H750.133Z"
                      fill="black"
                    ></path>
                    <path
                      d="M907.506 133.727H837.257V18.8145H906.608V31.1586H851.172V69.9864H903.017V82.3306H851.172V121.383H907.506V133.727Z"
                      fill="black"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1019 86C1006.3 86 996 75.7077 996 63C996 50.2923 1006.3 40 1019 40C1031.7 40 1042 50.2923 1042 63C1042 75.7077 1031.7 86 1019 86ZM1009 63C1009 68.5251 1013.48 73 1019 73C1024.52 73 1029 68.5251 1029 63C1029 57.4749 1024.52 53 1019 53C1013.48 53 1009 57.4749 1009 63Z"
                      fill="#04CD58"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M945 63.0304L989 19H1049L1093 63.0304L1019 137L945 63.0304ZM1053 46.9998C1034.3 28.2224 1003.7 28.2225 985 46.9999L969 63.0001L985 79.0002C1003.7 97.7776 1034.3 97.7775 1053 79.0001L1069 63.0001L1053 46.9998Z"
                      fill="#04CD58"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- CTA section --> */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50"></div>
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-rose-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-rose-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-rose-600 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Join the beta today
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-rose-100">
                    Be the first to shape the future of token based communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer section --> */}
      <footer className="mt-24 bg-gray-900 sm:mt-12">
        <div className="mx-auto max-w-md overflow-hidden py-12 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <button className="text-base text-gray-400 hover:text-gray-300">
                {" "}
                About{" "}
              </button>
            </div>

            <div className="px-5 py-2">
              <button className="text-base text-gray-400 hover:text-gray-300">
                {" "}
                Blog{" "}
              </button>
            </div>

            <div className="px-5 py-2">
              <button className="text-base text-gray-400 hover:text-gray-300">
                {" "}
                Jobs{" "}
              </button>
            </div>

            <div className="px-5 py-2">
              <button className="text-base text-gray-400 hover:text-gray-300">
                {" "}
                Press{" "}
              </button>
            </div>

            <div className="px-5 py-2">
              <button className="text-base text-gray-400 hover:text-gray-300">
                {" "}
                Partners{" "}
              </button>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <button className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <button className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <button className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>

            <button className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <button className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Dribbble</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2022 ThirdRealm, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
