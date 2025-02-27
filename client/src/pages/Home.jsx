import { useInView } from 'react-intersection-observer';

import "../styles/Home.css";

export default function Home() {
    const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <>
            <h1 ref={inViewRef} className={`herosection-h1 fade-in ${inView ? 'visible' : ''}`}>
                Des créations sur mesure
            </h1>
            <h2 className={`herosection-h2 fade-in ${inView ? 'visible' : ''}`}>
                Retrouvez nos oeuvres originales pour apporter une touche unique et
                authentique à votre intérieur
            </h2>
        </>
    );
}
