import { Mastra } from "@mastra/core/mastra";
import { weatherAgent } from "./agents/weather-agent";

export const mastra = new Mastra({
  bundler: {
    transpilePackages: ["example-lib"],
  },
  agents: { weatherAgent },
});
