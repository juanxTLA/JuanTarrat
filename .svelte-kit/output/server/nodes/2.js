

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.A682Hsxn.js","_app/immutable/chunks/scheduler.2W_e9nlh.js","_app/immutable/chunks/index.yhSMDPEx.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = [];
export const fonts = [];
