const Promo = () => {
  const vocerDummy = [
    { id: 1, disc: "50%", min: "20K" },
    { id: 2, disc: "20K", min: "30K" },
    { id: 3, disc: "69%", min: "2K" },
    { id: 4, disc: "72K", min: "100K" },
    { id: 5, disc: "8K", min: "90K" },
    { id: 5, disc: "1%", min: "500K" },
    { id: 1, disc: "50%", min: "20K" },
    { id: 2, disc: "20K", min: "30K" },
    { id: 3, disc: "69%", min: "2K" },
    { id: 4, disc: "72K", min: "100K" },
    { id: 5, disc: "8K", min: "90K" },
    { id: 5, disc: "1%", min: "500K" },
    
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto min-h-screen w-screen pt-20 pb-6 lg:px-8 flex flex-col items-center relative">
        <div className="rounded-xl w-full h-full mb-28">
          <div className="flex flex-row justify-between items-center">
            <div className="text-black text-2xl font-poppins font-semibold py-4">
              Promo Populer
            </div>
            <button className="h-8 text-green-primary hover:text-green-dark hover:underline">
              Lihat semua
            </button>
          </div>
          <div className="grid grid-cols-4 justify-center items-center gap-8">
            {vocerDummy.map(item => (
              <div key={item.id} className="w-full h-28 justify-self-center flex">
                <div className="w-2/3 h-full rounded-s-md bg-green-light flex flex-col items-center justify-center font-poppins">
                  <div className="font-bold text-2xl">
                    Diskon {item.disc}
                  </div>
                  <div className="text-sm">
                    Min. pembelian {item.min}
                  </div>
                </div>
                <div className="w-1/3 h-full rounded-e-md bg-green-primary flex items-center justify-center font-poppins">
                  <button className="w-2/3 h-2/3 bg-white rounded-md hover:bg-grey transform duration-300 ease"
                    onClick={() => {navigator.clipboard.writeText(item.min)}}>
                    Salin Kode
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo;