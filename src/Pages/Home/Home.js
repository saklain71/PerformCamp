import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomerReview from '../CustomerReview/CustomerReview'
import Companies from './Companies/Companies';
import FeaturesCard from './FeaturesCard/FeaturesCard';
import FirstBanner from './FirstBanner/FirstBanner';
import FourthBanner from './FourthBanner/FourthBanner';
import HappyClient from './HappyCompanies/HappyCompanies';

import SecondBanner from './SecondBanner/SecondBanner';
import SetGoals from './SetGoals/SetGoals';
import ThirdBanner from './ThirdBanner/ThirdBanner';

const Home = () => {
    const [user] = useAuthState(auth);
    console.log("for home", user);
    return (
        <div>
            
            <FirstBanner></FirstBanner>
            <Companies></Companies>
            <SecondBanner></SecondBanner>
            <ThirdBanner></ThirdBanner>
            <SetGoals></SetGoals>
            <FeaturesCard></FeaturesCard>
            
            <HappyClient></HappyClient>
            <CustomerReview></CustomerReview>
            <FourthBanner></FourthBanner>
        </div>
    );
};

export default Home;