import mongoose from 'mongoose';
const investorSchema = mongoose.Schema({
    investor: {
        type: String,
        required: true,
      },
      amount: {
        type: mongoose.Decimal128,
        required: true,
      },
      equity: {
        type: mongoose.Decimal128,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      pitchID: {
        type: String,
        required: true,
      },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var InvestorMessage = mongoose.model('InvestorMessage', investorSchema);

export default InvestorMessage;