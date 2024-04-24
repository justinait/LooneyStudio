import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='heroContainer'>
      <video 
        className='heroImage' 
        src="https://s3-figma-videos-production-sig.figma.com/video/1336690570407106185/TEAM/523e/bd42/-db2b-4da4-a010-312139035f00?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pfCivlAHioOeAevC2Z0sT3DStKydwKtb7Rend2DRSRRY9Nz4MHVOxMu2tskwNd61vAlQXaAKTPlm3ny4FXDzu9vGt0Trp2oMfDXjDZCpo8I5BBEBZX99NBlmq-Ybb2VYF169LBpcjc7k96NXKTKAo2RDz8H~iQuOpXivkwVoyEkyQNccavbUCHBUgWrkOoV58AtR93ghQcAsjC7XEiGX487Yzz1uX62AnPQ2eEGoeV3NsYQoRVUptIu0ETVDNO7hg3FD-nRePuaZop3VgSQw9DM~oY2ZDbRdmgT-t3D8DRWkNrD7hZKG3sW-1l~x5di2vUulXaAxo08KWTY6sRdE5Q__" 
        muted loop autoplay ></video>
      <p className='heroText'>DESIGN & BUILD</p>
      
    </div>
  )
}

export default Home