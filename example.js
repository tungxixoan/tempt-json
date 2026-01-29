#!/usr/bin/env node
/**
 * Example script demonstrating how to use tempt-json for API testing.
 * This script shows how to load and use the JSON data files.
 */

const fs = require('fs');

function loadJsonFile(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
}

function main() {
    console.log("=== Tempt-JSON Example Usage ===\n");
    
    // Load users
    console.log("1. Loading users.json:");
    const users = loadJsonFile('users.json');
    console.log(`   Found ${users.length} users`);
    console.log(`   First user: ${users[0].username} (${users[0].email})\n`);
    
    // Load posts
    console.log("2. Loading posts.json:");
    const posts = loadJsonFile('posts.json');
    const publishedPosts = posts.filter(p => p.published);
    console.log(`   Found ${posts.length} total posts (${publishedPosts.length} published)\n`);
    
    // Load products
    console.log("3. Loading products.json:");
    const products = loadJsonFile('products.json');
    const inStock = products.filter(p => p.inStock);
    console.log(`   Found ${products.length} products (${inStock.length} in stock)\n`);
    
    // Load comments
    console.log("4. Loading comments.json:");
    const comments = loadJsonFile('comments.json');
    console.log(`   Found ${comments.length} comments\n`);
    
    // Load auth response
    console.log("5. Loading auth-success.json:");
    const auth = loadJsonFile('auth-success.json');
    console.log(`   Token type: ${auth.data.tokenType}`);
    console.log(`   User role: ${auth.data.user.role}\n`);
    
    // Load paginated response
    console.log("6. Loading paginated-response.json:");
    const paginated = loadJsonFile('paginated-response.json');
    console.log(`   Page ${paginated.pagination.page} of ${paginated.pagination.totalPages}`);
    console.log(`   Total items: ${paginated.pagination.total}\n`);
    
    console.log("✓ All JSON files loaded successfully!");
}

main();
