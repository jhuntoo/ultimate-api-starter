console.log('API server started');
import App from './app';
let app = new App();
app.displayInfoEnv();

app.start()
  .catch(err => {
    console.error(`App ending with error: ${err}`);
  });
