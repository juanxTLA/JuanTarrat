

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.X4oVkv8-.js","_app/immutable/chunks/scheduler.2W_e9nlh.js","_app/immutable/chunks/index.yhSMDPEx.js","_app/immutable/chunks/entry.yc5DyfIc.js"];
export const stylesheets = [];
export const fonts = [];
