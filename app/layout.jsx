import localFont from 'next/font/local';
import './globals.scss';
const font=localFont({src:'./fonts/Manrope.woff2',display:'swap',variable:'--font-body',weight:'200 800'});
const origin='https://adil-interface-portfolio.pages.dev';
export const metadata={metadataBase:new URL(origin),title:'AdilSatuv — интерфейсы в действии',description:'Многостраничное портфолио AdilSatuv: проекты, инженерные решения, подход к разработке и контакты.',alternates:{canonical:'/'},openGraph:{type:'website',locale:'ru_RU',title:'AdilSatuv — интерфейсы в действии',description:'Дизайн, который можно потрогать. Логика, которую можно проверить.',url:origin,images:[{url:'/og.png',width:1200,height:630,alt:'AdilSatuv — многостраничное портфолио'}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export const viewport={themeColor:'#ffffff',colorScheme:'light'};
export default function RootLayout({children}){return <html lang="ru" className={font.variable}><body>{children}</body></html>}
