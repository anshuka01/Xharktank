import mongoose from 'mongoose';
// var SchemaTypes = mongoose.Schema.Types;
const postSchema = mongoose.Schema({
    entrepreneur: {
        type: String,
        required: true
       },
       pitchTitle: {
        type: String,
        required: true
       },
       pitchIdea: {
        type: String,
        required: true
       },
       askAmount: {
        type: mongoose.Decimal128,
        required: true
       },
       equity: {
        type: mongoose.Decimal128,
        required: true
       },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;