import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.D0VeJeFp.js","_app/immutable/chunks/scheduler.BqWbeFoV.js","_app/immutable/chunks/index.DRmShFnm.js","_app/immutable/chunks/stores.BKZTAy-F.js","_app/immutable/chunks/entry.B_CN1Qma.js","_app/immutable/chunks/index.yQvOGfyo.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/firebase.CPclXUWJ.js"];
export const stylesheets = [];
export const fonts = [];
