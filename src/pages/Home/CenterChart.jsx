import React from 'react'
import MainChart from './MainChart'
import SubChart from './SubChart'

const CenterChart = () => {
  return (
    <div className="w-full max-h-screen bg-black overflow-y-scroll">
      <div className="grid grid-cols-3 gap-8">
        <MainChart />
        <SubChart />
      </div>
    </div>
  )
}

export default CenterChart
