import mongoose from 'mongoose';

const publicationSchema = new mongoose.Schema({
  articletype: String,
  titleofmanuscript: String,
  journal: String,
  ISSN: String,
  Volume: String,
  Issue: String,
  Year: Number,
  DateofPublication: Date,
  Pages: String,
  HECcategory: String,
  webofScience: Boolean,
  impactfactor: Number,
  scopus: Boolean,
  urlOfPublication: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  supervisedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  deptHead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  researcher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('Publication', publicationSchema);
