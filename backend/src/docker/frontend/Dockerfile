# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:7.8.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . ../../../../frontend


WORKDIR /frontend
# Set the command to start the node server.
CMD yarn start

# Tell Docker about the port we'll run on.
EXPOSE 3000# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:7.8.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . ../../../../frontend


WORKDIR /frontend
# Set the command to start the node server.
CMD yarn start

# Tell Docker about the port we'll run on.
EXPOSE 3000\