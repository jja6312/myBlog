#!/usr/bin/env bash

# Spring Boot 애플리케이션 디렉터리
SPRINGBOOT_REPOSITORY=/opt/myBlog/springboot

# Spring Boot 애플리케이션 JAR 파일
SPRINGBOOT_JAR_NAME=myBlog-0.0.1-SNAPSHOT.jar
SPRINGBOOT_JAR_PATH=$SPRINGBOOT_REPOSITORY/$SPRINGBOOT_JAR_NAME

# 실행 중인 Spring Boot 애플리케이션의 PID 확인
CURRENT_PID=$(pgrep -f $SPRINGBOOT_JAR_NAME)

if [ -z "$CURRENT_PID" ]; then
  echo "> 종료할 것 없음."
else
  echo "> 기존 애플리케이션 종료: kill -15 $CURRENT_PID"
  kill -15 $CURRENT_PID
  sleep 5
fi

# Spring Boot 애플리케이션 실행
echo "> 새 애플리케이션 배포: $SPRINGBOOT_JAR_PATH"
nohup java -jar $SPRINGBOOT_JAR_PATH > /dev/null 2>&1 < /dev/null &

echo "> 배포 스크립트 종료"
