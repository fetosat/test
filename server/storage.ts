import { type User, type InsertUser, type Provider, type Listing, type Booking } from "@shared/schema";
import { randomUUID } from "crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import * as schema from "@shared/schema";

const sql = neon(process.env.DATABASE_URL || "");
const db = drizzle(sql, { schema });

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserById(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getAllProviders(): Promise<Provider[]>;
  getAllBookings(): Promise<Booking[]>;
  getProviderListings(providerId: string): Promise<Listing[]>;
  getProviderBookings(providerId: string): Promise<Booking[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    return this.getUserById(id);
  }

  async getUserById(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(schema.users).where(eq(schema.users.id, id)).limit(1);
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(schema.users).where(eq(schema.users.username, username)).limit(1);
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(schema.users).values(insertUser).returning();
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await db.select().from(schema.users);
  }

  async getAllProviders(): Promise<Provider[]> {
    return await db.select().from(schema.providers);
  }

  async getAllBookings(): Promise<Booking[]> {
    return await db.select().from(schema.bookings);
  }

  async getProviderListings(providerId: string): Promise<Listing[]> {
    return await db.select().from(schema.listings).where(eq(schema.listings.providerId, providerId));
  }

  async getProviderBookings(providerId: string): Promise<Booking[]> {
    return await db.select().from(schema.bookings).where(eq(schema.bookings.providerId, providerId));
  }
}

export const storage = new DatabaseStorage();
