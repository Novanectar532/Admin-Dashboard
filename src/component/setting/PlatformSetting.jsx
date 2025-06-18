import React from 'react'

function PlatformSetting() {
    return (
        <div>
            <div className='py-4'>
                <p className='font-medium text-[18px] text-[#1C2638]'>Branding Settings</p>
                <p className='font-normal text-[16px] text-[#A0A0A0]'>This information will be not displayed publicly.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
                <div className='flex-1'>Default Settings</div>
                <div className='flex-1'>
                    <form action="" className='grid gap-6'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Default Email for Notifications</label>
                            <input
                                type="text"
                                className='border border-[#DEE0E4] p-3'
                                placeholder='Enter admin full name'
                            />
                        </div>
{/* Terms & conditions */}
                        <div className='flex flex-col'>
                            <label htmlFor="">Terms & Conditions</label>
                            <textarea
                                name=""
                                id=""
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Terms and conditions goes here...'
                            />
                            <div className='flex justify-between'>
                                <p className='text-[#A0A0A0] font-normal text-[14px]'>Minimum 250 characters</p>
                                <p className='font-normal text-[14px] text-[#1C2638]'>0/500</p>
                            </div>
                        </div>
{/* privacy policy */}
                        <div className='flex flex-col'>
                            <label htmlFor="">Privacy Policy</label>
                            <textarea
                                name=""
                                id=""
                                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                                placeholder='Privacy policy text goes here...'
                            />
                            <div className='flex justify-between'>
                                <p className='text-[#A0A0A0] font-normal text-[14px]'>Minimum 250 characters</p>
                                <p className='font-normal text-[14px] text-[#1C2638]'>0/500</p>
                            </div>
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

export default PlatformSetting
