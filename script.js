javascript
document.getElementById('download-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('video-url').value;

    try {
        const response = await fetch('https://your-backend-api-url/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        if (data.success) {document.getElementById('download-link').innerHTML = <a href="data.link" target="_blank">Click here to download the video</a>;
         else 
            document.getElementById('download-link').innerHTML = <p>Error:{data.message}</p>;
        }
    } catch (error) {
        document.getElementById('download-link').innerHTML = <p>Error connecting to the server</p>;
    }
});


---
