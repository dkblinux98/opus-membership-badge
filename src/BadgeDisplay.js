// src/BadgeDisplay.js
import React from "react";

const BadgeDisplay = () => {
  const copyToClipboard = () => {
    const copyText = document.getElementById("badgeCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    alert("Copied to clipboard");
  };

  const showInstructions = (platform) => {
    const instructions = document.getElementsByClassName("instructions");
    for (let i = 0; i < instructions.length; i++) {
      instructions[i].style.display = "none";
    }
    document.getElementById(platform).style.display = "block";
  };

  return (
    <div>
      <h1>Proudly Display Your Opus Membership on Your Site</h1>
      <p>Copy the code below to embed our badge on your website:</p>
      <textarea
        id="badgeCode"
        rows="4"
        readOnly
        style={{ width: "100%" }}
        value={`<a href="https://opusliteraryalliance.org" target="_blank">
          <img src="http://opusdigitalbadge.s3-website.us-east-2.amazonaws.com/opus-digital-badge.png" alt="Charter Member of Opus Literary Alliance" style="max-width: 100px; height: auto;">
        </a>`}
      />
      <button onClick={copyToClipboard} style={{ backgroundColor: "#FFCC02" }}>Copy Code</button>

      <h2>How to Add this Badge to Your Site</h2>
      <button onClick={() => showInstructions("wordpress")} style={{ backgroundColor: "#FFCC02" }}>WordPress Instructions</button>
      <button onClick={() => showInstructions("squarespace")} style={{ backgroundColor: "#FFCC02" }}>Squarespace Instructions</button>

      <div id="wordpress" className="instructions">
        <h3>WordPress Instructions:</h3>
        <ol>
            <li>Log in to your WordPress Dashboard.</li>
            <li>Navigate to the page or post where you want to add the badge.</li>
            <li>Use the Custom HTML block in the WordPress editor and paste the badge code there.</li>
            <li>Save or update the page/post.</li>
        </ol>
      </div>

      <div id="squarespace" className="instructions">
        <h3>Squarespace Instructions:</h3>
        <ol>
            <li>Log in to your Squarespace account and enter the editor for the site you want to modify.</li>
            <li>Navigate to the page where you want to add the badge.</li>
            <li>Add a 'Code' block to your page.</li>
            <li>Paste the badge code into the Code block and Apply.</li>
        </ol>
      </div>
    </div>
  );
};

export default BadgeDisplay;

