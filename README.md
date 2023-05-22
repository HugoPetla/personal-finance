# Simple Financial Management Application

This is a simple open-source project for a basic HTML + JavaScript + CSS application designed as a learning resource. The application allows you to manage your finances by calculating the balance between income (e.g., salary) and expenses (e.g., rent).

## Getting Started

You have two options to run the application: directly opening the index.html file in your browser or starting a local HTTP server using Node.js.

### Option 1: Opening the Application in the Browser

- Locate the index.html file in your project directory (/home/{your-user}/projects/personal-finance/).
- Double-click the index.html file to open it in your default web browser.
- The application should load and be ready to use.

### Option 2: Starting a Local HTTP Server

- Open a terminal or command prompt.
- Navigate to the project directory using the cd command. In your case, it would be:

```
cd /home/{your-user}/projects/personal-finance/
```

- Ensure that Node.js is installed by running the following command:

```
node --version
```

If Node.js is not installed, please refer to the official Node.js website for installation instructions.

- Install the http-server module globally by running the following command:

```
npm install -g http-server
```

- Once the installation is complete, start the local HTTP server by running the following command:

```
http-server
```

The server will start and listen on a specific port, usually port 8080. Take note of the port number displayed in the terminal.

- In your Chrome browser, enter the following address in the URL bar:
  javascript

```
localhost:<port number>
```

Replace <port number> with the port number you noted in the previous step. For example, if the port number is 8080, you would enter localhost:8080.

- This will allow you to access the index.html file in your Chrome browser through the local HTTP server. Make sure the server is running whenever you want to access the file.

## Contributing

Feel free to contribute to this project by submitting pull requests or reporting issues on the project's GitHub repository. This is a great opportunity to learn and collaborate with other developers.

## License

This project is licensed under the **MIT License**. Feel free to use it for personal or commercial purposes.

## Acknowledgements

This application is inspired by the need for a simple financial management tool and is intended for educational purposes.

## Contact

If you have any questions or feedback regarding this project, you can reach out to the project maintainer at **hugopetla@gmail.com**.

I hope you find this application helpful for your studies!
