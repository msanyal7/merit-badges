import { LitElement, html, css } from 'lit-element';

import "./merit-badges.js"

class BadgeSet extends LitElement {
	static properties = {
	}

	static styles = css`
	
	:host{
		display: flex;
	}
  `;

	constructor() {
		super();
		this.badgeSet = [
			{
				header: "Donut Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://pusheen.com/wp-content/uploads/2021/07/EverGreen-Donut-Random-Button.svg",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"],
				details: ["trial", "one"]
			},
			{
				header: "Smart Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://cdn.custom-cursor.com/packs/3036/pusheen-with-book-cursor-pack.png",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			},
			{
				header: "Beach Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://www.scribblefun.com/wp-content/uploads/2018/02/Pusheen-Coloring-Images.png",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			},
			{
				header: "Tired Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://i.pinimg.com/474x/e3/90/7e/e3907e323f58bb163a3b093e6b8c8bb2--kawaii-cat-kawaii-pusheen.jpg",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			},
			{
				header: "Developer Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://cdn.shopify.com/s/files/1/1240/0898/files/step2_img.png?v=1620248424",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			}


		]
	}

	render() {
		return html`
		${this.badgeSet.map((badge) => html`
			<merit-badges header="${badge.header}"
			pusheenImg="${badge.pusheenImg}"

            > 
			</merit-badges>`,
			
		)}
    	`;
	}
}

customElements.define('badge-set', BadgeSet);