import React, { Component } from 'react'
import Slider from '../elements/slider/slider1';
import Footer1 from '../layout/footer/footer1'
import Header1 from '../layout/header/header1'

export class index extends Component {
    render() {
        return (
            <>
                <Header1 />
                <div className="page-content bg-white">
                    <Slider />
                </div>
                <Footer1 />
            </>
        )
    }
}

export default index
