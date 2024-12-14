import { promisify } from 'util';
import { createClient } from 'redis';

/**
 * Represents a Redis client.
 */
class RedisClient {
    /**
     * Creates a new instance of the RedisClient class.
     */
    constructor() {
        this.client = createClient();
        this.isClientConnected = true;
        this.client.on('error', (err) => {
            console.error('Failed to establish connection with Redis server:', err.message || err.toString());
            this.isClientConnected = false;
        });
        this.client.on('connect', () => {
            this.isClientConnected = true;
        });
    }

    /**
     * Checks if the client is currently connected to the Redis server.
     * @returns {boolean} Returns true if the client is connected, otherwise false.
     */
    isAlive() {
        return this.isClientConnected;
    }

    /**
     * Retrieves the value associated with a given key.
     * @param {String} key The key of the item to retrieve.
     * @returns {String | Object} Returns the value associated with the specified key.
     */
    async get(key) {
        return promisify(this.client.GET).bind(this.client)(key);
    }

    /**
     * Stores a key-value pair along with an expiration time.
     * @param {String} key The key of the item to store.
     * @param {String | Number | Boolean} value The value to store.
     * @param {Number} duration The expiration time of the item in seconds.
     * @returns {Promise<void>} Returns a promise that resolves when the item is successfully stored.
     */
    async set(key, value, duration) {
        await promisify(this.client.SETEX)
            .bind(this.client)(key, duration, value);
    }

    /**
     * Removes the value associated with a given key.
     * @param {String} key The key of the item to remove.
     * @returns {Promise<void>} Returns a promise that resolves when the item is successfully removed.
     */
    async del(key) {
        await promisify(this.client.DEL).bind(this.client)(key);
    }
}

export const redisClient = new RedisClient();
export default redisClient;
