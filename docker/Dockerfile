FROM node:12.16.0

RUN npm install -g node-gyp

ENV TARGET_FOLDER_NAME="ePI-demo-workspace"
RUN git clone https://github.com/Axiologic/ePI-demo-workspace.git $TARGET_FOLDER_NAME

RUN cd $TARGET_FOLDER_NAME && \
    npm install --unsafe-perm

RUN cd $TARGET_FOLDER_NAME && \
    echo 'npm run server' >> startup-script.sh
RUN cd $TARGET_FOLDER_NAME && cat startup-script.sh

EXPOSE 8080/tcpexi

CMD cd $TARGET_FOLDER_NAME && \
    bash startup-script.sh