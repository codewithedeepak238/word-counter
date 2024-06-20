import {useInfo} from "../context/InfoContext"

export const Header = () => {
    const {budget, remain, spent} = useInfo();

  return (
    <div>
        <h1 className='text-4xl font-[500] py-[1%]'>My Budget Planner</h1>
        <div className='mt-[2%] flex justify-between px-[5%]'>
            <span className='py-[1%] px-[1%] bg-gray-100 rounded-[5px]'>Budget: Rs. {budget}</span>
            <span className='py-[1%] px-[1%] bg-gray-100 rounded-[5px]'>Remaining: Rs. {remain}</span>
            <span className='py-[1%] px-[1%] bg-gray-100 rounded-[5px]'>Spent so far: Rs. {spent}</span>
        </div>
    </div>
  )
}
