WORKDIR /app
COPY mvnw .
COPY mvnw.cmd .
COPY pom.xml .
COPY src src
RUN mvn package -Dmaven.test.skip=true
FROM openjdk:18-jdk-oracle
WORKDIR /app
COPY --from=builder /app/target/cart-0.0.1-SNAPSHOT.jar backEND.jar
ENV PORT=8080
ENTRYPOINT java -jar -Dserver.port=${PORT} backEND.jar