
// src/lib/hive/keychain.js

/**
 * Checks if Hive Keychain extension is available in the browser.
 * @returns {boolean} True if Keychain is available, false otherwise.
 */
export function isKeychainAvailable() {
    return typeof window !== 'undefined' && window.hive_keychain;
}

/**
 * Requests a message signature for authentication.
 * @param {string} username - The Hive username to authenticate.
 * @param {string} message - The message to be signed.
 * @param {'Posting'|'Active'|'Memo'} keyType - The type of key to use for signing.
 * @returns {Promise<object>} A promise that resolves with the Keychain response.
 */
export function requestKeychainLogin(username, message, keyType = 'Posting') {
    return new Promise((resolve, reject) => {
        if (!isKeychainAvailable()) {
            return reject(new Error('Hive Keychain is not available.'));
        }
        window.hive_keychain.requestSignBuffer(
            username,
            message,
            keyType,
            (response) => {
                if (response.success) {
                    resolve(response);
                } else {
                    reject(new Error(response.message || 'Keychain login failed.'));
                }
            }
        );
    });
}

/**
 * Requests a vote operation.
 * @param {string} username - The Hive username casting the vote.
 * @param {string} permlink - The permlink of the post/comment to vote on.
 * @param {string} author - The author of the post/comment.
 * @param {number} weight - Vote weight (e.g., 10000 for 100%, 5000 for 50%).
 * @returns {Promise<object>} A promise that resolves with the Keychain response.
 */
export function requestKeychainVote(username, permlink, author, weight) {
    return new Promise((resolve, reject) => {
        if (!isKeychainAvailable()) {
            return reject(new Error('Hive Keychain is not available.'));
        }
        window.hive_keychain.requestVote(
            username,
            permlink,
            author,
            weight,
            (response) => {
                if (response.success) {
                    resolve(response);
                } else {
                    reject(new Error(response.message || 'Keychain vote failed.'));
                }
            }
        );
    });
}
