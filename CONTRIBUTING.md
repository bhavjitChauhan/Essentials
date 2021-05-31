# Development Workflow
## Clone Repository
Git
```bash
git clone https://github.com/bhavjitChauhan/Essentials
```

GitHub CLI
```bash
gh repo clone bhavjitChauhan/Essentials
```

## Install Dependencies
```bash
npm i
```

## Build
### CDN
```bash
npm run build:cdn
```

### CDN and KA
```bash
npm run build
```

### Prototype
A quick build for development.
```bash
npm run dev:build
```

## Testing
```bash
npm test
```

:information_source: | Test coverage is far from 100%.
:---: | :---

## Local Development Environment
The shell script will clone the necessary files from Khan Academy's [Live Editor](https://github.com/Khan/live-editor) repository and start a local server using Python. It will also create a prototype build.
### Windows
```bash
npm run dev
```

### Linux
Unfortunately, there is no automatic setup for a local development environment **yet**. A tool such as [Wine](https://www.winehq.org/) may be used to run the batch script on Linux, however this has not been tested.

Alternativly, clone the [build](https://github.com/Khan/live-editor/tree/master/build) directory manually. The file structure should look like this:
```
/Essentials
  . . .
  /dev
    /live-editor
      /build
    /index.html
    /output.html
    /start.bat
  . . .
```

## Miscellaneous
Other NPM scripts can be found in the [package.json](https://github.com/bhavjitChauhan/Essentials/blob/master/package.json) file.
