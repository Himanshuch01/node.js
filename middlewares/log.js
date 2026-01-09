const app = express();
const port = 3000;
// logging middleware

function logger(req, res, next){
  console.log(`${req.method} ${req.url} `);
  next();

}
app.use(logger);

app.get("/", (req, res)=>{
  res.send("Home Page");
});

app.listen(port, ()=>{
  
})