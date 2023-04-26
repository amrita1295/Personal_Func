import React from 'react';
import PersonalHeader from '../Personal/Personal/PersonalHeader/PersonalHeader';
import Rishi from './../Personal/Personal/Rishi/Rishi';
import RishiSocial from './../Personal/Personal/RishiSocial/RishiSocial';
import Vision from './../Personal/Personal/Vision/Vision';
import MyBlogs from './../Personal/Personal/MyBlogs/MyBlogs';
import WorkWith from './../Personal/Personal/WorkWith/WorkWith';
import Believer from '../Personal/Personal/Believer/Believer';


const Home = () => {
    return (
        <div>
            <PersonalHeader></PersonalHeader>
            <Rishi></Rishi>
            <RishiSocial></RishiSocial>
            {/* <Vision></Vision> */}
            <MyBlogs></MyBlogs>
            <WorkWith></WorkWith>
            <Believer></Believer>
        </div>
    );
};

export default Home;