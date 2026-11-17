import { customElement } from '@mantou/gem';
import { DuoyunTooltipElement } from 'duoyun-ui/elements/tooltip';
import { theme } from 'src/theme';

@customElement('sadsha-gamebox-tooltip')
export class SadShaGameBoxTooltipElement extends DuoyunTooltipElement {
  ghostStyle = {
    '--bg': theme.backgroundColor,
    '--color': theme.highlightColor,
    'max-width': '15em',
  };
}
