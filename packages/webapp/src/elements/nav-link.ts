import { connectStore, customElement, effect, state } from '@mantou/gem';
import { DuoyunActiveLinkElement } from 'duoyun-ui/elements/link';
import { locationStore } from 'src/routes';

@customElement('sadsha-gamebox-nav-link')
@connectStore(locationStore)
export class SadShaGameBoxNavLinkElement extends DuoyunActiveLinkElement {
  @state match: boolean;

  @effect(() => [locationStore.path])
  #update = () => (this.match = this.active);
}
