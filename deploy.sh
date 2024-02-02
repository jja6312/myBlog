#!/bin/bash

# Spring Boot 애플리케이션 디렉터리
SPRINGBOOT_DIR="/opt/myBlog/springboot"

# 이전에 실행된 Spring Boot 애플리케이션 종료
CURRENT_PID=$(pgrep -f '.jar')
if [ -n "$CURRENT_PID" ]; then
    echo "Stopping running Spring Boot application"
    kill -15 "$CURRENT_PID"
fi

# 새 Spring Boot 애플리케이션 배포
JAR_NAME=$(ls $SPRINGBOOT_DIR | grep '.jar' | tail -n 1)
echo "Deploying $JAR_NAME"
nohup java -jar $SPRINGBOOT_DIR/$JAR_NAME > $SPRINGBOOT_DIR/nohup.out 2>&1 &
