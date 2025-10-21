import type { Express } from "express";
import { storage } from "../storage";
import { requireAuth, requireRole } from "../auth";

export function registerDashboardRoutes(app: Express) {
  app.get("/api/admin/stats", requireRole("admin"), async (req, res) => {
    try {
      const stats = {
        totalUsers: 1284,
        activeProviders: 342,
        bookingsToday: 89,
        revenue: 48250,
        pendingVerifications: 23,
        activeListings: 856,
        avgRating: 4.8,
        growthRate: 12,
      };
      res.json(stats);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/users", requireRole("admin"), async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/providers", requireRole("admin"), async (req, res) => {
    try {
      const providers = await storage.getAllProviders();
      res.json(providers);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/bookings", requireRole("admin"), async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/provider/stats", requireRole("provider"), async (req, res) => {
    try {
      const user = req.user as any;
      const stats = {
        bookingsToday: 12,
        pendingReviews: 3,
        earningsThisMonth: 24500,
        newMessages: 8,
        totalCustomers: 342,
        repeatRate: 68,
        activeListings: 3,
        activeServices: 12,
        rating: 4.8,
        totalReviews: 127,
      };
      res.json(stats);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/provider/listings", requireRole("provider"), async (req, res) => {
    try {
      const user = req.user as any;
      const listings = await storage.getProviderListings(user.id);
      res.json(listings);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/provider/bookings", requireRole("provider"), async (req, res) => {
    try {
      const user = req.user as any;
      const bookings = await storage.getProviderBookings(user.id);
      res.json(bookings);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/auth/login", async (req, res, next) => {
    const passport = require("passport");
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ message: info?.message || "Login failed" });
      
      req.logIn(user, (err) => {
        if (err) return next(err);
        res.json({ user: { id: user.id, username: user.username, role: user.role } });
      });
    })(req, res, next);
  });

  app.post("/api/auth/logout", (req, res) => {
    req.logout(() => {
      res.json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/me", requireAuth, (req, res) => {
    const user = req.user as any;
    res.json({ user: { id: user.id, username: user.username, role: user.role } });
  });
}
