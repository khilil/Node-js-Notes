// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

import z from "zod";

// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 17;

// // const parseUserAge = ageSchema.parse(userAge);
// const {data, error, success} = ageSchema.safeParse(userAge);
// console.log(error);

const portSchema = z.coerce.number().min(1).max(6000).default(3000);

export const PORT = portSchema.parse(process.env.PORT);
