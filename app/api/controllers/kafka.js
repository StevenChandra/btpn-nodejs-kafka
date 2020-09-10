const kafka = require("../../../config/kafka");
const vehicleModel = require("../models/vehicles");
const consumer = kafka.consumer({ groupId: "test-group" });

module.exports = {
  create: async () => {
    // Consuming
    await consumer.connect();
    await consumer.subscribe({ topic: "vehicle", fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // console.log({
        //   partition,
        //   offset: message.offset,
        //   value: message.value.toString(),
        // });
        const data = JSON.parse(message.value);
        vehicleModel.create(
          {
            userName: data.userName,
            accountNumber: data.accountNumber,
            emailAddress: data.emailAddress,
            identityNumber: data.identityNumber,
          }
          // ,
          // function (err, result) {
          //   if (err) next(err);
          //   else
          //     res.json({
          //       status: "success",
          //       message: "Data added",
          //       data: null,
          //     });
          // }
        );
      },
    });
  },
};
