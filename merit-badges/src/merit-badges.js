import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MeritBadges extends LitElement {
  static properties = {
    header: { type: String },
    circle: {type: String},
    lock: {type: String},
    badgeLabel: {type: String}

  }

  static styles = css`
    .badgeLabel{
      font-size: 45px;
      font-color: green;
    .circle{}
  `;

  constructor() {
   this.header = "header";
   this.circle ="------------";
   this.lock = "";
   badgeLabel = "Test Label"
  }

  render() {
    return html`
      <div class= "badgeLabel"> 
        <div class = "circle"> 
      <simple-icon accent-color="white" icon="av:play-circle-filled"></simple-icon>
  </div>
      </div>
           
            
    `;
  }
}

customElements.define('merit-badges', MeritBadges);