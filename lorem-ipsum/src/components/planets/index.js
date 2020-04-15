import React, {Fragment} from 'react';
import Planet from './planet';

const clickOnPlanet = (name) => {
    console.log(`Um clique no planeta: ${name}`);
}

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <Planet name="Mercúrio"
                    img_url="https://s2.glbimg.com/p6TZE5PneQrqLvhM1CYiPD_WtbE=/0x0:600x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2018/s/W/x0TdoTSdi4acq8NWejug/mercurio.jpg"
                    texto="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
                    link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    title_with_underline={true}
                    gray={true}
            />

            <Planet name="Júpiter"
                    img_url="https://s2.glbimg.com/p6TZE5PneQrqLvhM1CYiPD_WtbE=/0x0:600x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2018/s/W/x0TdoTSdi4acq8NWejug/mercurio.jpg"
                    texto="Júpiter é  o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[11] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno."
                    
            />
                
        </Fragment>
    )
}

export default Planets;