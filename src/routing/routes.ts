import { availableLanguageTags } from "@locales/runtime";
// Try to use [dynamic imports](https://router.vuejs.org/guide/advanced/lazy-loading.html#Lazy-Loading-Routes) as much as possible
const HomeView = () => import("@features/home");
const FlowView = () => import("@features/flow");

const localesMatch = availableLanguageTags.join("|");

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    // TODO: set possible values for realm and step
    path: `/:locale(${localesMatch})/flows/:realm/:step/checklist`,
    name: "checklist",
    component: FlowView,
  },
  { path: "/:unknown(.+)", name: "404", redirect: "/" },
] as const;

export { routes };
