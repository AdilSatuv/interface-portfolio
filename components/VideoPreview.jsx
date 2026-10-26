"use client";
import {useEffect,useRef,useState} from 'react';
import {Play} from 'lucide-react';
import s from './VideoPreview.module.scss';
export default function VideoPreview({project}){
 const [active,setActive]=useState(false),[notice,setNotice]=useState('');const video=useRef(null);
 useEffect(()=>{if(active)video.current?.play().catch(()=>setNotice('Видео готово. Нажми Play в плеере.'));},[active]);
 if(project.video===false)return <div className={s.preview}><img src={`/demos/${project.id}-poster.webp`} alt={`Иллюстрация концепта ${project.name}`} width="1280" height="800" style={{width:'100%',display:'block'}}/><a className={s.play} href={project.site+'/#object'} target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span><b>Открыть 3D-демо ORBIT</b></a></div>;
 return <div className={s.preview}><video ref={video} controls={active} aria-hidden={!active} playsInline preload="none" src={active?`/demos/${project.id}.webm`:undefined} poster={`/demos/${project.id}-poster.webp`} aria-label={`Запись взаимодействия ${project.name}, без звука`}>{active&&<track kind="captions" src={`/demos/${project.id}.vtt`} srcLang="ru" label="Описание сценария"/>}Ваш браузер не поддерживает видео. Откройте демо по ссылке ниже.</video>{!active&&<button type="button" className={s.play} aria-label={`Смотреть сценарий ${project.name}`} onClick={()=>setActive(true)}><span><Play size={23} fill="currentColor"/></span><b>Смотреть сценарий</b></button>}{notice&&<p role="status" className={s.notice}>{notice}</p>}</div>;
}
