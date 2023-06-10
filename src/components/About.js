import React from "react";

export default function About(props) {
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "#212529" }}>
        <div my-3>
          <h5>Welcome to Text Analyzer!</h5>
        </div>
        <div>
          <p>
            Text Analyzer is a user-friendly website designed to simplify your
            text manipulation tasks. Created by Param Dalal, this powerful tool
            offers a range of functions to enhance your text editing experience.
            Whether you need to convert text to uppercase or lowercase, copy
            text, clear unwanted content, or remove extra spaces, Text Analyzer
            has got you covered.
          </p>
          <p>
            With Text Analyzer, transforming text has never been easier. Simply
            paste your text into the input field, and let the magic happen. The
            clean and intuitive interface ensures a seamless experience,
            allowing you to focus on your content without any distractions.
          </p>
          <br />
        </div>
        <div>
          <h6>Key Features:</h6>

          <li>
            Convert to Uppercase: Instantly transform your text to uppercase.
            Perfect for creating headers, titles, or emphasizing important
            information.
          </li>
          <li>
            Convert to Lowercase: Change your text to lowercase with a single
            click. Great for normalizing text or creating a more casual tone.
          </li>
          <li>
            Copy Text: Copy your modified text to the clipboard effortlessly.
            Easily transfer your edited text to other applications or share it
            with others.
          </li>
          <li>
            Remove Extra Spaces: Remove excess spaces between words or at the
            beginning or end of your text. Streamline your content for a more
            polished look.
          </li>
          <li>
            Clear Text: Quickly remove all content from the input field with the
            click of a button. Start fresh whenever you need a clean slate.
          </li>
          <br />
        </div>
        <div>
          <p>
            In addition to its functionality, Text Analyzer also offers a dark
            mode option for an enhanced viewing experience. Whether you prefer
            working in a low-light environment or simply enjoy the aesthetic
            appeal, our dark mode option is sure to please.
          </p>
          <p>
            Text Analyzer was developed with the goal of providing a simple and
            efficient text editing tool. With its robust features and
            easy-to-use interface, it aims to meet the needs of both casual
            users and professionals alike.
          </p>
        </div>
      </div>
    </>
  );
}
