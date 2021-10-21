import { WebPlugin } from '@capacitor/core';

import type { HolyPipePlugin } from './definitions';

export class HolyPipePluginWeb
  extends WebPlugin
  implements HolyPipePlugin {
  async echo(options: { action: string, params: [any] }): Promise<{ value: any }> {
    return { value: options };
  }
}
