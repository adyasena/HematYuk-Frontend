/* eslint-disable react/prop-types */
import { useState } from "react";
import { Close } from "../assets";

const ModalVoucher = ({ visible, onClose, voucher }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
        console.log(code)
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
  )};

  function rpFormatter(num) {
    return 'Rp' + Intl.NumberFormat('en-DE').format(num)
  }
  function rbFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'rb' : Math.sign(num)*Math.abs(num)
  }

  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center text-black flex fixed inset-0 z-10 text-base">
        <div className="w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start font-semibold text-lg">
            {voucher.name}
            <button className="ml-auto bg-transparent" onClick={onClose}>
              <img src={Close} className="w-6 rounded-md hover:bg-green-light ease transition-all duration-300" />
            </button>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-28 justify-self-center flex text-white">
              <div className="w-2/3 h-full rounded-s-md bg-green-dark flex flex-col items-center justify-center font-poppins gap-1">
                <div className="font-bold text-3xl">
                  {voucher.companyName}
                </div>
                <div className="text-lg">
                  Min. transaksi {rpFormatter(voucher.minTransaction)}
                </div>
              </div>
              <div className="w-1/3 h-full rounded-e-md bg-green-primary text-white flex flex-col items-center justify-center font-poppins gap-1">
                <div className="font-bold text-center">
                  <div className="text-xl">Diskon</div>
                  <div className="text-4xl">{rbFormatter(voucher.value)}</div>
                </div>
              </div>
            </div>
            <div className="w-full h-10 flex justify-center border rounded-md">
              <div className="w-1/4 h-full flex items-center rounded-s-md bg-green-light justify-center">
                Kode voucher
              </div>
              <div className="w-3/4 h-full relative z-0 flex items-center rounded-e-md justify-center">
                <button className="bg-green-light w-full h-full rounded-e-md text-center">
                  Kode berhasil disalin
                </button>
                <button className={"bg-white hover:bg-green-light w-full h-full rounded-e-md text-center transform duration-300 ease absolute inset-y-0 left-0 z-10 " + (copied ? "focus:opacity-0" : "opacity-100")}
                  onClick={() => {copyToClipboard(voucher.voucherCode)}}>
                    {voucher.voucherCode}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">
                Syarat & Ketentuan
              </div>
              1. Voucher diskon sebesar {rpFormatter(voucher.value)}.<br/>
              2. Minimum transaksi {rpFormatter(voucher.minTransaction)}.<br/>
              3. Voucher hanya berlaku untuk transaksi pada aplikasi {voucher.companyName}.<br/>
              4. Tidak bisa digabung dengan voucher lain.<br/>
              5. Voucher bisa digunakan selama ketersediaan masih ada.
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalVoucher;