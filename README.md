# Webdriverio-Cucumber
Webdriverio with cucumber is choosen as a test framework. This is more reliable, fast and secure framework.
It is easy to setup and configure the framework utilities.

#Build and Install
Clone the repository and open the command prompt/terminal in IDE to install
```bash
git clone https://github.com/jagadish659/Jagadish_WebdriverIo-Cucumber.git
npm install
```
Webdriverio uses Fibers 4.X which requires node 10.X or above to install latest packages.
If node 8.X is installed in local machine, please add Fibers@3 pacakge in pacakge.json

#Test
After the installation is successful, run below command to run tests
```bash
npm run test
```

#FeatureFile
Feature file can be found at ./test/features/sample.feature

Tests are written for GET, DELETE and POST methods.

Multiple endpoint uri's are used for GET as listed in the https://jsonplaceholder.typicode.com/
One DELETE and POST request types are added.
