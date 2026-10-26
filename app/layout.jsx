import localFont from 'next/font/local';
import './globals.scss';
const font=localFont({src:'./fonts/Manrope.woff2',display:'swap',variable:'--font-body',weight:'200 800'});
const origin='https://adil-interface-portfolio-1026.brightsmile128.chatgpt.site';
export const metadata={metadataBase:new URL(origin),title:'AdilSatuv — интерфейсы в действии',description:'Четыре учебных проекта на Next.js: живые демо, короткие записи сценариев и инженерные кейсы. FORMA, SIGNAL, EMBER и VOLT.',alternates:{canonical:'/'},openGraph:{type:'website',locale:'ru_RU',title:'AdilSatuv — интерфейсы в действии',description:'Дизайн, который можно потрогать. Логика, которую можно проверить.',url:origin,images:[{url:'/og.png',width:1200,height:630,alt:'AdilSatuv — портфолио четырёх интерфейсов'}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export default function RootLayout({children}){return <html lang="ru" className={font.variable}><body>{children}</body></html>}
