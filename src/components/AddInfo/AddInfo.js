import React from 'react';
import { Grid} from "@mui/material";
import './AddInfo.css'




function AddInfo(props) {
    return (<div  className={'Additional'} id={'features'}


    >
        <Grid item xs={12} className={'Text'} sx={{padding:0}}><h2>Additional app information</h2></Grid>
        <div className={'Box'}>
            <Grid item xs={6} className={'Image'}>


                <div className={'GroupSvg'}>
                    <span className={'background-image'}/>
                </div>
            </Grid>
            <Grid item xs={6} className={'List'}>
                <ul>
                    <li>
                        <span className={'number one'}><p>1</p></span>
                        <div>
                            <p>Licensed & Regulated</p>
                            <span>At vero eos et accusamus et iusto odio </span>
                        </div>
                    </li>
                    <li>
                        <span className={'number two'}><p>2</p></span>
                        <div>
                            <p>Multi-Asset CFD Provider</p>
                            <span>Stocks | FX | Commodities | Indices | Crypto</span>
                        </div>
                    </li>
                    <li>
                        <span className={'number three'}><p>3</p></span>
                        <div>
                            <p>Ultra-Low-Cost Trading</p>
                            <span>Spreads from 0.0 pips</span>
                        </div>
                    </li>
                    <li>
                        <span className={'number four'}><p>4</p></span>
                        <div>
                            <p>Auto-Trading Platform</p>
                            <span>Proven | Safe | Simple </span>
                        </div>
                    </li>
                </ul>

            </Grid>
        </div>
    </div>);
}

export default AddInfo;
