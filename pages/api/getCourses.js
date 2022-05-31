// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const data = require('../../data/courses.json');
  res.status(200).json({courses: `${data}`});
}
