const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

//Post method to create MenuItem
router.post('/', async (req, res) => {
 try{
     const data = req.body;
     const menuItem = new MenuItem(data);
     const response = await menuItem.save();
     console.log('data saved successfully');
     res.status(201).json(response);
 }catch(err){
  console.log(err);
  res.status(500).json({ error: 'internal sever error' })
 }
})

router.get('/', async (req, res) => {
  try{
      const menuItems = await MenuItem.find();
      console.log('MenuItem fetched successfully');
      res.status(200).json(menuItems);
  }catch(err){
    console.log(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

router.get('/:taste', async(req, res) => {
    try{
        const taste = req.params.taste;
        if(taste == 'Spicy' || taste == 'Sour' || taste == 'Sweet'){
         const response = await MenuItem.find({ taste: taste });
         console.log('response fetched');
         res.status(200).json(response);
        }else {
            res.status(404).json({ error: 'Invalid taste' });
        }
    }catch(error){
     console.log(error);
     res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try{
        const menuItemId = req.params.id;
        const menuItemData = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuItemId, menuItemData, {
            new: true,
            runValidators: true,
        })
        if(!response){
            res.status(404).json({ message: 'menuItem not found' });
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
       console.log(error);
       res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async(req,res) => {
 try{
     const menuItemId = req.params.id;
     const response = await MenuItem.findByIdAndDelete(menuItemId);
     if(!response){
        res.status(404).json({ error: 'menuItem not found' });
     }
    console.log('data deleted');
    res.status(200).json({ data: 'data deleted successfully' });
 }catch(err){
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
});
module.exports = router;