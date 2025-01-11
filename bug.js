```javascript
const query = { name: /John/i }; // Case-insensitive search

// ... rest of the code
```
This query uses a regular expression for case-insensitive search which could lead to unexpected results if the index on the name field is not case-insensitive.