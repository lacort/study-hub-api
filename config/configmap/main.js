// MONGODB STUDY
const dbStudy = {
  strConnection: `${process.env.MDB_PROTOCOL}${process.env.MDB_USER}:${process.env.MDB_PASS}@${process.env.MDB_HOST}/dbStudy?${process.env.MDB_PARAMS}`,
  intMaxReconnect: Number(process.env.MDB_INT_MAX_RECONNECT),
}

export { dbStudy }
