

## Install

```bash
npm install -g @cseitz/templates
```

## Usage

Note: The following commands **do not work yet**. This is just here to help me determine how I'm going to make the commands work.

```bash
# Initialize a turbo monorepo
tx init turbo

# Add a node.js project at projects/server
tx init node projects/server

# Add tRPC to projects/server
tx add trpc projects/server

# Create a nextjs project
tx init next projects/app

# Add tRPC client to it
tx add trpc --client projects/app

# Add websocket support to tRPC (automatically finds trpc instances and implements websockets)
tx trpc add ws

# Add mongoose to projects/server
tx add mongo projects/server

# Create a new mongoose model (manually specified output directory)
tx mongo create users projects/data/models
```

