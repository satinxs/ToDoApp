@echo off
echo Installing dependencies...
call npm install

echo Building and starting the server
call npm run start
