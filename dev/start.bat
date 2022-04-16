@echo off

echo Checking if live editor exists...
if not exist dev\live-editor\ (
    echo Live editor does not exist. Cloning...
    cd dev
    git clone --depth 1 --filter=blob:none --sparse https://github.com/Khan/live-editor
    cd live-editor
    git sparse-checkout set build
    cd ../..
    echo Live editor cloned
) else (
    echo Live editor already cloned
)

set "PYTHON_VERSION=0"
call:construct

for /f "delims=" %%a in ('python #.py ^| findstr "2"') do set "PYTHON_VERSION=2"
for /f "delims=" %%a in ('python #.py ^| findstr "3"') do set "PYTHON_VERSION=3"
del #.py
goto:PYTHON_%PYTHON_VERSION%

echo Python is not installed on your machine or Python is not in the %%$PATH%% environment variable
exit /b 1

:PYTHON_3
echo Starting server with Python 3
echo http://localhost:8000/dev
python -m http.server 8000
exit /b 0

:PYTHON_2
echo Starting server with Python 2
echo http://localhost:8000/dev
python -m SimpleHTTPServer 8000
exit /b 0

:construct
echo import sys; print('{0[0]}.{0[1]}'.format(sys.version_info^)^) >#.py
