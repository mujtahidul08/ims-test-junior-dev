"use client";
import { useState } from "react";

export default function Home() {
  const [kontrak, setKontrak] = useState<string | "">("");
  const [namaMobil, setNamaMobil] = useState<string | "">("");
  const [namaKlien, setNamaKlien] = useState<string | "">("");
  const [hargaMobil, setHargaMobil] = useState<number>(0);
  const [dpPersen, setDpPersen] = useState<number>(10);
  const [jangkaWaktu, setJangkaWaktu] = useState<number>(0);
  const [angsuran, setAngsuran] = useState<number | null>(null);
  const hitungAngsuran = () => {
    if (!hargaMobil || !jangkaWaktu) {
      alert("Harap isi semua data!");
      return;
    }

    // Hitung DP dalam Rupiah
    const dpRupiah = (dpPersen / 100) * hargaMobil;
    // Pokok Utang
    const pokokUtang = hargaMobil - dpRupiah;

    // Tentukan bunga
    let bunga = 0;
    if (jangkaWaktu <= 12) {
      bunga = 0.12;
    } else if (jangkaWaktu > 12 && jangkaWaktu <= 24) {
      bunga = 0.14;
    } else {
      bunga = 0.165;
    }

    // Hitung angsuran per bulan
    const angsuranBulanan = (pokokUtang + pokokUtang * bunga) / jangkaWaktu;
    setAngsuran(angsuranBulanan);
  };

  return (
    <div className="bg-white min-h-screen mx-auto max-w-sm">
      <nav className="bg-amber-100 flex items-center justify-between p-3 sticky top-0 left-0 right-0 z-50">
        <img src="/logo-ims.jpeg" style={{ width: "40px", height: "40px" }} />
        <p className="font-bold">Cek Angsurans</p>
        <p className="font-bold"></p>
      </nav>
      <div className="p-4 m-3 border-black border-2 mt-4">
        <label className="font-semibold text-sm">Nama Mobil</label>
        <input
          type="text"
          value={namaMobil}
          onChange={(e) => setNamaMobil(String(e.target.value))}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          mb-2"
        />
        <label className="font-semibold text-sm">Harga Mobil (OTR)</label>
        <input
          type="number"
          value={hargaMobil}
          onChange={(e) => setHargaMobil(Number(e.target.value))}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          mb-2"
        />
        <div className="flex justify-between gap-3 mb-2">
          <div className="w-1/2">
            <label className="font-semibold text-sm">DP (Down Payment)</label>
            <select
              id="cicilan"
              value={dpPersen}
              onChange={(e) => setDpPersen(Number(e.target.value))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((dp) => (
                <option key={dp} value={dp}>
                  {dp}%
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2">
            <label className="font-semibold text-sm">
              Lama Cicilan (bulan)
            </label>
            <input
              type="number"
              value={jangkaWaktu}
              onChange={(e) => setJangkaWaktu(Number(e.target.value))}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <label className="font-semibold text-sm">No Kontrak</label>
        <input
          type="text"
          value={kontrak}
          onChange={(e) => setKontrak(String(e.target.value))}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          mb-2"
        />
        <label className="font-semibold text-sm">Nama Klien</label>
        <input
          type="text"
          value={namaKlien}
          onChange={(e) => setNamaKlien(String(e.target.value))}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          mb-4"
        />
        <button
          type="button"
          onClick={hitungAngsuran}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
          "
        >
          Cek Angsuran
        </button>
      </div>
      <h1 className="font-bold text-xl text-center">Jadwal Angsuran</h1>
      {angsuran !== null && (
        <div>
          <div className="w-full flex items-center gap-1">
            <div className="m-3">
              <p className="text-sm font-extralight">Nama Mobil</p>
              <p className="text-sm font-extralight">Nama Klien</p>
              <p className="text-sm font-extralight">No. Kontrak</p>
              <p className="text-sm font-extralight">Harga Mobil</p>
              <p className="text-sm font-extralight">Dp Persen</p>
            </div>
            <div className="m-3">
              <p className="text-sm font-extralight">: {namaMobil}</p>
              <p className="text-sm font-extralight">: {namaKlien}</p>
              <p className="text-sm font-extralight">: {kontrak}</p>
              <p className="text-sm font-extralight">: Rp {hargaMobil}</p>
              <p className="text-sm font-extralight">: {dpPersen}%</p>
            </div>
          </div>

          <p className="mt-4 font-bold text-center">
            Angsuran per bulan: Rp {angsuran.toLocaleString("id-ID")}
          </p>

          {/* ================================ */}

          <div className="relative overflow-x-auto m-2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-7 py-4">
                    No. Kontrak
                  </th>
                  <th scope="col" className="px-7 py-4">
                    Angsuran ke-
                  </th>
                  <th scope="col" className="px-7 py-4">
                    Angsuran per-bulan
                  </th>
                  <th scope="col" className="px-7 py-4">
                    Tanggal Jatuh Tempo
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: jangkaWaktu }, (_, i) => {
                  // Tentukan tanggal jatuh tempo setiap bulan (tanggal 25)
                  const dueDate = new Date();
                  dueDate.setMonth(dueDate.getMonth() + i);
                  dueDate.setDate(25); // Set selalu ke tanggal 25

                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        className="px-7 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {kontrak}
                      </th>
                      <td className="px-7 py-3">{i + 1}</td>
                      <td className="px-7 py-3">Rp {angsuran.toLocaleString("id-ID")}</td>
                      <td className="px-7 py-3">{dueDate.toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* ================================= */}
        </div>
      )}
    </div>
  );
}
