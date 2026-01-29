# tempt-json

A simple repository for creating temporary JSON responses to test APIs. This repository provides sample JSON data files that can be used for API testing, mock data generation, and development purposes.

## 📋 Available Data Files

This repository includes the following JSON data files:

### Core Data
- **users.json** - Sample user data with profiles, roles, and account information
- **posts.json** - Blog posts/articles with titles, content, tags, and engagement metrics
- **products.json** - E-commerce product catalog with specs, pricing, and inventory
- **comments.json** - User comments with ratings and timestamps

### API Response Templates
- **auth-success.json** - Successful authentication response with JWT tokens
- **auth-error.json** - Authentication failure response
- **validation-error.json** - Form validation error response with field-specific errors
- **paginated-response.json** - Paginated API response with navigation links

## 🚀 Usage

### Direct File Access

You can access these JSON files directly from GitHub using raw URLs:

```
https://raw.githubusercontent.com/tungxixoan/tempt-json/main/users.json
https://raw.githubusercontent.com/tungxixoan/tempt-json/main/posts.json
https://raw.githubusercontent.com/tungxixoan/tempt-json/main/products.json
https://raw.githubusercontent.com/tungxixoan/tempt-json/main/comments.json
```

### Using with Testing Tools

#### cURL
```bash
curl https://raw.githubusercontent.com/tungxixoan/tempt-json/main/users.json
```

#### Postman
Import the raw URL directly into Postman to test your API client.

#### JavaScript/Fetch
```javascript
fetch('https://raw.githubusercontent.com/tungxixoan/tempt-json/main/users.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Python/Requests
```python
import requests

response = requests.get('https://raw.githubusercontent.com/tungxixoan/tempt-json/main/users.json')
data = response.json()
print(data)
```

### Local Testing

Clone the repository and use the files locally:

```bash
git clone https://github.com/tungxixoan/tempt-json.git
cd tempt-json
```

#### Run Example Scripts

Try out the example scripts to see how to use the JSON files:

```bash
# Python example
python3 example.py

# Node.js example
node example.js
```

#### Serve with HTTP Server

You can serve these files using any local HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Access your data at: `http://localhost:8000/users.json`

## 📊 Data Structure

### Users
Each user object contains:
- `id` - Unique identifier
- `username` - User's username
- `email` - Email address
- `firstName`, `lastName` - Name components
- `age` - User's age
- `role` - User role (admin, user, moderator)
- `active` - Account status
- `createdAt` - Account creation timestamp

### Posts
Each post object contains:
- `id` - Unique identifier
- `userId` - Author's user ID
- `title` - Post title
- `body` - Post content
- `tags` - Array of topic tags
- `published` - Publication status
- `views`, `likes` - Engagement metrics
- `createdAt`, `updatedAt` - Timestamps

### Products
Each product object contains:
- `id` - Unique identifier
- `name` - Product name
- `description` - Product description
- `price`, `currency` - Pricing information
- `category`, `brand` - Classification
- `inStock`, `quantity` - Inventory status
- `rating`, `reviews` - Customer feedback
- `specs` - Product specifications

### Comments
Each comment object contains:
- `id` - Unique identifier
- `postId` - Associated post ID
- `userId`, `userName` - Commenter information
- `comment` - Comment text
- `rating` - Comment rating (1-5)
- `helpful` - Helpful count
- `createdAt` - Comment timestamp

## 🎯 Use Cases

- **API Testing** - Test your API clients with realistic data
- **Frontend Development** - Use as mock data during UI development
- **Learning & Education** - Practice working with JSON and APIs
- **Prototyping** - Quick data source for proof-of-concepts
- **Integration Testing** - Use as external data source in tests

## 📁 Example Scripts

The repository includes example scripts demonstrating how to load and use the JSON data:

- **example.py** - Python example showing how to load and process all JSON files
- **example.js** - Node.js example showing how to load and process all JSON files

Run these examples to see how the data is structured:

```bash
python3 example.py
# or
node example.js
```

## 📝 License

This is a public repository intended for testing and educational purposes. Feel free to use the data as needed.

## 🤝 Contributing

Feel free to add more sample data files or improve existing ones by submitting a pull request!