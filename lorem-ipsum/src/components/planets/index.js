import React, {Fragment} from 'react';
import Planet from './planet';

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <Planet name="Mercúrio"
                    description="Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods."
                    img_url="https://s2.glbimg.com/p6TZE5PneQrqLvhM1CYiPD_WtbE=/0x0:600x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2018/s/W/x0TdoTSdi4acq8NWejug/mercurio.jpg"
            />

            <Planet name="Plutão"
                    description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno. "
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
            />
                
        </Fragment>
    )
}

export default Planets;