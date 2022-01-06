import React from "react";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a simple react page to leave feeback for a service</p>
        <p>Version: 1.0.0</p>
        <p>
          <a href="/">Back to home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
