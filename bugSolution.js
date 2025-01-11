```javascript
// Create a case-insensitive index
db.collection('users').createIndex( { name: 'text' }, {caseInsensitive: true} );

const query = { $text: { $search: "John" } }; // Use $text operator with case-insensitive index

// ... rest of the code
```
The solution uses a case-insensitive text index created with `createIndex` and the `$text` operator for efficient case-insensitive searches.