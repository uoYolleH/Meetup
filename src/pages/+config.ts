import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

export default {
    title: "You Site",
    description: "A site about all the main You characters",
    extends: [vikeReact],
    prerender: true,
} satisfies Config;
