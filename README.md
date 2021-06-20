# MicroMKT

MicroMKT Bitcoin Price Querier

## In order to run:

1.  Install grunt globally using the command:
    ``` 
    npm install -g grunt
    ```

2. Clone the project to your local file system using the command:
   ```
   git clone https://github.com/ramikamaldev/micromkt.git
   ```

3. Change directory into the cloned directory:
   ```
   cd micromkt
   ```

4. Install the required node packages using the command:
   ```
   npm install
   ```

5. In a terminal transpile by running the Grunt Task Runner using the command:
   ```
   grunt
   ```

6. Run the program using the command where duration and interval are equal to seconds:
    ```
    node ./bin/app.js --duration=20 --interval=5
     ```