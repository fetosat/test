import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { registerDashboardRoutes } from "./api/dashboard";

export async function registerRoutes(app: Express): Promise<Server> {
  await setupAuth(app);
  
  registerDashboardRoutes(app);

  const httpServer = createServer(app);

  return httpServer;
}
