import { useRef, useState } from "react";
import { Close } from "../assets";
import { createFetcher } from "../helpers/fetcher";
import { useToast } from '@chakra-ui/react';

const ModalInput = ({ visible, onClose, setRefreshSignal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const nameRef = useRef();
  const companyNameRef = useRef();
  const typeRef = useRef();
  const valueRef = useRef();
  const minTransactionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const voucherCodeRef = useRef();

  const addVoucherHandler = async () => {
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

      const res = await fetcher.post("/vouchers", vouchers);
      if (!res.data.success) throw new Error(res.data.error);

      toast({
        title: 'Berhasil menambahkan voucher',
        status: 'success',
        isClosable: true,
        position: 'top',
        duration: 5000,
      });

      setRefreshSignal((s) => !s);
      onClose();
    } catch (error) {
      console.error(error)
      toast({
        title: 'Please fill out all field.',
        status: 'error',
        isClosable: true,
        position: 'top',
        duration: 5000,
      });
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
            Tambah Voucher
            <button className="btn-final-add ml-auto bg-transparent" onClick={onClose}>
              <img src={Close} className="w-6 rounded-md hover:bg-green-light ease transition-all duration-300" />
            </button>
          </div>
          <form className="flex flex-col gap-4" >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Promo</label>
                <input ref={nameRef} name="name" type="text" className="in-name py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
              </div>
              <div className="flex flex-row w-full justify-between gap-5">
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Aplikasi</label>
                  <input ref={companyNameRef} name="companyName" type="text" className="in-company py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Tipe</label>
                  <input ref={typeRef} name="type" defaultValue="discount" type="text" className="in-type py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-5">
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Nilai</label>
                  <input ref={valueRef} name="value" type="number" className="in-value py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Minimum Pembelian</label>
                  <input ref={minTransactionRef} name="minTransaction" type="number" className="in-minimal py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-5">
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Minimum Poin</label>
                  <input ref={priceRef} name="price" type="number" className="in-price py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
                <div className="flex flex-col justify-start w-1/2 gap-1">
                  <label className="text-sm">Jumlah</label>
                  <input ref={quantityRef} name="quantity" type="number" className="in-quantity py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
                </div>
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Kode Voucher</label>
                <input ref={voucherCodeRef} name="voucherCode" type="text" className="in-code uppercase py-1 px-2 rounded-md border-black border bg-white focus:outline-green-primary" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="btn-cancel text-green-primary rounded-md hover:text-blue-primary hover:bg-green-light py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                Batal
              </button>
              <button
                className={"btn-add py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isLoading ? "cursor-wait bg-grey" : "hover:bg-green-dark bg-green-primary")}
                type="submit"
                disabled={isLoading}
                onClick={addVoucherHandler}>
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalInput;