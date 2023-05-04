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
    activeNode: {type: Object},
    skillsOpened: {type: Boolean},
    detailNode: {type: Boolean},
    details: {type: Array},
    detailsOpened: {type: Boolean},
    steps: { type:Array},
    date: {type: String},
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
      transform: skew(-10deg) translate(0, 50%);
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
    .styleSide{
      background-color: #808080;
     font-size: 16px;
     color: #ffb6c1;
     padding: 10px;
     min-width: 100%;
    border-radius: 5px
    }
    .date{
      font-size: 200px;
      color: black;
     text-align: center;
    }
    .date-svg {
    font-size: 100px;
    text-align: center;
  }
   path {
   fill: transparent;
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
    this.steps = ["Be an adorable cat", "like playing", "have fun"]; 
    this.verifUrl="https://pusheen.com/";
    this.activeNode = null;
    this.skillsOpened = false;
    this.detailNode = null;
    this.details = ["Warning: cute cat", "Ready to meow", "l"];
    this.detailsOpened = false ;
    this.date = this.retreiveDate();

  }



  render() {
    return html`
      <div class="circle ${this.isLocked ? 'locked' : ''}">
        ${this.isLocked ? html`<simple-icon accent-color="#666" icon="icons:lock"></simple-icon>` : ''}
        <div class="content">
        ${!this.isLocked ? html`
        <svg class="date-svg" viewBox="0 0 1000 800">
  <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
  <text width="900" font-size="150">
    <textPath xlink:href="#curve">
      ${this.date}
    </textPath>
  </text>
</svg>` : ''}
          <img class="pusheenImg" src="${this.pusheenImg}" alt="Pusheen Image">
          <div class="direction"> 
            <a href=${this.verifUrl}>
              <simple-icon accent-color="pink" icon="av:play-circle-filled"></simple-icon>
            </a>
            <badge-sticker id="badge">
              <simple-icon-button @click="${this.skillClick}">
                <simple-icon accent-color="lime" icon="tab"></simple-icon>
              </simple-icon-button>
            </badge-sticker>
            <absolute-position-behavior
              class="styleSide" 
              justify
              position="right"
              allow-overlap
              sticky
              auto
              .target="${this.activeNode}"
              ?hidden="${!this.skillsOpened}"
            >
              ${this.steps.map((step) => html`<li>${step}</li>`)}
            </absolute-position-behavior>
  
            <badge-sticker id="badgeDetail">
              <simple-icon-button @click="${this.detailsClick}">
                <simple-icon accent-color="orange" icon="icons:description"></simple-icon>
              </simple-icon-button>
            </badge-sticker>
            <absolute-position-behavior
              class="styleSide" 
              justify
              position="right"
              allow-overlap
              sticky
              auto
              .target="${this.detailNode}"
              ?hidden="${!this.detailsOpened}"
            >
              ${this.details.map((detail) => html`<li>${detail}</li>`)}
            </absolute-position-behavior>
            <div class="header">
            ${this.header}
          </div> 
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
    this.detailNode = this.shadowRoot.querySelector("#badgeDetail");
    this.date = this.retreiveDate();
  }
  
  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
  }

  detailsClick(e){
    this.detailsOpened = !this.detailsOpened;
  }

  retreiveDate (e){
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0');
     var yyyy = today.getFullYear();
     today = mm + '/' + dd + '/' + yyyy;
      return today.toString();
  }
  
   

 
}

customElements.define('merit-badges', MeritBadges);

