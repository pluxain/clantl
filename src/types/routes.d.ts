// @see https://router.vuejs.org/guide/advanced/typed-routes.html
import type { Realm, Step } from "@types";
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
    "/:locale/flows/:realm/:step/checklist",
    { locale: "en" | "fr"; realm: Realm; step: Step },
    { locale: "en" | "fr"; realm: Realm; step: Step }
  >;
}

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: ClantlRouteNamedMap;
  }
}
