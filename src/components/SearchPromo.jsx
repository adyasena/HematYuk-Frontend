import { useState, useMemo } from 'react';
import { useFetch } from '../helpers/useFetch';
import ModalVoucher from '../components/ModalVoucher';
import { BgPromo } from '../assets';

export default function SearchPromo() {
  const [id, setId] = useState();
  const [showModalVoucher, setShowModalVoucher] = useState(false);

  const handleOnClose = () => {
    setShowModalVoucher(false);
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

  const [query, setQuery] = useState('');
  const filterData = () => {
    return vouchers.filter((item) => item.name.toLowerCase().includes(query));
  };

  return (
    <>
      <div
        className='mx-auto pt-10 pb-6 my-12 w-full h-full bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${BgPromo})` }}
      >
        <h1 className='flex text-white py-10 leading-10 font-bold text-xl text-center justify-center md:text-3xl'>
          Cari Promo Terbaik Untuk Kamu!
        </h1>
      </div>
      <div className='my-12 md:px-[200px]'>
        <div className='relative flex justify-between mx-[20px] my-[20px]'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
          <input
            type='text'
            id='simple-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Cari Promo Berdasarkan Nama Restoran'
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className='mx-[20px]'>
          <div className='grid grid-cols-4 justify-center items-center gap-6'>
            {filterData().map((item) => (
              <div
                key={item._id}
                className='w-full h-28 justify-self-center flex text-white'
              >
                <div className='w-2/3 h-full rounded-s-md bg-green-dark flex flex-col items-center justify-center font-poppins gap-1'>
                  <div className='font-bold text-xl'>{item.companyName}</div>
                  <div className='text-sm'>
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
                <button
                  className='w-1/3 h-full rounded-e-md bg-green-primary hover:bg-green-dark text-white flex flex-col items-center justify-center font-poppins gap-1 transform duration-300 ease'
                  onClick={() => {
                    setId(item);
                    setShowModalVoucher(true);
                  }}
                >
                  <div className='font-bold text-center'>
                    <div className='text-lg'>Diskon</div>
                    <div className='text-3xl'>{kFormatter(item.value)}</div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <ModalVoucher
          onClose={handleOnClose}
          visible={showModalVoucher}
          voucher={id}
        />
      </div>
    </>
  );
}
