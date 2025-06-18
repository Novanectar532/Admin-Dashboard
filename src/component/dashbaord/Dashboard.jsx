import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { TbBuildings } from "react-icons/tb";
import { LiaHourglass } from "react-icons/lia";
import logo from '../../assets/dashlogo.png'
import { IoClose, IoDocumentTextOutline } from 'react-icons/io5';
import { PiFileDoc } from 'react-icons/pi';
import { TiTick } from 'react-icons/ti';
import techgrow from '../../assets/netlify.png'
import datavision from '../../assets/truebill.jpg'
import cloudnine from '../../assets/cloudnine.png'
import JobViewStatsChart from './JobViewStatsChart';

const companyApprovals = [
  {
    image: techgrow,
    title: "TechGrow Solutions",
    name: "Amit Patel, HR Manager"
  },
  {
    image: datavision,
    title: "DataVision Inc.",
    name: "Priya Singh, Recruiter"
  },
  {
    image: cloudnine,
    title: "CloudNine Systems",
    name: "Rajesh Kumar, CEO"
  },
]

function Dashboard() {
  return (
    <section className='p-8'>
{/* Greetings */}
      <div className='pb-6'>
        <h1 className='font-semibold text-[24px] text-[#1C2638]'>Good morning, Natashia Bunny</h1>
        <p className='font-medium text-[16px] text-[#A0A0A0]'>Here is your job listings statistic report.</p>
      </div>

{/* status */}
      <div className='flex flex-wrap gap-2 pb-6'>
        {/* 1st */}
        <div className='flex-1 flex bg-[#837FEF] rounded-xl text-white gap-3 items-center justify-center py-6'>
          <p className='font-semibold text-[48px]'>300</p>
          <p className='font-medium text-[18px]'>Total Candidate</p>
          <FaRegUser className='w-6 h-6' />
        </div>
        {/* 2nd */}
        <div className='flex-1 flex bg-[#1F9AD3] rounded-xl text-white gap-3 items-center justify-center py-6'>
          <p className='font-semibold text-[48px]'>100</p>
          <p className='font-medium text-[18px]'>Total Companies</p>
          <TbBuildings className='w-7 h-7' />
        </div>
        {/* 3rd */}
        <div className='flex-1 flex bg-[#F4A79D] rounded-xl text-white gap-3 items-center justify-center py-6'>
          <p className='font-semibold text-[48px]'>10</p>
          <p className='font-medium text-[18px]'>Pending Approvals</p>
          <LiaHourglass className='w-7 h-7' />
        </div>
      </div>

{/* chart + recent activity */}
      <div className='flex flex-col md:flex-row flex-wrap pb-6'>
        <div className='flex-1'>
          <JobViewStatsChart />
        </div>

        <div className='flex-[0.5] p-3'>
          <p className='font-semibold text-[20px] text-[#1C2638] pb-6'>Recent Activity</p>

          <div className='grid gap-5'>
            <div className='flex pb-4 items-center border-b-1 border-[#DEE0E4]'>
              <div className='w-11 h-11'>
                <img src={logo} alt="logo" className='w-6 h-6 rounded-full' />
              </div>
              <div>
                <p className='font-normal text-[16px] text-[#1C2638] pb-2'>New Company 'Media Monks' <br /> registered.</p>
                <p className='font-normal text-[14px] text-[#A0A0A0]'>2 hour ago</p>
              </div>
            </div>

            <div className='flex pb-4 items-center border-b-1 border-[#DEE0E4]'>
              <div className='w-11 h-11'>
                <FaRegUser className='w-6 h-6' />
              </div>
              <div>
                <p className='font-normal text-[16px] text-[#1C2638] pb-2'>Candidate 'Rahul Sharma' uploaded <br /> resume.</p>
                <p className='font-normal text-[14px] text-[#A0A0A0]'>2 hour ago</p>
              </div>
            </div>

            <div className='flex pb-4 items-center border-b-1 border-[#DEE0E4]'>
              <div className='w-11 h-11'>
                <IoDocumentTextOutline className='w-6 h-6' />
              </div>
              <div>
                <p className='font-normal text-[16px] text-[#1C2638] pb-2'>Job 'UI Designer' posted.</p>
                <p className='font-normal text-[14px] text-[#A0A0A0]'>2 hour ago</p>
              </div>
            </div>

            <div className='flex pb-4 items-center'>
              <div className='w-11 h-11'>
                <PiFileDoc className='w-6 h-6' />

              </div>
              <div>
                <p className='font-normal text-[16px] text-[#1C2638] pb-2'>5 new resumes uploaded.</p>
                <p className='font-normal text-[14px] text-[#A0A0A0]'>2 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* pending company approvals */}
      <div>
        <p className='font-semibold text-[20px] text-[#1C2638] pb-8'>Pending Company Approvals</p>
        {
          companyApprovals.map((data) => (
            <div className='flex justify-between'>
              {/* left section */}
              <div>
                <div className='flex pb-4 items-center'>
                  <div className='w-11 h-11'>
                    <img src={data.image} alt="logo" className='w-6 h-6 rounded-full' />
                  </div>
                  <div>
                    <p className='font-medium text-[18px] text-[#1C2638] pb-2'>{data.title}</p>
                    <p className='font-normal text-[16px] text-[#A0A0A0]'>{data.name}</p>
                  </div>
                </div>
              </div>

              {/* right section */}
              <div className='flex flex-wrap gap-2 items-center justify-end'>
                <div className='flex py-3 px-4 bg-[#F04438] text-white rounded-[12px] cursor-pointer'>
                  <IoClose className='w-6 h-6' />
                  <p className='font-medium text-[16px]'>Reject</p>
                </div>
                <div className='flex py-3 px-4 bg-[#17B26A] text-white rounded-[12px] cursor-pointer'>
                  <TiTick className='w-6 h-6' />
                  <p className='font-medium text-[16px]'>Approve</p>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default Dashboard