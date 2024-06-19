import { HiOutlinePencil } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";

export const PersonalInfo = () => {
  return (
    <section className="bg-white rounded p-5 relative">
        <div className="mb-5">
            <h2 className="font-bold flex items-center"><CgNotes className="mr-1"/>Personal Details/KYC</h2>
            <div className="absolute top-5 right-8 cursor-pointer">
                <span><HiOutlinePencil/></span>
            </div>
        </div>
        <div className="grid grid-cols-3">
            <div className="pr-2 pb-2">
                <h2>Mailing Address</h2>
                <p>Nagla kila, mandir wali gali, Koil, Aligarh, Uttar Pradesh, India</p>
            </div>
            <div className="pr-2 pb-2">
                <h2>Date of Birth*</h2>
                <p>08-02-2001</p>
            </div>
            <div className="pr-2 pb-2">
                <h2>Aadhar Number</h2>
                <p>665162958912</p>
            </div>
            <div className="pr-2">
                <h2>PAN Number</h2>
                <p>LYYPS9909P</p>
            </div>
        </div>
    </section>
  )
}
