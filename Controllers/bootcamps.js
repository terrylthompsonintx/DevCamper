// gets all bootcamps
//route  get/api/vi/bootcamps
//access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'})
}


// gets a bootcamp
//route  get/api/vi/bootcamps/:id
//access Public
exports.getBootcamp = (req,res, next) =>  {
    res.status(200).json({success: true, msg: `Show a bootcamp ${req.params.id}`})
}

// Create a bootcamp
//route  post/api/vi/bootcamps/:
//access private
exports.createBootcamp = (req,res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'})
}


// Update a bootcamp
//route  put/api/vi/bootcamps/:id
//access private
exports.updateBootcamp = (req,res, next) => {
    res.status(200).json({success: true, msg: `Update a bootcamp ${req.params.id}`})
}

// Delete a bootcamp
//route  delete/api/vi/bootcamps/:id
//access private
exports.deleteBootcamp = (req,res, next) => {
    res.status(200).json({success: true, msg: `delete a bootcamp ${req.params.id}`})
}