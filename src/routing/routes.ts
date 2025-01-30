// Try to use [dynamic imports](https://router.vuejs.org/guide/advanced/lazy-loading.html#Lazy-Loading-Routes) as much as possible
const CheckList = () =>
  import("@features/checklist").then((module) => module.CheckList);

const routes = [
  { path: "/", name: "checklist", component: CheckList },
] as const;

export { routes };
