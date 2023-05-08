import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import MyStory from './../Components/Personal/Personal/MyStory/MyStory';
import MyProjects from "../Components/Personal/Personal/MyProjects/MyProjects";
import PublicSpeaking from "../Components/Personal/Personal/PublicSpeaking/PublicSpeaking";
import Blog from './../Components/Personal/Personal/Blog/Blog';
import WhatDoesFitnessMean from './../Components/Personal/Personal/Blog/ArticleHeader/WhatDoesFitnessMean';
import PhysicalFitness from "../Components/Personal/Personal/Blog/BlogComponents/PhysicalFitness";
import SuperFood from "../Components/Personal/Personal/Blog/BlogComponents/SuperFood";
import NutritionForInjury from "../Components/Personal/Personal/Blog/BlogComponents/NutritionForInjury";
import InnovationEntrepreneurship from "../Components/Personal/Personal/Blog/BlogComponents/InnovationEntrepreneurship";
import GentleParenting from "../Components/Personal/Personal/Blog/BlogComponents/GentleParenting";
import FuntionalHealth from "../Components/Personal/Personal/Blog/BlogComponents/FuntionalHealth";
import Contact from "../Components/Contact/Contact";
import Privacy from "../Components/Personal/Personal/Privacy/Privacy";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Media from "../Components/Personal/Personal/Media/Media/Media";
import Events from "../Components/Personal/Personal/Events/Events";
import RaiseOnAthlete from "../Components/Personal/Personal/Media/AllMedia's/RaiseOnAthlete/RaiseOnAthlete";
import MyopiaAwareness from "../Components/Personal/Personal/Media/AllMedia's/MyopiaAwareness/MyopiaAwareness";
import EyeHealthSeminar from "../Components/Personal/Personal/Media/AllMedia's/EyeHealthSeminar/EyeHealthSeminar";
import ReducingTheRiskOfInjury from "../Components/Personal/Personal/Media/AllMedia's/ReducingTheRiskOfInjury/ReducingTheRiskOfInjury";
import GymnasticsInIndia from "../Components/Personal/Personal/Media/AllMedia's/GymnasticsInIndia/GymnasticsInIndia";





const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: "/myStory",
        element: <MyStory></MyStory>,
      },
      {
        path: "/myProjects",
        element: <MyProjects></MyProjects>,
      },
      {
        path: "/publicSpeaking",
        element: <PublicSpeaking></PublicSpeaking>,
      },
      {
        path: "/myBlogs",
        element: <Blog></Blog>,
      },
      {
        path: '/what-does-fitness-mean',
        element: <WhatDoesFitnessMean></WhatDoesFitnessMean>,
      },
      {
        path: '/physicalFitness',
        element: <PhysicalFitness></PhysicalFitness>,
      },
      {
        path: '/superFood',
        element: <SuperFood></SuperFood>,
      },
      {
        path: '/nutritionInjury',
        element: <NutritionForInjury></NutritionForInjury>,
      },
      {
        path: '/innovationEntrepreneurship',
        element: <InnovationEntrepreneurship></InnovationEntrepreneurship>,
      },
      {
        path: '/gentleParenting',
        element: <GentleParenting></GentleParenting>,
      },
      {
        path: '/functionalHealth',
        element: <FuntionalHealth></FuntionalHealth>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/privacy',
        element: <Privacy></Privacy>,
      },
      {
        path: '/media',
        element: <Media></Media>,
      },
      {
        path: '/events',
        element: <Events></Events>,
      },


      //all the media's components

      {
        path: '/raiseOnAthlete',
        element: <RaiseOnAthlete></RaiseOnAthlete>,
      },
      {
        path: '/myopiaAwareness',
        element: <MyopiaAwareness></MyopiaAwareness>,
      },
      {
        path: '/eyeHealthSeminar',
        element: <EyeHealthSeminar></EyeHealthSeminar>,
      },
      {
        path: '/reducingTheRiskOfInjury',
        element: <ReducingTheRiskOfInjury></ReducingTheRiskOfInjury>,
      },
      {
        path: '/gymnasticsInIndia',
        element: <GymnasticsInIndia></GymnasticsInIndia>,
      },
    ]
  },
]);

export default router;