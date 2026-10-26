"use client";
import {useEffect} from 'react';
export default function LegacyRoutes(){useEffect(()=>{const routes={'#work':'/projects/','#approach':'/approach/','#contact':'/contact/'};const redirect=()=>{const target=routes[window.location.hash];if(target)window.location.replace(target);};redirect();window.addEventListener('hashchange',redirect);return()=>window.removeEventListener('hashchange',redirect);},[]);return null;}
