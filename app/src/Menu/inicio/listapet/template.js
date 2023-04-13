
import * as React from 'react';
import '../listapet/styles/App.css';
import Typography from '@mui/material/Typography';
import Icon from '@mdi/react';
import { mdiDogService } from '@mdi/js';
import { mdiFoodHotDog } from '@mdi/js';
import { mdiCat} from '@mdi/js';
import { mdiBellSleep} from '@mdi/js';
import { mdiPaw} from '@mdi/js';
import { mdiGasStation} from '@mdi/js';

export const Iniciolistapet = () => {
  return (




<section className="skills">
<br/><br/>
        <Typography gutterBottom variant="h3" className="target" id="skills" component="div">
         Lista Parceiros!
        </Typography> 
        <div class="cards-skills">
            <div class="card-skill"><Icon path={mdiDogService} size={7} /></div>
            <div class="card-skill"><Icon path={mdiFoodHotDog} size={7} /></div>
            <div class="card-skill"><Icon path={mdiBellSleep} size={7} /></div>
            <div class="card-skill"><Icon path={mdiPaw} size={7} /></div>
            <div class="card-skill"><Icon path={mdiCat} size={7} /></div>
            <div class="card-skill"><Icon path={mdiGasStation} size={7} /></div>
        </div>
    </section>

  );
};

export default Iniciolistapet;
