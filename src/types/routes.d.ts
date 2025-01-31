// @see https://router.vuejs.org/guide/advanced/typed-routes.html
import type { RouteRecordInfo } from "vue-router";

// declare only named routes
export interface ClantlRouteNamedMap {
  // each key is a name
  home: RouteRecordInfo<
    // here we have the same name
    "home",
    // this is the path, it will appear in autocompletion
    "/",
    // these are the raw params. In this case, there are no params allowed
    Record<never, never>,
    // these are the normalized params
    Record<never, never>
  >;
  checklist: RouteRecordInfo<
    "checklist",
    "/:locale/checklist",
    { locale: "en" | "fr" },
    { locale: "en" | "fr" }
  >;
}

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: ClantlRouteNamedMap;
  }
}
