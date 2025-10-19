import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use the new config key (not experimental.serverComponentsExternalPackages)
  serverExternalPackages: ["@prisma/client", "bcryptjs"],
};

export default nextConfig;
