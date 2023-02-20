# Waddi blog system Setup
1. npm install
2. Database:\
2.1 CREATE DATABASE waddi;\
2.2 psql waddi -h localhost -U myuser < db_seed.sql

3. npm test
# Seed
db_seed.sql

# Run
npm run dev

# Login as admin
```curl --request POST \
  --url http://localhost:3000/api/users/login \
  --header 'Content-Type: application/json' \
  --data '  {"email": "admin@waddi.com", "password": "admin123"}'
  ```

# Register a creator
```curl --request POST \
  --url http://localhost:3000/api/users/register \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2ODI1OTM2LCJleHAiOjE2NzY4Mjk1MzZ9.G42ysm1cnrYtrMbxQXEziG8-ZFiL3GXYe-lfdMc4rxM' \
  --header 'Content-Type: application/json' \
  --data '   {"name": "Juan Creator", "email": "juan.creator@waddi.com", "password": "creator123", "role": "creator"}'
  ```
# Create a post
```curl --request POST \
  --url http://localhost:3000/api/posts \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjc2ODI2OTQ2LCJleHAiOjE2NzY4MzA1NDZ9.FzBf1ig8o45KryiNAwwccuoCEm7rLgcm1G_IaqF1lVU' \
  --header 'Content-Type: application/json' \
  --data '  {"title": "Blog test 1", "content": "Just for fun"}'
  ```
# Get all posts
```
curl --request GET \
  --url http://localhost:3000/api/posts \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc2ODI2MjAwLCJleHAiOjE2NzY4Mjk4MDB9.Yz71SHyXL9QxSzyaX91yQixJbATsoWY7E2K0mBOsd8E' \
  --header 'Content-Type: application/json'
```
# Get all posts by date range
```
curl --request GET \
  --url 'http://localhost:3000/api/posts?start_date='\''2023-02-19'\''&end_date='\''2023-02-20'\''' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc2ODI2MjAwLCJleHAiOjE2NzY4Mjk4MDB9.Yz71SHyXL9QxSzyaX91yQixJbATsoWY7E2K0mBOsd8E' \
  --header 'Content-Type: application/json'
```

# Update a post
```
curl --request PATCH \
  --url http://localhost:3000/api/posts/2 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjc2ODQ3MzcwLCJleHAiOjE2NzY4NTA5NzB9.HgcEjODVemnn7srzWlCY4q0MdCmaxXmA8qeHeUv7YC0' \
  --header 'Content-Type: application/json' \
  --data '  {"title": "new title", "content": "Just for fun 1 edit 3"}'