// src/BadgeDisplay.js
import React from 'react';

const BadgeDisplay = () => {
    const copyToClipboard = () => {
        const copyText = document.getElementById("badgeCode");
        copyText.select();
        document.execCommand("copy");
        alert("Copied to clipboard");
    };

    const showInstructions = (platform) => {
        // Hide all
        document.getElementById("wordpress").style.display = 'none';
        document.getElementById("squarespace").style.display = 'none';

        // Show the requested one
        document.getElementById(platform).style.display = 'block';
    };

    return (
        <>
            <h1 style={{ fontFamily: "Lora" }}>Proudly Display Your Opus Membership on Your Site</h1>
            <p>Copy the code below to embed our badge on your website:</p>
            <textarea
                id="badgeCode"
                rows="10"
                readOnly
                style={{ width: "100%", fontFamily: "Lora" }}
                value={`
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <a href="https://opusliteraryalliance.org" target="_blank">
                            <img src="https://badge.opusliteraryalliance.org/opus-digital-badge.png" alt="Charter Member of Opus Literary Alliance" style="max-width: 100px; height: auto;">
                        </a>
                    </div>
                `}
            />
            <button onClick={copyToClipboard} style={{ backgroundColor: "#FFCC02", fontFamily: "Lora" }}>Copy Code</button>

            <h2 style={{ fontFamily: "Lora" }}>How to Add this Badge to Your Site</h2>
            <div style={{ marginBottom: "15px" }}>
                <button onClick={() => showInstructions("wordpress")} style={{ backgroundColor: "#FFCC02", marginRight: "10px", fontFamily: "Lora" }}>WordPress Instructions</button>
                <button onClick={() => showInstructions("squarespace")} style={{ backgroundColor: "#FFCC02", fontFamily: "Lora" }}>Squarespace Instructions</button>
            </div>

            <div id="wordpress" className="instructions" style={{ display: 'none', fontFamily: "Lora" }}>
                <h3>WordPress Instructions:</h3>
                <ol>
                    <li>Log in to your WordPress Dashboard.</li>
                    <li>Navigate to the page or post where you want to add the badge.</li>
                    <li>Use the Custom HTML block in the WordPress editor and paste the badge code there.</li>
                    <li>Save or update the page/post.</li>
                </ol>
            </div>

            <div id="squarespace" className="instructions" style={{ display: 'none', fontFamily: "Lora" }}>
                <h3>Squarespace Instructions:</h3>
                <ol>
                    <li>Log in to your Squarespace account and enter the editor for the site you want to modify.</li>
                    <li>Navigate to the page where you want to add the badge.</li>
                    <li>Add a 'Code' block to your page.</li>
                    <li>Paste the badge code into the Code block and Apply.</li>
                </ol>
            </div>
        </>
    );
}

export default BadgeDisplay;
