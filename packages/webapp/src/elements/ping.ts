import { adoptedStyle, connectStore, customElement, GemElement, html } from '@mantou/gem';
import { fpsStyle } from 'src/elements/fps';
import { pingStore } from 'src/netplay/client';

@customElement('sadsha-gamebox-ping')
@adoptedStyle(fpsStyle)
@connectStore(pingStore)
export class SadShaGameBoxPingElement extends GemElement {
  render = () => {
    if (!pingStore.ping) return html``;
    return html`Ping: ${pingStore.ping}ms`;
  };
}
