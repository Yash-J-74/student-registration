FROM openjdk:11

COPY target/*.jar testapp.jar

EXPOSE 8080

#ADD target/spring-boot-docker.jar spring-boot-docker.jar

ENTRYPOINT ["java", "-jar", "testapp.jar"]