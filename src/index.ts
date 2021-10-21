import { registerPlugin } from '@capacitor/core';

import type { HolyPipePlugin } from './definitions';

const HolyPipe = registerPlugin<HolyPipePlugin>('HolyPipe', {
  web: () => import('./web').then(m => new m.HolyPipePluginWeb()),
});

export * from './definitions';
export { HolyPipe };
