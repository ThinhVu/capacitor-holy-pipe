export interface HolyPipePlugin {
  /**
   * ...
   * @param options {}
   */
  echo(options: { action: string, params: any[] }): Promise<{ value: any }>;
}
