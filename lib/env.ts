import { cleanEnv, str } from "envalid";

// specify type of env
const env = cleanEnv(process.env, {
    PEXELS_API_KEY: str(),
})

export default env