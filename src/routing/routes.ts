import { realms, steps } from "#constants";
import { availableLanguageTags } from "#locales/runtime";
// Try to use [dynamic imports](https://router.vuejs.org/guide/advanced/lazy-loading.html#Lazy-Loading-Routes) as much as possible
const HomeView = () => import("#features/home");
const FlowView = () => import("#features/flow");

const localesMatch = availableLanguageTags.join("|");
const realmsMatch = realms.join("|");
const stepsMatch = steps.join("|");

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: `/:locale(${localesMatch})/flows/:realm(${realmsMatch})/:step(${stepsMatch})/checklist`,
    name: "checklist",
    component: FlowView,
  },
  { path: "/:unknown(.+)", name: "404", redirect: "/" },
] as const;

export { routes };
