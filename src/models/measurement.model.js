module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  
  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  })

  const Measurement = mongoose.model('measurements', schema);
  
  return Measurement;
}