import { availableLanguageTags } from "@locales/runtime";
// Try to use [dynamic imports](https://router.vuejs.org/guide/advanced/lazy-loading.html#Lazy-Loading-Routes) as much as possible
const HomeView = () => import("@features/home");
const CheckListView = () => import("@features/checklist");

const localesMatch = availableLanguageTags.join("|");

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    // TODO: set possible values for realm and step
    path: `/:locale(${localesMatch})/:realm/:step/checklist`,
    name: "checklist",
    component: CheckListView,
  },
  { path: "/:unknown(.+)", name: "404", redirect: "/" },
] as const;

export { routes };
