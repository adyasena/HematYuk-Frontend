import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../helpers/useFetch';
import ModalVoucher from './ModalVoucher';

const Promo = () => {
  const [id, setId] = useState();
  const [showModalVoucher, setShowModalVoucher] = useState(false);
  const navigate = useNavigate();

  const handleOnClose = () => {
    setShowModalVoucher(false);
  };

  const toPromo = () => {
    navigate('/promo');
  };

  const { data: vouchersData } = useFetch('/vouchers');

  const [vouchers, setVouchers] = useState([]);
  useMemo(() => {
    if (!vouchersData?.data?.vouchers) return;
    setVouchers(vouchersData.data.vouchers);
  }, [vouchersData]);

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  }

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
        console.log(code);
      },
      (err) => {
        console.log('failed to copy', err.mesage);
      }
    );
  };

  return (
    <div id='latest'>
      <div className='container mx-auto min-h-[80vh] w-screen pt-20 pb-6 lg:px-8 flex flex-col items-center relative'>
        <div className='rounded-xl w-full h-full mb-28'>
          <div className='flex flex-row justify-between items-center'>
            <div className='text-black text-2xl font-poppins font-semibold py-4'>
              Promo Populer
            </div>
            <button
              className='h-8 text-green-primary hover:text-green-dark hover:underline transform duration-300 ease'
              onClick={toPromo}
            >
              Lihat semua
            </button>
          </div>
          <div className="grid grid-cols-4 justify-center items-center gap-6">
            {vouchers.slice(0, 4)?.map((item) => (
              <div key={item._id} className="w-full h-28 justify-self-center flex text-white">
                <div className="w-2/3 h-full rounded-s-md bg-green-dark flex flex-col items-center justify-center font-poppins gap-1">
                  <div className="font-bold text-xl">
                    {item.companyName}
                  </div>
                  <div className="text-sm">
                    Min. transaksi {kFormatter(item.minTransaction)}
                  </div>
                  <div className='relative z-0 w-5/6 text-black'>
                    <button className='bg-green-light w-full h-6 rounded-md text-center text-sm'>
                      Kode berhasil disalin
                    </button>
                    <button
                      className={
                        'bg-white hover:bg-green-primary hover:text-white w-full h-6 rounded-md text-center transform duration-300 ease absolute inset-y-0 left-0 z-10 ' +
                        (copied ? 'focus:opacity-0' : 'opacity-100')
                      }
                      onClick={() => {
                        copyToClipboard(item.voucherCode);
                      }}
                    >
                      {item.voucherCode}
                    </button>
                  </div>
                </div>
                <button className="w-[36%] h-full rounded-e-md bg-green-primary hover:bg-green-dark text-white flex flex-col items-center justify-center font-poppins gap-1 transform duration-300 ease"
                  onClick={() => {setId(item); setShowModalVoucher(true)}}>
                  <div className="font-bold text-center">
                    <div className="text-lg">Diskon</div>
                    <div className="text-3xl">{kFormatter(item.value)}</div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalVoucher
        onClose={handleOnClose}
        visible={showModalVoucher}
        voucher={id}
      />
    </div>
  );
};

export default Promo;
