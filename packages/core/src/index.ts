/**
 * Minions Sprint-master SDK
 *
 * Agent to organize and sort daily granular task priority
 *
 * @module @minions-sprint-master/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Sprint-master.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
