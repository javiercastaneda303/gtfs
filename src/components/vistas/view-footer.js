import { LitElement, html, css } from 'lit-element';
//import "./whatsapp.jpg";
export class Footer extends LitElement {
    static get styles() {
        return css`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          p {
            font-family: Roboto;
            font-size: 3em;
            font-weight: 500;
            background-color: #1E500C;
            color: whitesmoke;
            text-align:center;
            padding-bottom: 30px;
          }
          @media (max-width: 615px) {
            .email {
              font-size: 1em;
            }
            p {
              font-size: 2em;
            }
          }
          @media (max-width: 400px) {
            .email {
              font-size: 0.5em;
              margin-bottom:200px;
            }
            p {
              font-size: 2em;
              margin-bottom:90px;
            }
          }
        `    ;
      }
  render() {
    return html`
    <p>
    <span class="email">hola@gtfs.es</span>
    <br>  
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" @click= ${this.go} name="whatsapp" >
    <img src="whatsapp.jpg" width="50px" height="50px">
    </a>
    650.718.774
    <br><br>
    Ya lo hemos logrado en El Hierro
    <br>
    quieres conseguirlo con tu equipo
    <br>
    ¡vamos a ello !!
    
    </p>
    <!--
    <img src="https://picsum.photos/200/300" alt="imager">
    -->
    <a href="http://www.diarioelhierro.es/t26496/ab02.asp?idweb=26496&idrg=164598" name="crecimiento" >    
    <img src="32-porciento.jpg" alt="">

    <br>
    <a href="http://www.diarioelhierro.es/t26496/ab02.asp?idweb=26496&idrg=165449" name="crecimiento" >
    
    <img src="30-2019.jpg" alt="">


    `;
  }
}
customElements.define('view-footer', Footer);