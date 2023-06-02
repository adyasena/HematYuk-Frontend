/* eslint-disable react/prop-types */
import { Close } from "../assets";

const ModalVoucher = ({ visible, onClose, voucher }) => {
  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center text-black flex fixed inset-0 z-10 text-base">
        <div className="w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start font-semibold text-lg">
            {voucher.name}
            <button className="ml-auto bg-transparent" onClick={onClose}>
              <img src={Close} className="w-6 rounded-md hover:bg-grey ease transition-all duration-300" />
            </button>
          </div>
          <div className="w-full">
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalVoucher;