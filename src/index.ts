import { registerPlugin } from '@capacitor/core';

import type { HolyPipePluginPlugin } from './definitions';

const HolyPipePlugin = registerPlugin<HolyPipePluginPlugin>('HolyPipePlugin', {
  web: () => import('./web').then(m => new m.HolyPipePluginWeb()),
});

export * from './definitions';
export { HolyPipePlugin };
