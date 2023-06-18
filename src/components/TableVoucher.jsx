/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import Moment from "moment/moment";
import ModalInput from "./ModalInput";
import { ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight } from "../assets";

// eslint-disable-next-line react/prop-types
export default function   ({ columns, data, setRefreshSignal, setShowToast }) {
  let currentMonth = Moment(new Date().toLocaleDateString()).format("MM");
  let currentYear = Moment(new Date().toLocaleDateString()).format("YYYY");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    setGlobalFilter,
    setFilter,
    prepareRow,
    pageOptions,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
  } = useTable({ columns, data,
    initialState: {
      sortBy: [
        {
          id: "tanggal",
          desc: false
        },
        {
          id: "waktu",
          desc: false
        }
      ],
      pageSize: 10,
      filters: [{id: "updatedAt", value: currentYear + "-" + currentMonth }],
    } }, useGlobalFilter, useSortBy, usePagination);

  const { globalFilter } = state;

  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };

  return (
    <div className="text-black">
      <div className="flex flex-row font-poppins justify-between gap-2 align-center">
        <div className="flex flex-row justify-start gap-3 align-center">
          <input
            type="text"
            placeholder="Cari" 
            className="py-1 px-2 w-40 rounded-md border border-black bg-white mb-3 focus:outline-green-primary"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
        <button className="btn-add-voucher text-base py-1 px-3 mb-3 rounded-md hover:bg-green-dark bg-green-primary text-white ease transition-all duration-300"
          onClick={() => setShowModal(true)}>
            Tambah Voucher
        </button> 
      </div>
      <div className="">
        <table {...getTableProps()} className="w-full table-fixed">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-green-light">
                
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps() )}
                    style={{width: column.width}}
                    className={"cursor-pointer py-1 " +
                      (column.isSorted
                        ? column.isSortedDesc
                          ? "sort-desc"
                          : "sort-asc"
                        : "")
                    }>
                      {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className="even:bg-green-light even:bg-opacity-50">
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()} className="text-center p-1 break-words">
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        {page.length == 0 &&
          <div className="text-center py-10">
            Tidak ada voucher.
          </div>
        }
      </div>
      <ModalInput onClose={handleOnClose} visible={showModal} setRefreshSignal={setRefreshSignal} setShowToast={setShowToast}/>
      {page.length > 0 &&
        <div className="flex justify-center gap-2 pt-4 items-center">
          <div className="flex gap-1">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="bg-blue-light p-1 text-white font-semibold rounded-md disabled:bg-grey enabled:hover:bg-blue-primary transition ease-linear duration-300">
              <img src={ChevronDoubleLeft} className="w-3"/>
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="bg-blue-light p-1 text-white font-semibold rounded-md disabled:bg-grey enabled:hover:bg-blue-primary transition ease-linear duration-300">
              <img src={ChevronLeft} className="w-3"/>
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage} className="bg-blue-light p-1 text-white font-semibold rounded-md disabled:bg-grey enabled:hover:bg-blue-primary transition ease-linear duration-300">
              <img src={ChevronRight} className="w-3"/>
            </button>
            <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage} className="bg-blue-light p-1 text-white font-semibold rounded-md disabled:bg-grey enabled:hover:bg-blue-primary transition ease-linear duration-300">
              <img src={ChevronDoubleRight} className="w-3"/>
            </button>
          </div>
          <span className="flex flex-row gap-1">
            Halaman 
            <strong>
              {pageIndex + 1} dari {pageOptions.length}
            </strong>
          </span>
        </div>
      }
    </div>
  );
}