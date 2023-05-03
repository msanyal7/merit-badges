import { LitElement, html, css } from 'lit-element';

import "./merit-badges.js"

class BadgeSet extends LitElement {
	static properties = {
	}

	static styles = css`
  `;

	constructor() {
		super();
		this.badgeSet = [
			{
				header: "Badge Title",
				circle: "------------",
				lock: "",
				pusheenImg: "https://pusheen.com/wp-content/uploads/2021/07/EverGreen-Donut-Random-Button.svg",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			},
			{
				header: "Badge Title 2",
				circle: "------------",
				lock: "",
				pusheenImg: "https://pusheen.com/wp-content/uploads/2021/07/EverGreen-Donut-Random-Button.svg",
				badgeLabel: "Test Label",
				isLocked: true,
				steps: ["g", "k", "l"]
			},

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