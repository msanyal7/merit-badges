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
				steps: ["g", "k", "l"]
			},
			{
				header: "Smart Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://i.pinimg.com/736x/0c/0b/2f/0c0b2fe0f0042cc3792ed5d860839f6c.jpg",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			},
			{
				header: "Beach Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://pusheen.com/wp-content/uploads/2021/07/EverGreen-Donut-Random-Button.svg",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			},
			{
				header: "Tired Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://pusheen.com/wp-content/uploads/2021/07/EverGreen-Donut-Random-Button.svg",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			},
			{
				header: "Developer Cat Badge",
				circle: "------------",
				lock: "",
				pusheenImg: "https://pusheen.com/wp-content/uploads/2021/07/EverGreen-Donut-Random-Button.svg",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			}


		]
	}

	render() {
		return html`
		${this.badgeSet.map((badge) => html`
			<merit-badges header="${badge.header}"></merit-badges>`
		)}
    	`;
	}
}

customElements.define('badge-set', BadgeSet);