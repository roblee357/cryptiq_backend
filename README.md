# OAuth2 Demo
Simple app to demonstrate OAuth2 authorization for Google API.
App is comprised of a NodeJS server running on and EC2 instance with the domain name https://criptiq.io/ 

Below is an example of the OAuth2 login button and popup.
![](images/choose%20account.PNG)

Below is an example of what the user would see once logged in.
![](images/Criptiq.io%20Success.PNG)

## This guide from Google was used as a framework for integrating signin into a web app
https://developers.google.com/identity/sign-in/web/sign-in

## Registered the domain with Google Search Console.
Proved ownership of domain.<br>
![](images/Criptiq%20domain%20verification.PNG)

## Created client ID and Client secret with Google Cloud Platform API console.
https://console.cloud.google.com/apis

## Authotization Error
Despite setting the server to use HTTPS and declairing ownership of the domain, the app still does not comply to Google's OAuth 2.0 policy. This may be because the app has a self-signed certificate. Perhaps, it needs the JS script origins registered, but it's only using /socket.io/socket.io.js 

## EC2 Provisioning
### Instance
Open https and ssh ports
Create key for ssh. I used putty so I needed to convert it to a .pkk file from .pem with PUTTYgen.
### Commands
nvm install node	<br>
node -e "console.log('Running Node.js ' + process.version)"	<br>
sudo yum update -y	<br>
sudo yum install git -y	<br>
git clone https://github.com/roblee357/cryptiq_backend.git	<br>
cd cryptiq_backend/	<br>
npm install express	<br>
npm install -g npm@7.24.1	<br>
openssl genrsa -out key.pem	<br>
openssl req -new -key key.pem -out csr.pem	<br>
node index.js	<br>


