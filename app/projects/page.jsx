import SiteShell from '../../components/SiteShell';
import Work from '../../components/Work';
import s from '../page.module.scss';
export const metadata={title:'Проекты — AdilSatuv',description:'Каталог четырёх проектов: VOLT, FORMA, EMBER и SIGNAL. Видео, живые демо и отдельные страницы с инженерными решениями.',alternates:{canonical:'/projects/'},openGraph:{title:'Проекты — AdilSatuv',url:'/projects/',type:'website',locale:'ru_RU',images:[{url:'/og.png',width:1200,height:630,alt:'AdilSatuv — многостраничное портфолио'}]}};
export default function Projects(){return <SiteShell active="projects" file="projects"><header className={s.pageHeader}><p className={s.eyebrow}>PROJECT DIRECTORY / 04</p><h1>Выбери проект.<br/><span>Посмотри, как он работает.</span></h1><p className={s.lead}>В обозревателе — короткое видео и основные ссылки. У каждой работы есть собственная страница с задачей, архитектурой и ограничениями.</p></header><Work/></SiteShell>}
