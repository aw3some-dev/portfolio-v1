import React, { Fragment } from "react";

type PaginationProps = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  pages?: number;
  onClick?: (e: React.MouseEvent) => void;
  onClicks?: (e: React.MouseEvent) => void;
  onClicked?: (e: React.MouseEvent) => void;
};

const Pagination = (props: PaginationProps) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }

  let divider = props.totalPosts / props.postsPerPage;

  return (
    <Fragment>
      <div className="flex mx-auto place-content-center !h-auto py-4 bg-white">
        {props.currentPage === 1 ? (
          <div className=" my-4 bg-white">
            <a
              aria-disabled="true"
              className="  hover:text-gray-300 hover:no-underline text-gray-300 text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </a>
          </div>
        ) : (
          <div className=" my-4 bg-white">
            <a
              className="text-gray-700  text-base hover:no-underline cursor-pointer"
              onClick={props.onClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </a>
          </div>
        )}

        <div className="pagination px-16">
          {pages.map((page, index) => {
            return (
              <Fragment key={index}>
                <button
                  key={index}
                  onClick={props.onClicks}
                  className={
                    page === props.currentPage
                      ? "my-5 bg-white px-4 text-[12px] font-areaExt "
                      : "my-5 bg-white px-4 text-[12px] "
                  }
                >
                  {page}
                </button>
              </Fragment>
            );
          })}
        </div>

        {/* <div className="my-4 bg-white px-6 text-base font-areaNorm ">
          {props.currentPage}{" "}
        </div> */}

        {props.currentPage >= divider ? (
          <div className="my-4 bg-white">
            <a
              aria-disabled="true"
              className="  hover:text-gray-300 hover:no-underline text-gray-300 text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        ) : (
          <div className="my-4 bg-white">
            <a
              className="text-gray-700  hover:no-underline text-base cursor-pointer"
              onClick={props.onClicked}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Pagination;
