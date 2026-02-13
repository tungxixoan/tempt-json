#!/usr/bin/env python3
"""
Example script demonstrating how to use tempt-json for API testing.
This script shows how to load and use the JSON data files.
"""

import json

def load_json_file(filename):
    """Load a JSON file from the current directory."""
    with open(filename, 'r') as f:
        return json.load(f)

def main():
    print("=== Tempt-JSON Example Usage ===\n")
    
    # Load users
    print("1. Loading users.json:")
    users = load_json_file('users.json')
    print(f"   Found {len(users)} users")
    print(f"   First user: {users[0]['username']} ({users[0]['email']})\n")
    
    # Load posts
    print("2. Loading posts.json:")
    posts = load_json_file('posts.json')
    published_posts = [p for p in posts if p['published']]
    print(f"   Found {len(posts)} total posts ({len(published_posts)} published)\n")
    
    # Load products
    print("3. Loading products.json:")
    products = load_json_file('products.json')
    in_stock = [p for p in products if p['inStock']]
    print(f"   Found {len(products)} products ({len(in_stock)} in stock)\n")
    
    # Load comments
    print("4. Loading comments.json:")
    comments = load_json_file('comments.json')
    print(f"   Found {len(comments)} comments\n")
    
    # Load auth response
    print("5. Loading auth-success.json:")
    auth = load_json_file('auth-success.json')
    print(f"   Token type: {auth['data']['tokenType']}")
    print(f"   User role: {auth['data']['user']['role']}\n")
    
    # Load paginated response
    print("6. Loading paginated-response.json:")
    paginated = load_json_file('paginated-response.json')
    print(f"   Page {paginated['pagination']['page']} of {paginated['pagination']['totalPages']}")
    print(f"   Total items: {paginated['pagination']['total']}\n")
    
    print("✓ All JSON files loaded successfully!")

if __name__ == "__main__":
    main()
