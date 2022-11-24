import express from 'express';
import PostMessage from '../Models/post_message.js';
import InvestorMessage from '../Models/post_investor.js';
const router = express.Router();
router.post('/',async (req, res) => {
    const post = req.body;
    const newPostMessage = new PostMessage({ ...post,  createdAt: new Date().toISOString() })
    try {
        await newPostMessage.save();
        res.status(201).json({_id:newPostMessage._id,});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.post('/investor/:id',async (req, res) => {
    const post = req.body;
    const { id } = req.params;
    const newPostMessage = new InvestorMessage({ ...post, pitchID:id, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostMessage.findById(id);
        let offer = await InvestorMessage.find({ pitchID: post._id });;
        res.status(200).json({...post,...offer});
    } catch (error) {    
        res.status(400).json({ message: error.message });
    }

});
router.get('/',async (req,res)=>{
    try {
        const posts = await PostMessage.find().sort({ _id: -1 });
        const finalPitches = [];
        for (let i = 0; i < posts.length; i++) {
            let pitch = posts[i];
            let offer = await InvestorMessage.find({ pitchID: pitch._id });
            finalPitches.push({ pitch, offers: offer });
           }
        res.json(finalPitches);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})
export default router;