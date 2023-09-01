import React from 'react';
import {Grid} from "@mui/material";
import './NewProduct.css'

function NewProduct(props) {
    return (
        <div className={'NewProduct'} id={'about_us'}>
            <Grid item xs={12} className={'Text'}><h2>What is new in our product</h2></Grid>

            <div className={'Video'}>
                <span>
                    <span className={'Play'}/>

                </span>
            </div>
        </div>
    );
}

export default NewProduct;
