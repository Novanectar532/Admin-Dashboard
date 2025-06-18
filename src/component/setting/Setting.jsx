import React, { useState } from 'react'
import AccountSetting from './AccountSetting'
import PlatformSetting from './PlatformSetting'

function Setting() {
  const [activeTab, setActiveTab] = useState('account')

  return (
    <section className='p-8'>
      <h1 className='font-semibold text-[24px] text-[#1C2638] pb-6'>Setting</h1>
      <div className='flex gap-4 p-4 border-b-1 border-[#DEE0E4]'>
        <p onClick={() => setActiveTab('account')} className={`cursor-pointer font-semibold text-[16px] ${activeTab === 'account' ? 'border-[#4640DE] text-[#4640DE] border-b-2' : 'border-b-0 text-[#A0A0A0]'}`}>Account Setting</p>
        <p onClick={() => setActiveTab('platform')} className={`cursor-pointer font-semibold text-[16px] ${activeTab === 'platform' ? 'border-[#4640DE] text-[#4640DE] border-b-2' : 'border-b-0 text-[#A0A0A0]'}`}>Platform Setting</p>
      </div>
      {activeTab === 'account' && <AccountSetting />}
      {activeTab === 'platform' && <PlatformSetting />}
    </section>
  )
}

export default Setting