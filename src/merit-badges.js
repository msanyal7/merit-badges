import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MeritBadges extends LitElement {
  static properties = {
    header: { type: String },
    circle: { type: String },
    lock: { type: String },
    badgeLabel: { type: String },
    pusheenImg: { type: String },
    isLocked: { type: Boolean }
  }

  static styles = css`
    .badgeLabel{
      font-size: 40px;
      color: #00FF00;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .circle{
      width: 200px;
      height: 200px;
      background: red;
      border-radius: 50%;
      padding: 20px;
      margin: 10px;
      background: #ffff;
      color: #fff;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #aa3030;
      border-radius: 50%;
      box-shadow: 0 0 0 4px #ffff, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #aa3030;
      font-weight: normal;
      text-align: center;
      vertical-align: middle;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative; 
      pointer-events: auto;
    }
    .header{
      color: green; 
      margin-top: 10px; 
    }
    .pusheenImg {
      max-width: 100px;
      max-height: 100px;
    }
    .circle.locked {
      opacity: 0.5;
      pointer-events: none;
    }


  `;

  constructor() {
    super();
    this.header = "header";
    this.circle = "------------";
    this.lock = "";
    this.pusheenImg = "https://pusheen.com/wp-content/uploads/2021/07/EverGreen-Donut-Random-Button.svg";
    this.badgeLabel = "Test Label";
    this.isLocked = true; 
  }

  render() {
    return html`
      <div class="circle ${this.isLocked ? 'locked' : ''}">
        <img class="pusheenImg" src="${this.pusheenImg}" alt="Pusheen Image">
        <div class="header">${this.header}</div>
        <simple-icon accent-color="pink" icon="av:play-circle-filled"></simple-icon>
        <button @click="${this.toggleLock}">Toggle Lock</button> 
      </div>
    `;
  }
  toggleLock() {
    this.isLocked = !this.isLocked; 
  }
}

customElements.define('merit-badges', MeritBadges);
