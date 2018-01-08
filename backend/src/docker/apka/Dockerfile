FROM tomcat:8.5-alpine

VOLUME /tmp

COPY . ../../../target/backend-0.0.1-SNAPSHOT.jar

WORKDIR .

ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]