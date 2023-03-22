const Bootcamp = require('../models/Bootcamp')


// gets all bootcamps
//route  get/api/vi/bootcamps
//access Public


exports.getBootcamps = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.find()
        console.log(req.body)
    
        res.status(201).json({
            success: true,
            data: bootcamp
        })
       }
       catch(err){
            res.status(400).json({err})
       }
   
}


// gets a bootcamp
//route  get/api/vi/bootcamps/:id
//access Public
exports.getBootcamp = async (req,res, next) =>  {
    try{
        const bootcamp = await Bootcamp.findById(req.params.id)
        console.log(req.body)
    
        res.status(201).json({
            success: true,
            data: bootcamp
        })
        if(!bootcamp){
            res.status(400).json({success:false})
        }
       }
       catch(err){
            res.status(400).json({err})
       }
}

// Create a bootcamp
//route  post/api/vi/bootcamps/
//access private
exports.createBootcamp = async (req,res, next) => {
   try{
    const bootcamp = await Bootcamp.create(req.body)
    console.log(req.body)

    res.status(201).json({
        success: true,
        data: bootcamp
    })
   }
   catch(err){
        res.status(400).json({err})
   }
}


// Update a bootcamp
//route  put/api/vi/bootcamps/:id
//access private
exports.updateBootcamp = async (req,res, next) =>  {
    try{
         const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators: true} )
        if(!bootcamp){
            res.status(400).json({success:false})
        }
        console.log(req.body)
    
        res.status(201).json({
            success: true,
            data: bootcamp
        })
        
       }
       catch(err){
            res.status(400).json({err})
       }
}

// Delete a bootcamp
//route  delete/api/vi/bootcamps/:id
//access private
exports.deleteBootcamp = async (req,res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id )
       if(!bootcamp){
           res.status(400).json({success:false})
       }
       console.log(req.body)
   
       res.status(201).json({
           success: true,
           data: bootcamp
       })
       
      }
      catch(err){
           res.status(400).json({err})
      }
}