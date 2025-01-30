// Try to use [dynamic imports](https://router.vuejs.org/guide/advanced/lazy-loading.html#Lazy-Loading-Routes) as much as possible
const HomeView = () => import("@features/home");
const CheckList = () => import("@features/checklist");

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/checklist", name: "checklist", component: CheckList },
] as const;

export { routes };
