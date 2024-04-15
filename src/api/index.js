const prefixUrl =
  process.env.NODE_ENV === "production" ? "/tages-test-task/" : "/";

export const getMaterials = () => fetch(prefixUrl + "db/materials.json");

export const getProducts = () => fetch(prefixUrl + "db/items.json");
