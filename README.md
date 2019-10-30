# Setup
## BackEnd

Add config file from the example file given. Then fill in the config details in the file.
```javascript
cd BackEnd/config
cp eg.config.json config.json
```
```javascript
cd BackEnd
npm install
npm start
```
Server running at port 3000
http://localhost:3000

## FrontEnd

```javascript
cd Frontend
npm install
npm run serve
```
Server running at port 8080
http://localhost:8080

#### Build for production
```javascript
npm run build
```
Build files can be found in the dist folder.These files can be directly served.

