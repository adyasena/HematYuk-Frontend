import { useRef, useState } from "react";
import { Close } from "../assets";
import { createFetcher } from "../helpers/fetcher";

const ModalEdit = ({ visible, onClose, row, setRefreshSignal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef();
  const companyNameRef = useRef();
  const typeRef = useRef();
  const valueRef = useRef();
  const minTransactionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const voucherCodeRef = useRef();

  const editVoucherHandler = async () => {
    try {
      setIsLoading(true);

      const vouchers = {
        name: nameRef.current.value,
        companyName: companyNameRef.current.value,  
        type: typeRef.current.value,
        value: valueRef.current.value,
        minTransaction: minTransactionRef.current.value,
        price: priceRef.current.value,
        quantity: quantityRef.current.value,
        voucherCode: voucherCodeRef.current.value.toUpperCase(),
      }; 

      const fetcher = createFetcher();

      const res = await fetcher.put("/vouchers/" + row._id, vouchers);
      if (!res.data.success) throw new Error(res.data.error);
      
      setRefreshSignal((s) => !s);
      onClose();

    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10 text-base">
        <div className="w-1/2 mx-auto bg-white p-6 font-roboto rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start font-semibold text-lg">
            Ubah Voucher
            <button className="ml-auto bg-transparent" onClick={onClose}>
              <img src={Close} className="w-6 rounded-md hover:bg-green-light ease transition-all duration-300" />
            </button>
          </div>
          <form className="flex flex-col gap-4" >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Promo</label>
                <input ref={nameRef} name="name" defaultValue={row.name} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
              </div>
              <div className="flex flex-row w-full justify-between gap-5">
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Aplikasi</label>
                  <input ref={companyNameRef} name="companyName" defaultValue={row.companyName} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Tipe</label>
                  <input ref={typeRef} name="type" defaultValue={row.type} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-5">
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Nilai</label>
                  <input ref={valueRef} name="value" defaultValue={row.value} type="number" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Minimum Pembelian</label>
                  <input ref={minTransactionRef} name="minTransaction" defaultValue={row.minTransaction} type="number" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-5">
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Minimum Poin</label>
                  <input ref={priceRef} name="price" defaultValue={row.price} type="number" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Jumlah</label>
                  <input ref={quantityRef} name="quantity" defaultValue={row.quantity} type="number" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Kode Voucher</label>
                <input ref={voucherCodeRef} name="voucherCode" defaultValue={row.voucherCode} type="text" className="uppercase py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-green-primary rounded-md hover:text-blue-primary hover:bg-green-light py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className={"py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isLoading ? "cursor-wait bg-grey" : "hover:bg-green-dark bg-green-primary")}
                type="submit"
                disabled={isLoading}
                onClick={editVoucherHandler}>
                  Ubah
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalEdit;