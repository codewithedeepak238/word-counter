import { HiOutlinePencil } from "react-icons/hi2";

export const MainInfo = () => {
  return (
    <section className="flex bg-white rounded p-5 relative">
        <div className="pr-5 border-r-2">
            <h2 className="font-bold">Deepak Saraswat</h2>
            <p>FS78512787</p>
        </div>
        <div className="px-5 border-r-2">
            <h2 className="font-bold">Email</h2>
            <p>deepaksaraswat238@gmail.com</p>
        </div>
        <div className="px-5">
            <h2 className="font-bold">Contact No.</h2>
            <p>+91 7906835811</p>
        </div>
        <div className="absolute top-5 right-8 cursor-pointer">
            <span><HiOutlinePencil/></span>
        </div>
    </section>
  )
}
