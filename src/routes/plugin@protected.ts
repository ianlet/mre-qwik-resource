import {RequestEventCommon, ServerFunction} from "@builder.io/qwik-city";
import {isServer} from "@builder.io/qwik/build";

export const onRequest = async ({
  request,
  error,
}: RequestEventCommon) => {
  if (!isServer || !request.headers.has("X-Protected-Route")) return;

    throw error(401, "Not authenticated");
};

export const authenticated = (): ServerFunction["options"] => {
  return { headers: { "X-Protected-Route": "true" } };
};