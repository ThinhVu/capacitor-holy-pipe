import { WebPlugin } from '@capacitor/core';

import type { HolyPipePluginPlugin } from './definitions';

export class HolyPipePluginWeb
  extends WebPlugin
  implements HolyPipePluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
