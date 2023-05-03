import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MeritBadges extends LitElement {
  static properties = {
    header: { type: String },
    circle: { type: String },
    lock: { type: String },
    badgeLabel: { type: String },
    pusheenImg: { type: String },
    isLocked: { type: Boolean },
    steps: { type:Array},
    verifUrl: {type:String}
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
      width: 400px;
      height: 400px;
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
      opacity: 0.2;
      pointer-events: none;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  .simple-icon {
    flex-direction: row;
    display: inline-block;
     margin: 5px;
    } 
    .direction{
      flex-direction: row;
    } 
  `;

  constructor() {
    super();
    this.header = "Badge Title";
    this.circle = "------------";
    this.lock = "";
    this.pusheenImg = "https://pusheen.com/wp-content/uploads/2021/07/EverGreen-Donut-Random-Button.svg";
    this.badgeLabel = "Test Label";
    this.isLocked = true; 
    this.steps = ["g", "k", "l"]; 
    this.verifUrl="https://pusheen.com/";
  }

  render() {
    return html`
      <div class="circle ${this.isLocked ? 'locked' : ''}">
        ${this.isLocked ? html`<simple-icon accent-color="#666" icon="icons:lock"></simple-icon>` : ''}
        <div class="content">
          <img class="pusheenImg" src="${this.pusheenImg}" alt="Pusheen Image">
          <div class="header">${this.header}</div>
          <div class="header">
            <ul>
              ${this.steps.map((step) => html`<li>${step}</li>`)}
            </ul>
          </div> 
         <div class = "direction"> 

         <a href=${this.verifUrl}>
            <simple-icon accent-color="pink" icon="av:play-circle-filled"></simple-icon>
          </a>

          
<badge-sticker id="badge">
  <simple-icon-button
      icon=<simple-icon accent-color="lime" icon="tab"> </simple-icon>
      @click="${this.skillClick}"
  </simple-icon-button>
</badge-sticker>

<absolute-position-behavior
            justify
            position="bottom"
            allow-overlap
            sticky
            auto
            .target="${this.activeNode}"
            ?hidden="${!this.skillsOpened}"
          >
          ${this.steps.map((step) => html`<li>${step}</li>`)}
</absolute-position-behavior>
          
          </div>
        </div>  
      </div>
      
    `;
  }

  toggleLock() {
    this.isLocked = !this.isLocked; 
    console.log(this.isLocked);
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector("#badge");
  }
  
  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
  }
  
   

 
}

customElements.define('merit-badges', MeritBadges);

