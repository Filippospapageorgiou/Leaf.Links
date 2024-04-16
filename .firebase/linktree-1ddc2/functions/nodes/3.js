

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CF0t-epG.js","_app/immutable/chunks/scheduler.BqWbeFoV.js","_app/immutable/chunks/index.DRmShFnm.js","_app/immutable/chunks/firebase.CPclXUWJ.js","_app/immutable/chunks/index.yQvOGfyo.js"];
export const stylesheets = [];
export const fonts = [];
