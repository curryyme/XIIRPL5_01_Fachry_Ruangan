
const user = require('../models/user')

  module.exports = {
    // get all users
    index: async (req, res) => {
      try {
        const users = await user.find()
        if(users.length > 0){
          res.status(200).json({
            status: true,
            data: users,
            method: req.method,
            url: req.url 
          })
        }else{
          res.json({
            status: false,
            message: "data masih kosong"
          })
        }
        
      } catch (error) {
        console.log(error);
        res.status(400).json({sucess: false})
      }

      },
      // get a user
      show: async (req, res) => {
        try {
          const users = await user.findById(req.params.id, req.body,)
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data Berhasil didapat"
          }) 

        } catch (error) {
          res.status(500).json({sucess: false, error: error.message})
        }
      },

      store: async  (req, res) => {
        try {
            const users = await user.create(req.body)
            res.status(300).json({
              status: true,
              data: users,
              method: req.method,
              url: req.url,
              message: "Data Berhasil ditambahkan"
            })  
        } catch (error) {
          res.status(500).json({sucess: false, error: error.message})
        }
      },
      update: async (req, res) => {
        try {
          const users = await user.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          })
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data Berhasil diubah"
          }) 

        } catch (error) {
          res.status(500).json({sucess: false, error: error.message})
        }
       
       
      },
      delete: async (req, res) => {
        try {
          await user.findByIdAndDelete(req.params.id)
          res.json({
            status: true,
            method: req.method,
            url: req.url,
            message: "Data Berhasil dihapus"
          })  
        } catch (error) {
          res.status(500).json({sucess: false, error: error.message})
        }
       
       
    
      }
  }