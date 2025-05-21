import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import CenterChart from './CenterChart'
import CurrencyBar from '../../components/sidebar/Currencybar'
import PopUpCurrencybar from '../../components/sidebar/PopUpCurrencybar'
import PopupBgImg1 from '../../assets/popupCurrencyBg1.png'
import PopupBgImg2 from '../../assets/popupCurrencyBg2.png'
import CurrenyVolumeStatus from '../../components/sidebar/CurrenyVolumeStatus'
const Home = () => {
  // CurrencyBar data variants
  const currencyData = [
    {
      increase: true,
      notifyColor: '#06426C',
      CurrencyFeed: true,
      CurrencyValue: '921.7 $105.1...',
      time: '4s',
    },
    {
      increase: false,
      notifyColor: '#1B5B7B',
      CurrencyFeed: true,
      CurrencyValue: '845.2 $98.3...',
      time: '12s',
    },
    {
      increase: true,
      notifyColor: '#1B5B7B',
      CurrencyFeed: false,
      CurrencyValue: '732.6 $85.4...',
      time: '1m',
    },
    {
      increase: false,
      notifyColor: '#032F49',
      CurrencyFeed: true,
      CurrencyValue: '689.1 $78.9...',
      time: '45s',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
    {
      increase: false,
      notifyColor: '#001314',
      CurrencyFeed: false,
      CurrencyValue: '512.9 $59.8...',
      time: '3m',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
    {
      increase: false,
      notifyColor: '#001314',
      CurrencyFeed: false,
      CurrencyValue: '512.9 $59.8...',
      time: '3m',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
    {
      increase: false,
      notifyColor: '#001314',
      CurrencyFeed: false,
      CurrencyValue: '512.9 $59.8...',
      time: '3m',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
    {
      increase: false,
      notifyColor: '#001314',
      CurrencyFeed: false,
      CurrencyValue: '512.9 $59.8...',
      time: '3m',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
    {
      increase: false,
      notifyColor: '#001314',
      CurrencyFeed: false,
      CurrencyValue: '512.9 $59.8...',
      time: '3m',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
    {
      increase: false,
      notifyColor: '#B01C1C',
      CurrencyFeed: false,
      CurrencyValue: '621.5 $72.3...',
      time: '2m',
    },
    {
      increase: true,
      notifyColor: '#6F0F11',
      CurrencyFeed: true,
      CurrencyValue: '578 $67.5...',
      time: '3s',
    },
  ]

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar>
          <CurrenyVolumeStatus
            calculationState={
              <>
                <div className="flex justify-evenly">
                  <p className="text-md text-white">Trades/m</p>
                  <p className="text-md text-white font-bold ml-4">790</p>
                </div>
                <div className="flex justify-evenly">
                  <p className="text-md text-white">Volume/m</p>
                  <p className="text-md text-white font-bold ml-4">456K</p>
                </div>
              </>
            }
          >
            {currencyData.map((currency, index) => (
              <CurrencyBar
                key={index}
                increase={currency.increase}
                notifyColor={currency.notifyColor}
                CurrencyFeed={currency.CurrencyFeed}
                CurrencyValue={currency.CurrencyValue}
                time={currency.time}
              />
            ))}
          </CurrenyVolumeStatus>
        </Sidebar>
        <CenterChart />
        <Sidebar>
          <CurrenyVolumeStatus
            calculationState={
              <>
                <div className="flex justify-evenly">
                  <p className="text-md text-white">Trades/m</p>
                  <p className="text-md text-white font-bold ml-4">790</p>
                </div>
                <div className="flex justify-evenly">
                  <p className="text-md text-white">Volume/m</p>
                  <p className="text-md text-white font-bold ml-4">456K</p>
                </div>
                <div className="flex justify-evenly">
                  <p className="text-md text-white">Liquidiation</p>
                  <p className="text-md text-white font-bold ml-4">45K</p>
                </div>
              </>
            }
          >
            {currencyData.map((currency, index) =>
              index === 4 ? (
                <PopUpCurrencybar
                  key={index}
                  increase={currency.increase}
                  popUpColor={'#B16AB9'}
                  CurrencyFeed={currency.CurrencyFeed}
                  CurrencyValue={'+2 bps $5.2...'}
                  time={currency.time}
                  popUpBgImg={PopupBgImg1}
                />
              ) : index === 10 ? (
                <PopUpCurrencybar
                  key={index}
                  increase={true}
                  popUpColor={'#6ecbdb'}
                  CurrencyFeed={true}
                  CurrencyValue={'+2 bps $5.2...'}
                  time={currency.time}
                />
              ) : (
                <CurrencyBar
                  key={index}
                  increase={currency.increase}
                  notifyColor={currency.notifyColor}
                  CurrencyFeed={currency.CurrencyFeed}
                  CurrencyValue={currency.CurrencyValue}
                  time={currency.time}
                />
              )
            )}
          </CurrenyVolumeStatus>
        </Sidebar>
      </div>
    </div>
  )
}

export default Home
