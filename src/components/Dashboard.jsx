import { useState, useMemo } from "react";
import Moment from "moment/moment";
import TableVoucher from "./TableVoucher";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import { Edit, Delete } from "../assets";
import { useFetch } from "../helpers/useFetch";

const Dashboard = () => {
  const [refreshSignal, setRefreshSignal] = useState(false);
  const {data: vouchersData} = useFetch("/vouchers", refreshSignal);
  const [id, setId] = useState();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleOnClose = () => {
    setShowModalEdit(false);
    setShowModalDelete(false);
  };

  const [vouchers, setVouchers] = useState([]);
  useMemo(() => {
    if (!vouchersData?.data?.vouchers) return;
    setVouchers(vouchersData.data.vouchers);
  }, [vouchersData]);

  const formatTanggal = () => {
    Moment.updateLocale("id", {
      months : [
          "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
          "Agustus", "September", "Oktober", "November", "Desember"
      ]
    });
  };

  function rpFormatter(num) {
    return 'Rp' + Intl.NumberFormat('en-DE').format(num)
  }
  
  const columns = useMemo(
    () => [
      {
        Header: 'No',
        Cell: ({ row, flatRows }) => {
          return flatRows.indexOf(row) + 1;
        },
        width: 30,
      },
      {
        Header: "Promo",
        accessor: "name",
        width: 100,
      },
      {
        Header: "Aplikasi",
        accessor: "companyName",
        width: 100,
      },
      {
        Header: "Tipe",
        accessor: "type",
        width: 50,
      },
      {
        Header: "Potongan",
        accessor: "value",
        Cell: ({value}) => {
          return rpFormatter(value);
        },
        width: 90,
      },
      {
        Header: "Minimum Pembelian",
        accessor: "minTransaction",
        Cell: ({value}) => {
          return rpFormatter(value);
        },
        width: 100,
      },
      {
        Header: "Poin",
        accessor: "price",
        width: 50,
      },
      {
        Header: "Jumlah",
        accessor: "quantity",
        width: 50,
      },
      {
        Header: "Kode",
        accessor: "voucherCode",
        width: 120,
      },
      {
        Header: "Terakhir Diubah",
        accessor: "updatedAt",
        Cell: ({value}) => {
          formatTanggal();
          return Moment(value).format("D MMMM YYYY");
        },
        width: 100,
      },
      {
        Header: "Action",
        accessor: vouchers => {
          let id =(vouchers._id);
          return ( 
            <div className="flex justify-center gap-1">
              <button onClick={() => {setId(vouchers); setShowModalEdit(true);}} className="rounded-md p-1 bg-blue-light"><img src={Edit} className="w-4"/></button>
              <button onClick={() => {setId(id); setShowModalDelete(true)}} className="rounded-md p-1 bg-red-primary"><img src={Delete} className="w-4"/></button>
            </div>
          )
        },
        width: 60,
      }
    ], []
  );

  return (
    <div className="bg-green-light">
      <div className="w-full min-h-screen pt-20 pb-6 items-center">
        <div className="bg-white py-5 container mx-auto px-5 rounded-xl flex flex-col items-center h-full">
          <div className="text-black text-center text-2xl font-poppins font-semibold">
            Dashboard Admin
          </div>
          <div className="w-full text-sm pt-2 rounded-md items-center flex flex-col font:roboto ">
            <TableVoucher columns={columns} data={vouchers} setRefreshSignal={setRefreshSignal}/>
          </div>
        </div>
      </div>
      <ModalEdit className="modal-edit" onClose={handleOnClose} visible={showModalEdit} row={id} setRefreshSignal={setRefreshSignal}/>
      <ModalDelete className="modal-delete" onClose={handleOnClose} visible={showModalDelete} row={id} setRefreshSignal={setRefreshSignal}/>
    </div>
  )
}

export default Dashboard;