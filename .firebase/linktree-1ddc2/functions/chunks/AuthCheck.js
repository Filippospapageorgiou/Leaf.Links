import { s as subscribe } from "./utils.js";
import { c as create_ssr_component } from "./ssr.js";
import { a as user } from "./firebase.js";
const AuthCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({}) : ``}` : `<p class="text-error my-10" data-svelte-h="svelte-fn73i1">You must be sighed in to see this page
        <a class="btn btn-primary" href="/login">Sign in</a></p>`}`;
});
export {
  AuthCheck as A
};
