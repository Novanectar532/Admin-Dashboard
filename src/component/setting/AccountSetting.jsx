import React from 'react'
import { FiUploadCloud } from 'react-icons/fi';
import { HiOutlineUserCircle } from "react-icons/hi";

function AccountSetting() {
    return (
        <div>
            <div className='py-4'>
                <p className='font-medium text-[18px] text-[#1C2638]'>Personal Information</p>
                <p className='font-normal text-[16px] text-[#A0A0A0]'>This information will be not displayed publicly.</p>
            </div>
{/* file upload */}
            <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
                <div className='flex-1'>Profile Photo</div>
                <div className='flex-1 flex items-center gap-6'>
                    <HiOutlineUserCircle className='w-14 h-14 text-[#A0A0A0]' />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer w-64 h-32 border-2 border-dashed border-[#4640DE] rounded-md flex flex-col items-center justify-center text-center hover:bg-purple-50 transition"
                    >
                        <FiUploadCloud className="text-[#4640DE] text-3xl mb-2" />
                        <p className="text-[16px] text-[#A0A0A0]">
                            <span className="text-blue-600 font-medium">Click to replace</span> or drag and drop<br />
                            PNG or JPG (max. 400 x 400px)
                        </p>
                        <input
                            type="file"
                            id="file-upload"
                            accept=".png, .jpg, .jpeg"
                            className="hidden"
                        />
                    </label>
                </div>
            </div>

            <div className='border-b-1 border-[#DEE0E4]'></div>
{/* admin personal info */}
            <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
                <div className='flex-1'>Admin Personal info</div>
                <div className='flex-1'>
                    <form action="" className=' grid gap-6'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Admin Name</label>
                            <input
                                type="text"
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Enter admin full name'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Admin Email</label>
                            <input
                                type="text"
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Enter admin full name'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Current Password</label>
                            <input
                                type="text"
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Enter admin full name'
                            />                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">New Password</label>
                            <input
                                type="text"
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Enter admin full name'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Confirm Password</label>
                            <input
                                type="text"
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Enter admin full name'
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div className='border-b-1 border-[#DEE0E4]'></div>
{/* add new sub-admin */}
            <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
                <div className='flex-1'>Add New Sub-Admin</div>
                <div className='flex-1'>
                    <form action="" className='grid gap-6'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Enter admin full name'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Enter admin full name'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Role</label>
                            <select id="" className='border border-[#DEE0E4] p-3 font-normal text-[14px] text-[#1E283C]'>
                                <option value="">View Only</option>
                                <option value="">Designer</option>
                                <option value="">Developer</option>
                            </select>
                        </div>
                        <div className='flex justify-end flex-wrap gap-2.5'>
                            <button className='border border-[#C6C4F5] text-[#4640DE] font-medium text-[18px] px-8 py-2 rounded-xl cursor-pointer'>Cancel</button>
                            <button className='border bg-[#4640DE] text-white font-medium text-[18px] px-8 py-2 rounded-xl cursor-pointer'>Save Account Setting</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AccountSetting
