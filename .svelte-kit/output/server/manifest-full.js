export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "JuanTarrat/_app",
	assets: new Set([".nojekyll","assets/particles.json","favicon.png","images/profile.jpg"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.Pg5RMNIg.js","app":"_app/immutable/entry/app.4fOML2a6.js","imports":["_app/immutable/entry/start.Pg5RMNIg.js","_app/immutable/chunks/entry.8KbHv0eL.js","_app/immutable/chunks/scheduler.2W_e9nlh.js","_app/immutable/entry/app.4fOML2a6.js","_app/immutable/chunks/scheduler.2W_e9nlh.js","_app/immutable/chunks/index.yhSMDPEx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
