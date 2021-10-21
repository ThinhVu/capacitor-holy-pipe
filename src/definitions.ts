export interface HolyPipePluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
