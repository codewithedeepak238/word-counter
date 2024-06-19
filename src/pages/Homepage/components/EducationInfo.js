import { HiOutlinePencil } from "react-icons/hi2";
import { RiGraduationCapFill } from "react-icons/ri";

export const EducationInfo = () => {
  return (
    <section className="bg-white rounded p-5 relative">
        <div className="mb-5">
            <h2 className="font-bold flex items-center"><RiGraduationCapFill className="mr-1"/>Education</h2>
            <div className="absolute top-5 right-8 cursor-pointer">
                <span><HiOutlinePencil/></span>
            </div>
        </div>
        <div className="grid grid-cols-3">
            <div className="pr-2 pb-2">
                <h2>Highest Degree</h2>
                <p>Others</p>
            </div>
            <div className="pr-2 pb-2">
                <h2>Other Highest Degree</h2>
                <p>DIPLOMA IN CS</p>
            </div>
            <div className="pr-2 pb-2">
                <h2>Highest Degree Branch</h2>
                <p>CSE/IT/ECE</p>
            </div>
            <div className="pr-2 pb-2">
                <h2>Highest Degree College</h2>
                <p>VIVEKANAND COLLEGE OF POLYTECHNIC</p>
            </div>
            <div className="pr-2 pb-2">
                <h2>Year of Completion</h2>
                <p>2023</p>
            </div>
            <div className="pr-2 pb-2">
                <h2>Highest Degree Percentage/Percentile/CGPA</h2>
                <p>64</p>
            </div>
            <div className="pr-2">
                <h2>12th Percentage/Percentile</h2>
                <p>78</p>
            </div>
            <div className="pr-2">
                <h2>10th Percentage/Percentile</h2>
                <p>7.8</p>
            </div>
            <div className="pr-2">
                <h2>College degree/latest marksheet</h2>
                <p>-</p>
            </div>
        </div>
    </section>
  )
}
