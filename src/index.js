import express from "express";
import axios from "axios";
import cors from "cors";
import config from "../config.json";

const app = express();
const port = 3001;

const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))


app.use(express.json());

app.get("/api/user/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
          headers: {
            Authorization: `Bot ${config.token}`,
          },
        });
    
        res.json(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy data người dùng:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
})