import { createConsumer } from "@rails/actioncable";

export const cable = createConsumer(
  "wss://deedee-unchainable-optionally.ngrok-free.dev/cable"
);