"use client";
import { useState } from 'react';
import { LazyMotion, useReducedMotion } from 'framer-motion';
import * as m from 'framer-motion/m';
import { ArrowUpRight,ChevronLeft,ChevronRight,FolderOpen,FileCode2,Lock,MonitorPlay } from 'lucide-react';
import { projects } from '../content/projects';
import VideoPreview from './VideoPreview';
import s from './Work.module.scss';
const features=()=>import('./motion-features').then(module=>module.default);
export default function Work(){
 const [filter,setFilter]=useState('Все');
 const [selected,setSelected]=useState('volt');
 const reduce=useReducedMotion();
 const visible=projects.filter(project=>filter==='Все'||project.type===filter);
 const active=visible.find(project=>project.id===selected)||visible[0];
 const index=visible.findIndex(project=>project.id===active.id);
 function move(direction){setSelected(visible[(index+direction+visible.length)%visible.length].id);}
 return <LazyMotion features={features} strict><section id="work" className={s.work} aria-labelledby="work-title">
  <header className={s.sectionHead}><h2 id="work-title"><FolderOpen size={17}/> project.explorer</h2><span>01 / ВЫБРАННЫЕ РАБОТЫ</span></header>
  <div className={s.filterBar}><div className={s.filter} role="group" aria-label="Тип проекта">{['Все','Продукт','Пространство','Событие'].map(type=><button key={type} aria-pressed={filter===type} onClick={()=>setFilter(type)}>{type}{type==='Все'?' / 04':''}</button>)}</div><p className={s.count} aria-live="polite">Проектов: {visible.length}</p></div>
  <div className={s.workspace}><div className={s.projectList} aria-label="Список проектов">{visible.map(project=><article key={project.id} className={s.project} data-selected={active.id===project.id} style={{'--project-color':project.color}}><button className={s.select} aria-pressed={active.id===project.id} onClick={()=>setSelected(project.id)}><span className={s.srOnly}>Открыть проект </span><span className={s.projectIcon} aria-hidden="true">{project.name.slice(0,1)}</span><span className={s.projectName}><strong>{project.name}</strong><small>{project.type} / {project.number}</small></span><ChevronRight size={14}/></button><div className={s.rowLinks}><a href={project.site+'/'} target="_blank" rel="noreferrer" aria-label={`Демо ${project.name}`}>Демо <ArrowUpRight size={11}/></a><a href={`/projects/${project.id}/`} aria-label={`Кейс ${project.name}`}>Кейс <ArrowUpRight size={11}/></a></div></article>)}<div className={s.listNote}><FileCode2 size={17}/><p>Выбери папку.<br/>Внутри — работающий сценарий.</p></div></div>
  <div className={s.inspector} role="region" aria-label="Выбранный проект"><div className={s.windowBar}><span><MonitorPlay size={14}/>{active.id}.preview</span><div><span>{String(index+1).padStart(2,'0')} / {String(visible.length).padStart(2,'0')}</span><button type="button" onClick={()=>move(-1)} disabled={visible.length<2} aria-label="Предыдущий проект"><ChevronLeft size={16}/></button><button type="button" onClick={()=>move(1)} disabled={visible.length<2} aria-label="Следующий проект"><ChevronRight size={16}/></button></div></div>
   <m.div key={active.id} initial={{opacity:1,y:reduce?0:7}} animate={{y:0}} transition={{duration:reduce?0:.28}}><div className={s.screen}><VideoPreview project={active}/></div><div className={s.projectDetails}><div className={s.detailHeading}><div><p>{active.name} / {active.type}</p><h3 aria-live="polite">{active.headline}</h3></div><a className={s.launch} href={active.site+'/'} target="_blank" rel="noreferrer">Запустить проект <ArrowUpRight size={16}/></a></div><p className={s.description}>{active.description}</p><div className={s.tags}>{active.tags.map(tag=><span key={tag}>{tag}</span>)}</div><details className={s.scenario}><summary>Что попробовать в демо</summary><p>{active.detail}</p></details><div className={s.detailFooter}><a href={`/projects/${active.id}/`}>Страница проекта <ArrowUpRight size={14}/></a>{active.private?<span><Lock size={12}/> Код: закрытый репозиторий</span>:<a href={active.repo} target="_blank" rel="noreferrer">Исходный код <ArrowUpRight size={14}/></a>}<span>CONCEPT / 2026</span></div></div></m.div>
  </div></div><footer className={s.workFooter}><span><span/> WORKSPACE / 4 STUDIES</span><p>Видео без звука. Загрузка начинается только после нажатия кнопки.</p></footer>
 </section></LazyMotion>;
}
