import { LitElement, html,css} from 'lit-element';

export class Presentacion extends LitElement {
    
  static get styles() {
    return css`
      .center{
        text-align: center;
        border:solid blueviolet 5px; 
      }      
      p {
        text-align: center;
      }
    `    ;
  }
  render() {
    return html`
    <p >Presentación</p> 
    <div class="center">
      <!--
      <iframe width="700px" height="500px" src="https://www.youtube.com/embed/euFaPByqCnY?start=0" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
      -->
      <iframe width="90%" height="500px" src="https://www.youtube-nocookie.com/embed/B4CdBbKvly0" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; rel=0; hl=es; cc_lang_pref=es; cc_load_policy=1" allowfullscreen></iframe>      
    </div>
    `;
  }
}
customElements.define('view-presentacion', Presentacion);