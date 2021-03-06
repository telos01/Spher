import React, { useEffect,useState } from 'react'
import {apiShareDetail} from './lookup'
import { Share } from './detail'
import {ShareList} from './list'
import { FeedList } from './feed'
import {ShareCreate} from './create'
import '../index.css';



export function FeedComponents(props) {


  const [newShares, setNewShares] = useState([])
  const validUser = props.validUser === 'false' ? false : true 
  const handleNewShare = (newShare) => {
    let tmpNewShares = [...newShares]
    tmpNewShares.unshift(newShare)
    setNewShares(tmpNewShares)
  }


  return <div className='row'>
    {validUser === true && <ShareCreate didShare={handleNewShare} className='col-md-4 mx-auto col-10'/>} 
    <FeedList newShares={newShares} {...props}/>
  </div>
}


export function ShareComponents(props) {


  const [newShares, setNewShares] = useState([])
  const validUser = props.validUser === 'true' ? true : false 
  const handleNewShare = (newShare) => {
    let tmpNewShares = [...newShares]
    tmpNewShares.unshift(newShare)
    setNewShares(tmpNewShares)
  }


  return <div className='row'>
    {validUser === true && <ShareCreate didShare={handleNewShare} className='col-md-4 mx-auto col-10'/>} 
    <ShareList {...props} newShares={newShares} />
  </div>
}


export function ShareDetailComponent(props){
  const {shareId} = props
  const [didLookup,setDidLookup] = useState(false)
  const [share,setShare]=useState(null)


  const handleBackendLookup=(response,status)=>{
    if(status === 200){
      setShare(response)
    }else{
      alert('There was an error finding your Commit.')
    }
  }
  
  useEffect(()=>{
    if(didLookup===false){   
      apiShareDetail(shareId,handleBackendLookup)
      setDidLookup(true) }
  },[shareId,didLookup,setDidLookup])


  return share === null ? null : <Share share={share} className={props.className}/>
}