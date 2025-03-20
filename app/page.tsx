import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen mx-auto max-w-sm">
      <nav className="bg-amber-100 flex items-center justify-between p-4">
        <img src="/logo-ims.jpeg" style={{ width: "40px", height: "40px" }} />
        <p className="font-bold">Cek Angsuran</p>
        <p className="font-bold"></p>
      </nav>
      <div className="p-4 m-3 border-black border-2">
        <label className="font-semibold text-sm">Nama Mobil</label>
        <br />
        <input type="number" className="border-black border-2 rounded-md p-1 w-full mb-2" style={{marginBottom:"10px"}} />
        <br />
        <label className="font-semibold text-sm">Harga Mobil</label>
        <br />
        <input type="number" className="border-black border-2 p-1 rounded-md mb-2" />
        <br />
        <label className="font-semibold text-sm">DP (Down Payment)</label>
        <br />
        <input type="number" className="border-black border-2 rounded-md p-1 w-full mb-2" style={{marginBottom:"10px"}} />
        <br />
        <label className="font-semibold text-sm">Lama Cicilan(bulan)</label>
        <br />
        <input type="number" className="border-black border-2 rounded-md p-1 w-full mb-2" style={{marginBottom:"10px"}} />
        <input type="number" />
        <input type="number" />
      </div>
    </div>
  );
}
