/* Install Node and Nodmon via npm...
 * 
 * Creating environmental variables for future devs...
 * Conventional ibid.
 * This will help when testing and for secrets/security...
 */

const app = require('http')
.createServer((req, res) => res.send('Oh, hello there!'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

console.log(PORT);