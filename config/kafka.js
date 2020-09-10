const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "nodejs",
  brokers: ["13.251.89.132:9092"],
});

module.exports = kafka;
