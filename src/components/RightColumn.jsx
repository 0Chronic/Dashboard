import React from 'react'
import Salesitem from './Salesitem'
import WebAnalytics from './WebAnalytics'
import ScoreList from './ScoreList'

const RightColumn = () => {
  return (
   <div className='w-full p-2 '>
     <Salesitem />
     <WebAnalytics />
     <ScoreList />
   </div>
  )
}

export default RightColumn