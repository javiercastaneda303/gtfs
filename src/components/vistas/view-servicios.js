import { LitElement, html, css} from 'lit-element';

export class Servicios extends LitElement {
  static get styles() {
    return css`
      .center{
        text-align: center;
        border:solid blueviolet 5px;
        /* border-radius:5% 25%; */
        /* margin: 5px; */
      }
      p {
        text-align: center;
      }
    `    ;
  }
    
  render() {
    return html`    
    <br><br><br><br>
    <div class="center">
    <p >Inserción en Google Maps y Bing Maps</p>
    <p >¡ 100% correcto !</p>
      <iframe width="90%" height="500px" src="https://www.youtube.com/embed/Yb4q_3MvfQc" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; rel=0; hl=es; cc_lang_pref=es; cc_load_policy=1" allowfullscreen></iframe>
    </div>       
    <div class="center">
    <p >APP Jefes de Tráfico</p> 
      <iframe width="90%" height="500px" src="https://www.youtube.com/embed/jt-_Q8tHr8U" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; rel=0; hl=es; cc_lang_pref=es; cc_load_policy=1" allowfullscreen></iframe>
    </div>
    <div class="center">
    <p >Reestructuración de Horarios</p>
      <iframe width="90%" height="500px" src="https://www.youtube.com/embed/WEPhp4FZV7M" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; rel=0; hl=es; cc_lang_pref=es; cc_load_policy=1" allowfullscreen></iframe>
    </div>
    `;
  }
}
customElements.define('view-servicios', Servicios);