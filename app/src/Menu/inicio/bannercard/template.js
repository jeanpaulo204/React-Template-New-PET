import React from 'react';
import './styles/App.css';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img8 from './img/img8.png';
import img7 from './img/img7.png';
import { Newcard } from '../../../Menu/components/card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export const Iniciobanner = () => {


 

return (

   
    
<section>

<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={3}>
  <Grid xl={6} sm={12} md={6}  >
  <Newcard  
    title="Você Pode Ser Essa Familia" 
    texto="Os principais requisitos para adoção de cães em ONGs parceiras da Petz são acertar na escolha do tutor para evitar devolução ou fuga. Como dito, eles fazem uma entrevista que determina se consideram a pessoa adequada ou não. 
     A questão de personalidade também conta, pois, por exemplo, se quiser adoção de cachorro para fazer companhia para um idoso, cães filhotes não são recomendados. Isso porque eles possuem muita energia e precisam de exercícios diários. O ideal para as ONGs é unir o cachorro à família ideal."
     btn="Requisitos para adoção"
     comentario="12 comentarios"
     image={img3}
    />
  </Grid>
  <Grid xl={6} sm={12} md={6}  >
  <Newcard 
    title="Novo filho" 
    texto="Se o cãozinho estiver na feira, não quer dizer que ele não esteja precisando de atenção e carinho. Pelo contrário, é exatamente isso que ele está buscando ali. Portanto, antes de adotar um cachorro, pense sobre o tempo em que ele ficará sozinho em casa, qual a sua disposição para levá-lo para passear e se ele terá espaço para brincar e ficar livre."
    btn="6 pontos para adotar um cão"
    comentario="4 comentarios"
    image={img4}
   />
  </Grid>
  <Grid xl={6} sm={12} md={6}  >
  <Newcard 
    title="Lembre-se que cães adotados não estão livres de gastos" 
    texto="Ali, na hora da adoção pet, a contribuição costuma ser simbólica. Ou seja, é usada apenas para repor os gastos da ONG com o resgate e manutenção dos animaizinhos.
    Porém, ao levar o bichinho para casa, é preciso estar atento quanto aos cuidados fundamentais para mantê-los sempre saudáveis. E, portanto, alguns gastos com a alimentação, consultas ao médico-veterinário, medicamentos e banho e tosa, são inevitáveis."
    btn="Mantenha o coração aberto"
    comentario="3 comentarios"
    image={img7}
   />
   
  </Grid>
  <Grid xl={6} sm={12} md={6}  >

    <Newcard 
    title="Tenha certeza de sua decisão" 
    texto="Antes de escolher o bichinho, leve em consideração todas essas dicas e tenha 100% de certeza quanto a adquirir o cãozinho. Pode parecer estranho falar assim, mas, infelizmente, muitos tutores não avaliam bem os gastos e as necessidades que esses cãezinhos demandam e então acabam abandonando-os.
    Para que isso não aconteça com você, pense bastante antes de se apegar ao cachorrinho e levá-lo para casa. E, caso ainda esteja em dúvida quanto ao processo de adaptação, algumas ONGs oferecem a opção de ser um tutor temporário."
    btn="0brigado"
    comentario="36 comentarios"
    image={img8}
    />
    </Grid>
</Grid>
</Box>
</section>


    

);


}