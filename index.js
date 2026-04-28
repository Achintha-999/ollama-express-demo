import ollama from 'ollama'
import express from 'express';

const app = express();

app.get("/test", async (req, res) => {

    const response = await ollama.chat({
        model: 'llama3.1:8b',
        messages: [{ role: 'user', content: 'What is the capital of France?' }],
    });

    res.send(response.message.content);

});

app.use(express.static('public'));
app.listen(3000);
