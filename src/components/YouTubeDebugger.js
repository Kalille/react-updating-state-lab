// Code YouTubeDebugger Component Here
import React, {Component} from 'react'; 


class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }

        }
    }
    handleBitrateClick=()=>{
        this.setState({
            ...this.state,
                settings:{
                ...this.state.settings,
                bitrate: 12,
               
            }
        })
        }

    handleResClick=()=>{
        this.setState({
            ...this.state,
                settings:{
                ...this.state.settings,
                
                video:{
                    resolution: '720p'
                }
            }
        })
            

    }
        render(){
        return(
            <div>
        <button 
        onClick={this.handleBitrateClick}
        className='bitrate'>
            bitrate
            
        </button>
        <button 
        onClick={this.handleResClick}
        className='resolution'>
                resolution
        </button>
        </div>
    )
}
}


export default YouTubeDebugger