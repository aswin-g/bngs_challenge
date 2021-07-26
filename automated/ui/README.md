# UI Test Automation using Cypress

## Install

Below install instructions are all based on MacOS.

### Install brew

Run the below comand from the terminal

```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```

### Install Node Version Manager

Run the below comand from the terminal

```brew install nvm```

#### Update bash profile

Update the bash profile with command from the terminal  ```open ~/.bash_profile``` and save the bash profile

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


#### Source bash profile

Run the below command to source the bash profile to reflect above nvm changes

```source  ~/.bash_profile```

### Install Node

Run the below comand from the terminal

```nvm install v16```

### Install cypress

From project directory, run the below command from the terminal

```npm install```

## Run Tests

Tests can be run using Chrome, Firefox, Safari and IE browsers. As a 

Goto the directory ```automated/ui/```

Run the below comand from the terminal

```npx cypress run --browser=chrome```

