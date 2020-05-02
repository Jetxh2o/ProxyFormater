cd ../assets/proxies
dir /b /a-d > ../../scripts/proxies.txt
cd ../../scripts
call node formatProxyFileNames.js
for /f "delims=" %%a in (proxies.txt) DO (
  set proxies=%%a
)
start chrome http://localhost:4200?p=%proxies%