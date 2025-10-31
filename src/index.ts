import app from "./app";

// port
const port = process.env.PORT || 4000;

// running the server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
