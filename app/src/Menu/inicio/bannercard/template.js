import React from 'react';
import './styles/App.css';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img8 from './img/img8.png';
import img7 from './img/img7.png';
import { Carde } from '../../../Menu/components/card';

export const Iniciobanner = () => {


 

return (

    <section id="geral">
    <div class="container">
     <section>
    
            <div class="widget_title">
                <div class="widget_title_text">Adoção de cães: como e onde adotar</div>
                <div class="widget_title_bar"> </div>
            </div>
            <div class="widget_body flex">
                <article>
        

                
                 
                    <Carde 
                    title="Você Pode Ser Essa Familia" 
                    texto="Os principais requisitos para adoção de cães em ONGs parceiras da Petz são acertar na escolha do tutor para evitar devolução ou fuga. Como dito, eles fazem uma entrevista que determina se consideram a pessoa adequada ou não. 
                     A questão de personalidade também conta, pois, por exemplo, se quiser adoção de cachorro para fazer companhia para um idoso, cães filhotes não são recomendados. Isso porque eles possuem muita energia e precisam de exercícios diários. O ideal para as ONGs é unir o cachorro à família ideal."
                     btn="Requisitos para adoção"
                     btn1="12 comentarios"
                     image={img3}
                    />
                  
              
            

                </article>

                <article>
                    <a href="">
                    <div class="new_data">
                    <div class="new_posted_at">6 pontos para considerar antes de adotar um cão</div>
                    <div class="new_comments">4 comentarios</div>
                    </div>
                    <div class="news_thumbnail">
                    <img src={img4} alt="Dog" />
                    </div>
                    <div class="new_title">
                        Novo filho
                    </div>
                    <div class="news_resume">Se o cãozinho estiver na feira, não quer dizer que ele não esteja precisando de atenção e carinho. Pelo contrário, é exatamente isso que ele está buscando ali. Portanto, antes de adotar um cachorro, pense sobre o tempo em que ele ficará sozinho em casa, qual a sua disposição para levá-lo para passear e se ele terá espaço para brincar e ficar livre.


                   </div>
                  </a>

                </article>


                <article>
                    <a href="">
                    <div class="new_data">
                    <div class="new_posted_at">Mantenha o coração aberto</div>
                    <div class="new_comments">0 comentarios</div>
                    </div>
                    <div class="news_thumbnail">
                    <img src={img7} alt="Dog!" />
                    </div>
                    <div class="new_title">
                        Lembre-se que cães adotados não estão livres de gastos
                    </div>
                    <div class="news_resume">Ali, na hora da adoção pet, a contribuição costuma ser simbólica. Ou seja, é usada apenas para repor os gastos da ONG com o resgate e manutenção dos animaizinhos.

                        Porém, ao levar o bichinho para casa, é preciso estar atento quanto aos cuidados fundamentais para mantê-los sempre saudáveis. E, portanto, alguns gastos com a alimentação, consultas ao médico-veterinário, medicamentos e banho e tosa, são inevitáveis.
                   </div>
                  </a>

                </article>


                <article>
                    <a href="">
                    <div class="new_data">
                    <div class="new_posted_at">0brigado</div>
                    </div>
                    <div class="news_thumbnail">
                    <img src={img8} alt="Girl And Dog!" />
                    </div>
                    <div class="new_title">
                        Tenha certeza de sua decisão
                    </div>
                    <div class="news_resume">Antes de escolher o bichinho, leve em consideração todas essas dicas e tenha 100% de certeza quanto a adquirir o cãozinho. Pode parecer estranho falar assim, mas, infelizmente, muitos tutores não avaliam bem os gastos e as necessidades que esses cãezinhos demandam e então acabam abandonando-os.
                     Para que isso não aconteça com você, pense bastante antes de se apegar ao cachorrinho e levá-lo para casa. E, caso ainda esteja em dúvida quanto ao processo de adaptação, algumas ONGs oferecem a opção de ser um tutor temporário.
                   </div>
                  </a>
                </article>
            </div>
     </section>
     <aside>
        
         <div class="widget">
             <div class="widget_title">
                 <div class="widget_title_text">Para Adoção!</div>
                 <div class="widget_title_bar"> </div>
             </div>
             <div class="widget_body">
             <div class="departmentscontent">
                    <div class="one" > <a href=""></a>      </div>
                    <div class="two">  <a href=""></a>      </div>
                    <div class="tree"> <a href=""></a>      </div>
                    <div class="four"> <a href=""></a>      </div>
                    <div class="five"> <a href=""></a>      </div>
                    <div class="six"> <a href=""></a>       </div>
             </div>
             </div>
         </div>
         <div class="widget">
            <div class="widget_title">
                <div class="widget_title_text"> Aonde Nos Encontrar? </div>
                <div class="widget_title_bar"> </div>
            </div>
            <div class="widget_body">
            <div class="text">
                Somos apaixonados por pets,Respeitamos uns aos outros,Reconhecemos esforços, premiamos resultados,Encantamos nossos clientes,Temos prazer em servir.</div>
            <div class="widget_title_bar1"> </div>
            <div class="phone"><img class="phone-img" src="https://img.icons8.com/ios/50/000000/apple-phone.png" width="16px"/> By Phone :<strong>47-8000-9855-356</strong></div>
            <div class="widget_title_bar1"> </div>
            <div class="email"><img class="email-img" src="https://img.icons8.com/material-outlined/24/000000/mail-contact.png" width="16px"/>  By Email :<strong>algumacoisa@hotmail.com</strong></div></div>
            <div class="widget_title_bar1"> </div>
            <div class="file"><img class="File-img" src="https://img.icons8.com/pastel-glyph/64/000000/file-arrow--v1.png" width="16px"/>  By File :<strong><a href="https://www.youtube.com/watch?v=oSTY_ITcDDk">Download</a></strong></div>
            <div class="widget_title_bar1"> </div>
            </div>
        </aside>
    </div>
</section>


);


}