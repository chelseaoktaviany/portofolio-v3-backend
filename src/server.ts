import app from "./app";

const port = process.env.PORT || 5000;

// running the server
app.listen(port, async () => {
  try {
    console.log(`Connected to the server with port ${port}`);
  } catch (err) {
    console.error(`Database connection failed: ${err}`);
  }
});
