import React, {useState} from 'react';
import './Overview.css'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Carousel from "../UI/Carousel/Carousel";



function Overview(props) {

    const [more, setMore] = useState(true)
    const [swap, setSwap] = useState(false)

    const LearnMore = () =>{
        console.log('11')
        setMore(!more)
        setSwap(!swap)
    }


    return (<div className={'Overview'} id={'screenshots'}>
            <div className={'Text'}>
                <h3>Overview</h3>
                <p className={`GroupText ${more ? 'show' : 'none'} `}>
                    <h4>Just describe your puzzle to get the 3D solution:</h4><br/>

                    - Pocket Cube and Mirror Cube 2x2 : this app can solve the cube in 14 moves or less !<br/>
                    - Rubik's Cube : solves the classic 3x3 cube with an average of 27 moves.- Skewb : solved in 11
                    moves maximum.<br/>
                    - Skewb Diamond : solved in 10 moves maximum.<br/>
                    - Pyraminx : solved in 11 moves disregarding the trivial rotation of the tips.<br/>
                    - Ivy Cube : solved in 8 moves maximum.<br/><br/>

                    Practice solving your puzzle as fast as possible with random shuffling and a timer with full
                    statistics (SpeedCubing).
                    Learn to solve the classic 3x3 step by step with the Fridrich method.
                    Create patterns on your 3x3 cube.<br/><br/>

                    This application needs internet access to get the solution.

                </p>

                <button className={`Button ${more ? 'More' : 'none'}`} onClick={() => LearnMore()}>
                    <p>Learn More</p>

                    <span className={`${swap ? 'Swap' : 'none'}`}><ExpandCircleDownOutlinedIcon/></span>

                </button>
            </div>
            <div className={'carousel'}>
                <Carousel/>
            </div>
        </div>
    );
}

export default Overview;
