import { html } from 'lit';
import '../src/merit-badges.js';

export default {
  title: 'MeritBadges',
  component: 'merit-badges',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <merit-badges
      style="--merit-badges-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </merit-badges>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
