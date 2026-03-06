// Data Definitions
/* Topic: JavaScript Programming Essentials | CO Number: CO3 */
/* Topic: Objects & Arrays | CO Number: CO3 */
/* Topic: Number literals: hexadecimal, scientific | CO Number: CO3 */
// Topic: Objects & Arrays | CO Number: CO3
// Topic: JavaScript Fundamentals | CO Number: CO3
// Topic: Basic expressions and operators | CO Number: CO3
const COURSES = [
    {
        id: "course-html",
        title: "Complete HTML & HTML5 Masterclass",
        category: "Web Development",
        duration: "6 Hours",
        level: "Easy",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Master the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        id: "course-css",
        title: "Modern CSS3 Masterclass",
        category: "Design & UX",
        duration: "10 Hours",
        level: "Medium",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Learn to style beautiful websites with Flexbox, CSS Grid, and modern design principles."
    },
    {
        id: "course-js",
        title: "Modern JavaScript (ES6+)",
        category: "Programming",
        duration: "15 Hours",
        level: "Hard",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "From basic syntax to advanced concepts like closures, promises, and DOM manipulation."
    }
];

const MODULES = [
    {
        id: "html-01",
        courseId: "course-html",
        title: "HTML Basics: Structure & Doctype",
        category: "HTML Fundamentals",
        duration: "10 min",
        level: "Easy",
        problemId: "html-struct-1",
        content: `
            <h2>1. Introduction to HTML</h2>
            <p>HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages.</p>
            <h3>The HTML5 Structure</h3>
            <p>Every HTML5 document should start with a doctype declaration and have a root html element.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Main Heading&lt;/h1&gt;
  &lt;p&gt;Content paragraph...&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        `
    },
    {
        id: "html-02",
        courseId: "course-html",
        title: "HTML Elements and Attributes",
        category: "HTML Fundamentals",
        duration: "15 min",
        level: "Easy",
        problemId: "html-attr-7",
        /* Topic: JavaScript Fundamentals | CO Number: CO3 */
        /* Topic: Basic expressions and operators | CO Number: CO3 */
        content: `
            <h2>Elements and Attributes</h2>
            <p>HTML elements usually consist of a start tag and an end tag, with the content inserted in between.</p>
            <p>Attributes provide additional information about elements. They are always specified in the start tag.</p>
            <pre><code>&lt;a href="https://example.com" title="Example HTML Attributes"&gt;This is a link&lt;/a&gt;</code></pre>
        `
    },
    {
        id: "html-03",
        courseId: "course-html",
        title: "Headings and Paragraphs",
        category: "Text Formatting",
        duration: "10 min",
        level: "Easy",
        problemId: "html-text-2",
        content: `
            <h2>Text Content</h2>
            <p>HTML provides six levels of headings, <code>&lt;h1&gt;</code> being the most important and <code>&lt;h6&gt;</code> the least.</p>
            <p>Paragraphs are defined with the <code>&lt;p&gt;</code> tag.</p>
            <pre><code>&lt;h1&gt;Global News&lt;/h1&gt;
&lt;p&gt;This is a paragraph of text.&lt;/p&gt;</code></pre>
        `
    },
    {
        id: "html-04",
        courseId: "course-html",
        title: "Text Formatting",
        category: "Text Formatting",
        duration: "15 min",
        level: "Easy",
        problemId: "html-format-8",
        content: `
            <h2>Formatting Elements</h2>
            <p>HTML contains several elements for defining text with a special meaning.</p>
            <ul>
                <li><code>&lt;b&gt;</code> - Bold text</li>
                <li><code>&lt;strong&gt;</code> - Important text</li>
                <li><code>&lt;i&gt;</code> - Italic text</li>
                <li><code>&lt;em&gt;</code> - Emphasized text</li>
                <li><code>&lt;mark&gt;</code> - Marked text</li>
            </ul>
            <pre><code>&lt;p&gt;This is &lt;strong&gt;important&lt;/strong&gt; text.&lt;/p&gt;</code></pre>
        `
    },
    {
        id: "html-05",
        courseId: "course-html",
        title: "Lists: Ordered and Unordered",
        category: "Structure",
        duration: "15 min",
        level: "Easy",
        problemId: "html-lists-3",
        content: `
            <h2>Displaying Lists</h2>
            <p>Use <code>&lt;ul&gt;</code> for unordered (bulleted) lists and <code>&lt;ol&gt;</code> for ordered (numbered) lists.</p>
            <p>Individual items are defined using the <code>&lt;li&gt;</code> tag.</p>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;Coffee&lt;/li&gt;
  &lt;li&gt;Tea&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        `
    },
    {
        id: "html-06",
        courseId: "course-html",
        title: "Links and Navigation",
        category: "Navigation",
        duration: "12 min",
        level: "Easy",
        problemId: "html-links-4",
        content: `
            <h2>Hyperlinks</h2>
            <p>The <code>&lt;a&gt;</code> tag defines a hyperlink, which is used to link from one page to another.</p>
            <p>The most important attribute is <code>href</code>, which indicates the link's destination.</p>
            <pre><code>&lt;a href="https://www.google.com" target="_blank"&gt;Visit Google&lt;/a&gt;</code></pre>
        `
    },
    {
        id: "html-07",
        courseId: "course-html",
        title: "HTML Images",
        category: "Media",
        duration: "15 min",
        level: "Easy",
        problemId: "html-img-9",
        content: `
            <h2>Embedding Images</h2>
            <p>Images can improve the design and the appearance of a web page.</p>
            <p>The <code>&lt;img&gt;</code> tag is empty, it contains attributes only, and does not have a closing tag.</p>
            <pre><code>&lt;img src="image.jpg" alt="A descriptive text" width="500" height="600"&gt;</code></pre>
        `
    },
    {
        id: "html-08",
        courseId: "course-html",
        title: "Block & Inline Elements",
        category: "Layout",
        duration: "20 min",
        level: "Medium",
        problemId: "html-block-10",
        content: `
            <h2>Block vs Inline</h2>
            <p>Every HTML element has a default display value depending on what type of element it is.</p>
            <p>A block-level element always starts on a new line and takes up the full width available (like <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>).</p>
            <p>An inline element does not start on a new line and only takes up as much width as necessary (like <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).</p>
        `
    },
    {
        id: "html-09",
        courseId: "course-html",
        title: "Classes and IDs",
        category: "Attributes",
        duration: "15 min",
        level: "Easy",
        problemId: "html-class-11",
        content: `
            <h2>Identifying Elements</h2>
            <p>The <code>id</code> attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id.</p>
            <p>The <code>class</code> attribute is often used to point to a class name in a style sheet. It can be used by multiple HTML elements.</p>
            <pre><code>&lt;div id="header" class="dark-theme main-header"&gt;...&lt;/div&gt;</code></pre>
        `
    },
    {
        id: "html-10",
        courseId: "course-html",
        title: "HTML Tables",
        category: "Data Grids",
        duration: "20 min",
        level: "Medium",
        problemId: "html-table-5",
        content: `
            <h2>Creating Tables</h2>
            <p>An HTML table consists of one <code>&lt;table&gt;</code> element and one or more <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> elements.</p>
            <pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Firstname&lt;/th&gt;
    &lt;th&gt;Lastname&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Jill&lt;/td&gt;
    &lt;td&gt;Smith&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        `
    },
    {
        id: "html-11",
        courseId: "course-html",
        title: "HTML Forms and Inputs",
        category: "User Interaction",
        duration: "30 min",
        level: "Medium",
        problemId: "html-forms-6",
        /* Topic: JavaScript Interactivity, DOM | CO Number: CO4 */
        /* Topic: DOM & Events | CO Number: CO4 */
        content: `
            <h2>Collecting User Input</h2>
            <p>The <code>&lt;form&gt;</code> element is used to create an HTML form for user input.</p>
            <p>The <code>&lt;input&gt;</code> element is the most important form element.</p>
            <pre><code>&lt;form&gt;
  &lt;label for="fname"&gt;First name:&lt;/label&gt;&lt;br&gt;
  &lt;input type="text" id="fname" name="fname"&gt;
&lt;/form&gt;</code></pre>
        `
    },
    {
        id: "html-12",
        courseId: "course-html",
        title: "Semantic HTML5",
        category: "Structure",
        duration: "25 min",
        level: "Medium",
        problemId: "html-semantic-12",
        content: `
            <h2>Meaningful Markups</h2>
            <p>Semantic elements clearly describe their meaning to both the browser and the developer.</p>
            <p>Examples of non-semantic elements: <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>. Examples of semantic elements: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code>.</p>
            <pre><code>&lt;article&gt;
  &lt;h2&gt;Google Chrome&lt;/h2&gt;
  &lt;p&gt;Google Chrome is a web browser developed by Google...&lt;/p&gt;
&lt;/article&gt;</code></pre>
        `
    },
    {
        id: "html-13",
        courseId: "course-html",
        title: "HTML Media: Audio & Video",
        category: "Media",
        duration: "20 min",
        level: "Medium",
        problemId: "html-media-13",
        content: `
            <h2>Embedding Media</h2>
            <p>HTML5 introduced standard ways to embed audio and video using <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements.</p>
            <pre><code>&lt;video width="320" height="240" controls&gt;
  &lt;source src="movie.mp4" type="video/mp4"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;</code></pre>
        `
    },
    {
        id: "html-14",
        courseId: "course-html",
        title: "HTML Iframes",
        category: "Advanced",
        duration: "15 min",
        level: "Easy",
        problemId: "html-iframe-14",
        content: `
            <h2>Inline Frames</h2>
            <p>An HTML iframe is used to display a web page within a web page.</p>
            <pre><code>&lt;iframe src="https://www.example.com" width="100%" height="300" title="Example Iframe"&gt;&lt;/iframe&gt;</code></pre>
        `
    },
    {
        id: "css-01",
        courseId: "course-css",
        title: "CSS Basics: Selectors & Colors",
        category: "CSS Fundamentals",
        duration: "15 min",
        level: "Easy",
        problemId: "css-select-1",
        content: `
            <h2>1. Introduction to CSS</h2>
            <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen.</p>
            <h3>Basic Selectors</h3>
            <p>You can select elements by tag name, class (.), or ID (#).</p>
            <pre><code>/* Tag Selector */
h1 { color: blue; }

/* Class Selector */
.text-center { text-align: center; }

/* ID Selector */
#unique-header { font-size: 24px; }</code></pre>
        `
    },
    {
        id: "css-02",
        courseId: "course-css",
        title: "The CSS Box Model",
        category: "CSS Layout",
        duration: "20 min",
        level: "Medium",
        problemId: "css-box-1",
        content: `
            <h2>Standard Box Model</h2>
            <p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>
            <pre><code>.box {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}</code></pre>
        `
    },
    {
        id: "css-03",
        courseId: "course-css",
        title: "Flexbox Fundamentals",
        category: "CSS Layout",
        duration: "25 min",
        level: "Medium",
        problemId: "css-flex-1",
        content: `
            <h2>CSS Flexbox</h2>
            <p>Flexbox makes it easier to design flexible responsive layout structure without using float or positioning.</p>
            <pre><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
}</code></pre>
        `
    },
    {
        id: "css-04",
        courseId: "course-css",
        title: "Typography & Fonts",
        category: "Design",
        duration: "15 min",
        level: "Easy",
        problemId: "css-typo-1",
        content: `
            <h2>Styling Text</h2>
            <p>CSS provides many properties for styling text, including font-family, font-size, font-weight, and line-height.</p>
            <pre><code>p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
}</code></pre>
        `
    },
    {
        id: "js-01",
        courseId: "course-js",
        title: "JS Basics: Variables & Data Types",
        category: "JS Fundamentals",
        duration: "20 min",
        level: "Easy",
        problemId: "js-vars-1",
        content: `
            <h2>1. Introduction to JavaScript</h2>
            <p>JavaScript is a versatile programming language that brings interactivity to websites.</p>
            <h3>Declaring Variables</h3>
            <p>Use <code>let</code> for variables that can change and <code>const</code> for constants.</p>
            <pre><code>const name = "Alice";
let score = 0;

score = score + 10;
console.log(name, score);</code></pre>
        `
    },
    {
        id: "js-02",
        courseId: "course-js",
        title: "Functions & Parameters",
        category: "JS Fundamentals",
        duration: "25 min",
        level: "Medium",
        problemId: "js-func-1",
        /* Topic: Functions | CO Number: CO3 */
        /* Topic: Arrow functions | CO Number: CO3 */
        /* Topic: Callback functions | CO Number: CO3 */
        content: `
            <h2>JavaScript Functions</h2>
            <p>A function is a block of code designed to perform a particular task.</p>
            <pre><code>function greet(name) {
  return "Hello " + name;
}

console.log(greet("Antigravity"));</code></pre>
        `
    },
    {
        id: "js-03",
        courseId: "course-js",
        title: "DOM Manipulation",
        category: "Web Interactivity",
        duration: "30 min",
        level: "Hard",
        problemId: "js-dom-1",
        content: `
            <h3>The Document Object Model</h3>
            <p>The DOM is a programming interface for web documents. It represents the page so programs can change the document structure, style, and content.</p>
            /* Topic: DOM manipulation | CO Number: CO4 */
            /* Topic: Event handling | CO Number: CO4 */
            <pre><code>const el = document.getElementById("title");
el.style.color = "blue";
el.innerHTML = "Updated Title";</code></pre>
        `
    },
    {
        id: "css-05",
        courseId: "course-css",
        title: "CSS Grid Layout",
        category: "CSS Layout",
        duration: "25 min",
        level: "Hard",
        problemId: "css-grid-5",
        content: `
            <h2>CSS Grid Layout</h2>
            <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
            <pre><code>.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}</code></pre>
        `
    },
    {
        id: "css-06",
        courseId: "course-css",
        title: "Positioning Elements",
        category: "CSS Layout",
        duration: "20 min",
        level: "Medium",
        problemId: "css-pos-6",
        content: `
            <h2>The position Property</h2>
            <p>The <code>position</code> property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
            <pre><code>.absolute-box {
  position: absolute;
  top: 50px;
  right: 10px;
}</code></pre>
        `
    },
    {
        id: "css-07",
        courseId: "course-css",
        title: "Transitions",
        category: "Animations",
        duration: "15 min",
        level: "Easy",
        problemId: "css-trans-7",
        content: `
            <h2>CSS Transitions</h2>
            <p>CSS transitions allows you to change property values smoothly, over a given duration.</p>
            <pre><code>.btn {
  background-color: blue;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: darkblue;
}</code></pre>
        `
    },
    {
        id: "css-08",
        courseId: "course-css",
        title: "Media Queries & Responsiveness",
        category: "Responsive Design",
        duration: "20 min",
        level: "Medium",
        problemId: "css-media-8",
        content: `
            <h2>Media Queries</h2>
            <p>Media queries are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).</p>
            <pre><code>@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}</code></pre>
        `
    },
    {
        id: "css-09",
        courseId: "course-css",
        title: "CSS Variables",
        category: "Advanced CSS",
        duration: "15 min",
        level: "Medium",
        problemId: "css-var-9",
        content: `
            <h2>Custom Properties</h2>
            <p>CSS variables (Custom Properties) are entities defined by CSS authors that contain specific values to be reused throughout a document.</p>
            <pre><code>:root {
  --main-color: #06c;
}
.box {
  color: var(--main-color);
}</code></pre>
        `
    },
    {
        id: "css-10",
        courseId: "course-css",
        title: "Pseudo-classes",
        category: "Selectors",
        duration: "15 min",
        level: "Easy",
        problemId: "css-pseudo-10",
        content: `
            <h2>Interactive States</h2>
            <p>A pseudo-class is used to define a special state of an element, like <code>:hover</code>, <code>:active</code>, or <code>:first-child</code>.</p>
            <pre><code>a:hover {
  color: red;
}</code></pre>
        `
    },
    {
        id: "css-11",
        courseId: "course-css",
        title: "Shadows and Gradients",
        category: "Design",
        duration: "20 min",
        level: "Medium",
        problemId: "css-shadow-11",
        content: `
            <h2>Visual Effects</h2>
            <p>Add depth to your designs using box-shadow and text-shadow, and create smooth color transitions with linear or radial gradients.</p>
            <pre><code>.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background: linear-gradient(to right, red, yellow);
}</code></pre>
        `
    },
    {
        id: "css-12",
        courseId: "course-css",
        title: "Transforms (2D & 3D)",
        category: "Animations",
        duration: "20 min",
        level: "Medium",
        problemId: "css-transform-12",
        content: `
            <h2>Element Transformations</h2>
            <p>The <code>transform</code> property applies a 2D or 3D transformation to an element allowing you to rotate, scale, move, or skew it.</p>
            <pre><code>.box {
  transform: rotate(45deg) scale(1.5);
}</code></pre>
        `
    },
    {
        id: "css-13",
        courseId: "course-css",
        title: "Z-Index & Stacking Context",
        category: "CSS Layout",
        duration: "15 min",
        level: "Medium",
        problemId: "css-zindex-13",
        content: `
            <h2>Depth along Z-axis</h2>
            <p>The <code>z-index</code> property specifies the stack order of an element. It only works on positioned elements.</p>
            <pre><code>.overlay {
  position: absolute;
  z-index: 100;
}</code></pre>
        `
    },
    {
        id: "css-14",
        courseId: "course-css",
        title: "CSS Keyframe Animations",
        category: "Animations",
        duration: "25 min",
        level: "Hard",
        problemId: "css-anim-14",
        content: `
            <h2>Custom Animations</h2>
            <p>The <code>@keyframes</code> rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another.</p>
            <pre><code>@keyframes slidein {
  from { transform: translateX(0%); }
  to { transform: translateX(100%); }
}
.sliding-box {
  animation: slidein 3s ease-in-out infinite;
}</code></pre>
        `
    },
    {
        id: "js-04",
        courseId: "course-js",
        title: "Control Flow (If/Else)",
        category: "Logic",
        duration: "15 min",
        level: "Easy",
        problemId: "js-if-4",
        content: `
            <h2>Conditional Statements</h2>
            <p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to perform different actions based on different conditions.</p>
            <pre><code>if (time &lt; 12) {
  greeting = "Good morning";
} else {
  greeting = "Good day";
}
// Topic: Conditions | CO Number: CO3</code></pre>
        `
    },
    {
        id: "js-05",
        courseId: "course-js",
        title: "Loops (For, While)",
        category: "Logic",
        duration: "20 min",
        level: "Medium",
        problemId: "js-loop-5",
        content: `
            <h2>Iterating Blocks of Code</h2>
            <p>Loops can execute a block of code a number of times.</p>
            <pre><code>for (let i = 0; i &lt; 5; i++) {
  console.log("Iteration: " + i);
}
// Topic: Loops | CO Number: CO3</code></pre>
        `
    },
    {
        id: "js-06",
        courseId: "course-js",
        title: "Arrays and Array Methods",
        category: "Data Structures",
        duration: "25 min",
        level: "Medium",
        problemId: "js-arr-6",
        content: `
            <h2>Working with Arrays</h2>
            <p>Arrays are special variables that can hold more than one value at a time. Methods like map, filter, and reduce are powerful.</p>
            <pre><code>const fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango");
const upperFruits = fruits.map(f =&gt; f.toUpperCase());</code></pre>
        `
    },
    {
        id: "js-07",
        courseId: "course-js",
        title: "Objects and Properties",
        category: "Data Structures",
        duration: "20 min",
        level: "Medium",
        problemId: "js-obj-7",
        content: `
            <h2>JS Objects</h2>
            <p>Objects are variables too, but they can contain many values represented as name/value pairs.</p>
            <pre><code>const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
console.log(person.firstName);</code></pre>
        `
    },
    {
        id: "js-08",
        courseId: "course-js",
        title: "Arrow Functions",
        category: "Advanced JS",
        duration: "15 min",
        level: "Medium",
        problemId: "js-arrow-8",
        content: `
            <h2>ES6 Arrow Functions</h2>
            <p>Arrow functions allow us to write shorter function syntax and bind <code>this</code> lexically.</p>
            <pre><code>const add = (a, b) =&gt; a + b;
console.log(add(5, 10));
// Topic: Functions | CO Number: CO3
// Topic: Arrow functions | CO Number: CO3
// Topic: Callback functions | CO Number: CO3</code></pre>
        `
    },
    {
        id: "js-09",
        courseId: "course-js",
        title: "Classes in JS",
        category: "Object-Oriented JS",
        duration: "25 min",
        level: "Hard",
        problemId: "js-class-9",
        content: `
            <h2>ES6 Classes</h2>
            <p>JavaScript Classes are templates for JavaScript Objects.</p>
            <pre><code>class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}</code></pre>
        `
    },
    {
        id: "js-10",
        courseId: "course-js",
        title: "Promises",
        category: "Asynchronous JS",
        duration: "25 min",
        level: "Hard",
        problemId: "js-promise-10",
        content: `
            <h2>Handling Asynchronous Tasks</h2>
            <p>A Promise is an object representing the eventual completion or failure of an asynchronous operation.</p>
            <pre><code>const myPromise = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve("Success!"), 1000);
});
myPromise.then(res =&gt; console.log(res));</code></pre>
        `
    },
    {
        id: "js-11",
        courseId: "course-js",
        title: "Async / Await",
        category: "Asynchronous JS",
        duration: "20 min",
        level: "Hard",
        problemId: "js-async-11",
        content: `
            <h2>Modern Async</h2>
            <p>The async/await keywords make asynchronous code look and behave more like synchronous code.</p>
            <pre><code>async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}</code></pre>
        `
    },
    {
        id: "js-12",
        courseId: "course-js",
        title: "Error Handling",
        category: "Logic",
        duration: "15 min",
        level: "Medium",
        problemId: "js-err-12",
        content: `
            <h2>Try, Catch, Finally</h2>
            <p>The <code>try</code> statement lets you test a block of code for errors, and <code>catch</code> lets you handle the error.</p>
            <pre><code>try {
  nonExistentFunction();
} catch (error) {
  console.error("An error occurred: " + error.message);
}</code></pre>
        `
    },
    {
        id: "js-13",
        courseId: "course-js",
        title: "Event Listeners",
        category: "Web Interactivity",
        duration: "20 min",
        level: "Medium",
        problemId: "js-event-13",
        /* Topic: DOM & Events | CO Number: CO4 */
        /* Topic: Event handling | CO Number: CO4 */
        content: `
            <h2>Responding to Users</h2>
            <p>The <code>addEventListener()</code> method attaches an event handler to the specified element.</p>
            <pre><code>document.getElementById("myBtn").addEventListener("click", function() {
  alert("Button was clicked!");
});</code></pre>
        `
    },
    {
        id: "js-14",
        courseId: "course-js",
        title: "Local Storage",
        category: "Web APIs",
        duration: "20 min",
        level: "Hard",
        problemId: "js-storage-14",
        content: `
    <h2>Saving Data Locally</h2>
            <p>The <code>localStorage</code> object allows you to save key/value pairs in the browser indefinitely.</p>
            <pre><code>localStorage.setItem("username", "JohnDoe");
const user = localStorage.getItem("username");
console.log(user);</code></pre>
        `
    },
    {
        id: "css-05",
        courseId: "course-css",
        title: "CSS Grid Layout",
        category: "CSS Layout",
        duration: "25 min",
        level: "Hard",
        problemId: "css-grid-5",
        content: `
    <h2>CSS Grid Layout</h2>
            <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
            <pre><code>.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}</code></pre>
        `
    },
    {
        id: "css-06",
        courseId: "course-css",
        title: "Positioning Elements",
        category: "CSS Layout",
        duration: "20 min",
        level: "Medium",
        problemId: "css-pos-6",
        content: `
    < h2 > The position Property</h2 >
            <p>The <code>position</code> property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
            <pre><code>.absolute-box {
  position: absolute;
  top: 50px;
  right: 10px;
}</code></pre>
        `
    },
    {
        id: "css-07",
        courseId: "course-css",
        title: "Transitions",
        category: "Animations",
        duration: "15 min",
        level: "Easy",
        problemId: "css-trans-7",
        content: `
    < h2 > CSS Transitions</h2 >
            <p>CSS transitions allows you to change property values smoothly, over a given duration.</p>
            <pre><code>.btn {
  background-color: blue;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: darkblue;
}</code></pre>
        `
    },
    {
        id: "css-08",
        courseId: "course-css",
        title: "Media Queries & Responsiveness",
        category: "Responsive Design",
        duration: "20 min",
        level: "Medium",
        problemId: "css-media-8",
        content: `
    < h2 > Media Queries</h2 >
            <p>Media queries are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).</p>
            <pre><code>@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}</code></pre>
        `
    },
    {
        id: "css-09",
        courseId: "course-css",
        title: "CSS Variables",
        category: "Advanced CSS",
        duration: "15 min",
        level: "Medium",
        problemId: "css-var-9",
        content: `
    < h2 > Custom Properties</h2 >
            <p>CSS variables (Custom Properties) are entities defined by CSS authors that contain specific values to be reused throughout a document.</p>
            <pre><code>:root {
  --main-color: #06c;
}
.box {
  color: var(--main-color);
}</code></pre>
        `
    },
    {
        id: "css-10",
        courseId: "course-css",
        title: "Pseudo-classes",
        category: "Selectors",
        duration: "15 min",
        level: "Easy",
        problemId: "css-pseudo-10",
        content: `
    < h2 > Interactive States</h2 >
            <p>A pseudo-class is used to define a special state of an element, like <code>:hover</code>, <code>:active</code>, or <code>:first-child</code>.</p>
            <pre><code>a:hover {
  color: red;
}</code></pre>
        `
    },
    {
        id: "css-11",
        courseId: "course-css",
        title: "Shadows and Gradients",
        category: "Design",
        duration: "20 min",
        level: "Medium",
        problemId: "css-shadow-11",
        content: `
    < h2 > Visual Effects</h2 >
            <p>Add depth to your designs using box-shadow and text-shadow, and create smooth color transitions with linear or radial gradients.</p>
            <pre><code>.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background: linear-gradient(to right, red, yellow);
}</code></pre>
        `
    },
    {
        id: "css-12",
        courseId: "course-css",
        title: "Transforms (2D & 3D)",
        category: "Animations",
        duration: "20 min",
        level: "Medium",
        problemId: "css-transform-12",
        content: `
    < h2 > Element Transformations</h2 >
            <p>The <code>transform</code> property applies a 2D or 3D transformation to an element allowing you to rotate, scale, move, or skew it.</p>
            <pre><code>.box {
  transform: rotate(45deg) scale(1.5);
}</code></pre>
        `
    },
    {
        id: "css-13",
        courseId: "course-css",
        title: "Z-Index & Stacking Context",
        category: "CSS Layout",
        duration: "15 min",
        level: "Medium",
        problemId: "css-zindex-13",
        content: `
    < h2 > Depth along Z - axis</h2 >
            <p>The <code>z-index</code> property specifies the stack order of an element. It only works on positioned elements.</p>
            <pre><code>.overlay {
  position: absolute;
  z-index: 100;
}</code></pre>
        `
    },
    {
        id: "css-14",
        courseId: "course-css",
        title: "CSS Keyframe Animations",
        category: "Animations",
        duration: "25 min",
        level: "Hard",
        problemId: "css-anim-14",
        content: `
    < h2 > Custom Animations</h2 >
            <p>The <code>@keyframes</code> rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another.</p>
            <pre><code>@keyframes slidein {
  from { transform: translateX(0%); }
  to { transform: translateX(100%); }
}
.sliding-box {
  animation: slidein 3s ease-in-out infinite;
}</code></pre>
        `
    },
    {
        id: "js-04",
        courseId: "course-js",
        title: "Control Flow (If/Else)",
        category: "Logic",
        duration: "15 min",
        level: "Easy",
        problemId: "js-if-4",
        content: `
    < h2 > Conditional Statements</h2 >
            <p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to perform different actions based on different conditions.</p>
            <pre><code>if (time &lt; 12) {
  greeting = "Good morning";
} else {
  greeting = "Good day";
}</code></pre>
        `
    },
    {
        id: "js-05",
        courseId: "course-js",
        title: "Loops (For, While)",
        category: "Logic",
        duration: "20 min",
        level: "Medium",
        problemId: "js-loop-5",
        content: `
    < h2 > Iterating Blocks of Code</h2 >
            <p>Loops can execute a block of code a number of times.</p>
            <pre><code>for (let i = 0; i &lt; 5; i++) {
  console.log("Iteration: " + i);
}</code></pre>
        `
    },
    {
        id: "js-06",
        courseId: "course-js",
        title: "Arrays and Array Methods",
        category: "Data Structures",
        duration: "25 min",
        level: "Medium",
        problemId: "js-arr-6",
        content: `
    < h2 > Working with Arrays</h2 >
            <p>Arrays are special variables that can hold more than one value at a time. Methods like map, filter, and reduce are powerful.</p>
            <pre><code>const fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango");
const upperFruits = fruits.map(f =&gt; f.toUpperCase());</code></pre>
`
    },
    {
        id: "js-07",
        courseId: "course-js",
        title: "Objects and Properties",
        category: "Data Structures",
        duration: "20 min",
        level: "Medium",
        problemId: "js-obj-7",
        content: `
    < h2 > JS Objects</h2 >
            <p>Objects are variables too, but they can contain many values represented as name/value pairs.</p>
            <pre><code>const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
console.log(person.firstName);</code></pre>
`
    },
    {
        id: "js-08",
        courseId: "course-js",
        title: "Arrow Functions",
        category: "Advanced JS",
        duration: "15 min",
        level: "Medium",
        problemId: "js-arrow-8",
        content: `
    < h2 > ES6 Arrow Functions</h2 >
            <p>Arrow functions allow us to write shorter function syntax and bind <code>this</code> lexically.</p>
            <pre><code>const add = (a, b) =&gt; a + b;
console.log(add(5, 10));</code></pre>
`
    },
    {
        id: "js-09",
        courseId: "course-js",
        title: "Classes in JS",
        category: "Object-Oriented JS",
        duration: "25 min",
        level: "Hard",
        problemId: "js-class-9",
        content: `
    < h2 > ES6 Classes</h2 >
            <p>JavaScript Classes are templates for JavaScript Objects.</p>
            <pre><code>class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}</code></pre>
`
    },
    {
        id: "js-10",
        courseId: "course-js",
        title: "Promises",
        category: "Asynchronous JS",
        duration: "25 min",
        level: "Hard",
        problemId: "js-promise-10",
        content: `
    < h2 > Handling Asynchronous Tasks</h2 >
            <p>A Promise is an object representing the eventual completion or failure of an asynchronous operation.</p>
            <pre><code>const myPromise = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve("Success!"), 1000);
});
myPromise.then(res =&gt; console.log(res));</code></pre>
`
    },
    {
        id: "js-11",
        courseId: "course-js",
        title: "Async / Await",
        category: "Asynchronous JS",
        duration: "20 min",
        level: "Hard",
        problemId: "js-async-11",
        content: `
    < h2 > Modern Async</h2 >
            <p>The async/await keywords make asynchronous code look and behave more like synchronous code.</p>
            <pre><code>async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}</code></pre>
`
    },
    {
        id: "js-12",
        courseId: "course-js",
        title: "Error Handling",
        category: "Logic",
        duration: "15 min",
        level: "Medium",
        problemId: "js-err-12",
        content: `
    < h2 > Try, Catch, Finally</h2 >
            <p>The <code>try</code> statement lets you test a block of code for errors, and <code>catch</code> lets you handle the error.</p>
            <pre><code>try {
  nonExistentFunction();
} catch (error) {
  console.error("An error occurred: " + error.message);
}</code></pre>
`
    },
    {
        id: "js-13",
        courseId: "course-js",
        title: "Event Listeners",
        category: "Web Interactivity",
        duration: "20 min",
        level: "Medium",
        problemId: "js-event-13",
        content: `
    < h2 > Responding to Users</h2 >
            <p>The <code>addEventListener()</code> method attaches an event handler to the specified element.</p>
            <pre><code>document.getElementById("myBtn").addEventListener("click", function() {
  alert("Button was clicked!");
});</code></pre>
`
    },
    {
        id: "js-14",
        courseId: "course-js",
        title: "Local Storage",
        category: "Web APIs",
        duration: "20 min",
        level: "Hard",
        problemId: "js-storage-14",
        content: `
    < h2 > Saving Data Locally</h2 >
            <p>The <code>localStorage</code> object allows you to save key/value pairs in the browser indefinitely.</p>
            <pre><code>localStorage.setItem("username", "JohnDoe");
const user = localStorage.getItem("username");
console.log(user);</code></pre>
`    },
    {
        id: "html-attr-7",
        title: "HTML Attributes",
        difficulty: "Easy",
        tags: ["HTML Fundamentals", "Attributes"],
        status: "unsolved",
        description: "Create an anchor tag with an href attribute pointing to example.com and a title attribute.",
        initialCode: "<!-- Write your HTML here -->\n",
        validation: (code) => code.includes("<a ") && code.includes("href=") && code.includes("title=")
    },
    {
        id: "html-format-8",
        title: "Text Emphasis",
        difficulty: "Easy",
        tags: ["HTML Text", "Formatting"],
        status: "unsolved",
        description: "Mark a word as important using the strong tag and another as emphasized using the em tag.",
        initialCode: "<p>This is a normal text but this word is very important, and this one has emphasis.</p>",
        validation: (code) => code.includes("<strong>") && code.includes("<em>")
    },
    {
        id: "html-img-9",
        title: "Image Embedding",
        difficulty: "Easy",
        tags: ["HTML Images"],
        status: "unsolved",
        description: "Embed an image with an src attribute of 'logo.png' and an alt attribute 'Logo'.",
        initialCode: "<!-- Image tag here -->\n",
        validation: (code) => code.includes("<img ") && code.includes("src=") && code.includes("alt=")
    },
    {
        id: "html-block-10",
        title: "Divs and Spans",
        difficulty: "Medium",
        tags: ["Structure"],
        status: "unsolved",
        description: "Create a div block that contains a span for grouping inline elements.",
        initialCode: "<!-- Write a div containing a span -->\n",
        validation: (code) => code.includes("<div>") && code.includes("<span>")
    },
    {
        id: "html-class-11",
        title: "Classes and IDs",
        difficulty: "Easy",
        tags: ["Attributes"],
        status: "unsolved",
        description: "Create a paragraph with an id of 'main-text' and a class of 'highlighted'.",
        initialCode: "<p>Special Text</p>",
        validation: (code) => code.includes("id=") && code.includes("class=")
    },
    {
        id: "html-semantic-12",
        title: "Semantic HTML",
        difficulty: "Medium",
        tags: ["Structure"],
        status: "unsolved",
        description: "Create a layout structure using a header, main, and footer element.",
        initialCode: "<!-- Layout here -->\n",
        validation: (code) => code.includes("<header>") && code.includes("<main>") && code.includes("<footer>")
    },
    {
        id: "html-media-13",
        title: "Audio and Video",
        difficulty: "Medium",
        tags: ["Media"],
        status: "unsolved",
        description: "Embed a video element with controls enabled.",
        initialCode: "<!-- Video element here -->\n",
        validation: (code) => code.includes("<video ") && code.includes("controls")
    },
    {
        id: "html-iframe-14",
        title: "HTML Iframe",
        difficulty: "Medium",
        tags: ["Advanced", "Embed"],
        status: "unsolved",
        description: "Embed another webpage using an iframe with a src attribute.",
        initialCode: "<!-- Iframe element here -->\n",
        validation: (code) => code.includes("<iframe ") && code.includes("src=")
    }
];

const PROBLEMS = [
    {
        id: "html-struct-1",
        title: "Basic Structure",
        difficulty: "Easy",
        tags: ["HTML Fundamentals"],
        status: "unsolved",
        description: "Create a basic HTML document with a head and body. include a title and a main heading.",
        initialCode: "<!-- Write your HTML structure here -->\n",
        validation: (code) => code.includes("<!DOCTYPE html>") && code.includes("<html>") && code.includes("<head>") && code.includes("<body>")
    },
    {
        id: "html-text-2",
        title: "Text Formatting",
        difficulty: "Easy",
        tags: ["HTML Text", "Formatting"],
        status: "unsolved",
        description: "Format a text block using bold, italic, and underline tags. Create a sentence where different words have different styles.",
        initialCode: "<!-- Write your HTML here -->\n\n",
        validation: (code) => (code.includes("<b>") || code.includes("<strong>")) && (code.includes("<i>") || code.includes("<em>"))
    },
    {
        id: "html-lists-3",
        title: "Ordered & Unordered Lists",
        difficulty: "Easy",
        tags: ["HTML Lists", "ul", "ol"],
        status: "unsolved",
        description: "Create a shopping list using an unordered list, and a recipe steps list using an ordered list.",
        initialCode: "<!-- Shopping List -->\n\n\n<!-- Recipe Steps -->\n",
        validation: (code) => code.includes("<ul>") && code.includes("<ol>")
    },
    {
        id: "html-links-4",
        title: "Hyperlinks & Navigation",
        difficulty: "Easy",
        tags: ["HTML Links", "img"],
        status: "unsolved",
        description: "Create a navigation menu with 3 links (Home, Components, Contact) and display an image below them.",
        initialCode: "<nav>\n  <!-- Links here -->\n</nav>\n\n<!-- Image here -->",
        validation: (code) => code.includes("<a href=") && code.includes("<img")
    },
    {
        id: "html-table-5",
        title: "Data Tables",
        difficulty: "Medium",
        tags: ["HTML Tables"],
        status: "unsolved",
        description: "Create a table showing a student schedule. Include headers for Day, Time, and Subject.",
        initialCode: "<table>\n  <!-- Table content -->\n</table>",
        validation: (code) => code.includes("<table>") && code.includes("<th>") && code.includes("<tr>")
    },
    {
        id: "html-forms-6",
        title: "Registration Form",
        difficulty: "Medium",
        tags: ["HTML Forms", "Input"],
        status: "unsolved",
        description: "Build a user registration form with fields for Name, Email, Password, and a Submit button.",
        initialCode: "<form>\n  \n</form>",
        validation: (code) => code.includes("<form") && code.includes('type="email"') && code.includes('type="password"')
    },
    {
        id: "html-attr-7",
        title: "HTML Attributes",
        difficulty: "Easy",
        tags: ["HTML Fundamentals", "Attributes"],
        status: "unsolved",
        description: "Create an anchor tag with an href attribute pointing to example.com and a title attribute.",
        initialCode: "<!-- Write your HTML here -->\n",
        validation: (code) => code.includes("<a ") && code.includes("href=") && code.includes("title=")
    },
    {
        id: "html-format-8",
        title: "Text Emphasis",
        difficulty: "Easy",
        tags: ["HTML Text", "Formatting"],
        status: "unsolved",
        description: "Mark a word as important using the strong tag and another as emphasized using the em tag.",
        initialCode: "<p>This is a normal text but this word is very important, and this one has emphasis.</p>",
        validation: (code) => code.includes("<strong>") && code.includes("<em>")
    },
    {
        id: "html-img-9",
        title: "Image Embedding",
        difficulty: "Easy",
        tags: ["HTML Images"],
        status: "unsolved",
        description: "Embed an image with an src attribute of 'logo.png' and an alt attribute 'Logo'.",
        initialCode: "<!-- Image tag here -->\n",
        validation: (code) => code.includes("<img ") && code.includes("src=") && code.includes("alt=")
    },
    {
        id: "html-block-10",
        title: "Divs and Spans",
        difficulty: "Medium",
        tags: ["Structure"],
        status: "unsolved",
        description: "Create a div block that contains a span for grouping inline elements.",
        initialCode: "<!-- Write a div containing a span -->\n",
        validation: (code) => code.includes("<div>") && code.includes("<span>")
    },
    {
        id: "html-class-11",
        title: "Classes and IDs",
        difficulty: "Easy",
        tags: ["Attributes"],
        status: "unsolved",
        description: "Create a paragraph with an id of 'main-text' and a class of 'highlighted'.",
        initialCode: "<p>Special Text</p>",
        validation: (code) => code.includes("id=") && code.includes("class=")
    },
    {
        id: "html-semantic-12",
        title: "Semantic HTML",
        difficulty: "Medium",
        tags: ["Structure"],
        status: "unsolved",
        description: "Create a layout structure using a header, main, and footer element.",
        initialCode: "<!-- Layout here -->\n",
        validation: (code) => code.includes("<header>") && code.includes("<main>") && code.includes("<footer>")
    },
    {
        id: "html-media-13",
        title: "Audio and Video",
        difficulty: "Medium",
        tags: ["Media"],
        status: "unsolved",
        description: "Embed a video element with controls enabled.",
        initialCode: "<!-- Video element here -->\n",
        validation: (code) => code.includes("<video ") && code.includes("controls")
    },
    {
        id: "html-iframe-14",
        title: "HTML Iframe",
        difficulty: "Medium",
        tags: ["Advanced", "Embed"],
        status: "unsolved",
        description: "Embed another webpage using an iframe with a src attribute.",
        initialCode: "<!-- Iframe element here -->\n",
        validation: (code) => code.includes("<iframe ") && code.includes("src=")
    },
    {
        id: "css-select-1",
        title: "Style My Header",
        difficulty: "Easy",
        tags: ["CSS Selectors", "Colors"],
        status: "unsolved",
        description: "Change the color of the h1 tag to blue and center align it using CSS.",
        initialCode: "<style>\n  /* Your CSS here */\n</style>\n<h1>Hello CSS</h1>",
        validation: (code) => code.includes("h1") && code.includes("color: blue") && code.includes("text-align: center")
    },
    {
        id: "js-vars-1",
        title: "Sum Two Numbers",
        difficulty: "Easy",
        tags: ["JS Basics", "Vars"],
        status: "unsolved",
        description: "Create a script that adds two numbers (5 and 10) and displays the result in an alert.",
        initialCode: "<script>\n  // Your JS here\n</script>",
        /* Topic: JavaScript Fundamentals | CO Number: CO3 */
        /* Topic: Basic expressions and operators | CO Number: CO3 */
        validation: (code) => code.includes("alert") && code.includes("15")
    },
    {
        id: "css-box-1",
        title: "Box Model Challenge",
        difficulty: "Medium",
        tags: ["CSS Box Model"],
        status: "unsolved",
        description: "Create a div with class 'box' and give it a width of 200px, padding of 20px, and a red border.",
        initialCode: "<style>\n  /* Your CSS here */\n</style>\n<div class='box'></div>",
        validation: (code) => code.includes(".box") && code.includes("width: 200px") && code.includes("padding: 20px") && code.includes("border")
    },
    {
        id: "css-flex-1",
        title: "Flex Centering",
        difficulty: "Medium",
        tags: ["Flexbox"],
        status: "unsolved",
        description: "Center a div within a container using Flexbox (justify-content and align-items).",
        initialCode: "<style>\n  .container { \n    height: 100vh; \n    /* Your Flexbox here */\n  }\n</style>\n<div class='container'>\n  <div class='item'>Centered</div>\n</div>",
        validation: (code) => code.includes("display: flex") && code.includes("justify-content: center") && code.includes("align-items: center")
    },
    {
        id: "js-func-1",
        title: "Multiplier Function",
        difficulty: "Medium",
        tags: ["JS Functions"],
        status: "unsolved",
        description: "Write a function named 'multiply' that takes two parameters and returns their product.",
        initialCode: "<script>\n  // Your function here\n</script>",
        validation: (code) => code.includes("function multiply") && code.includes("return") && (code.includes("*") || code.includes("product"))
    },
    {
        id: "js-dom-1",
        title: "Change Background",
        difficulty: "Hard",
        tags: ["DOM Manipulation"],
        status: "unsolved",
        description: "Write JavaScript to change the background color of a div with id 'target' to 'yellow'.",
        initialCode: "<div id='target' style='width:100px;height:100px;border:1px solid'>Box</div>\n<script>\n  // Your DOM code here\n</script>",
        validation: (code) => code.includes("document.getElementById") && code.includes("target") && code.includes("yellow")
    },
    {
        id: "css-grid-5",
        title: "Grid Layout Basics",
        difficulty: "Hard",
        tags: ["CSS Grid"],
        status: "unsolved",
        description: "Set a container to use grid layout and define 3 columns of equal width.",
        initialCode: "<style>\n  .container {\n    /* Your CSS here */\n  }\n</style>\n<div class='container'>\n  <div>1</div><div>2</div><div>3</div>\n</div>",
        validation: (code) => code.includes("display: grid") && code.includes("grid-template-columns")
    },
    {
        id: "css-pos-6",
        title: "Absolute Positioning",
        difficulty: "Medium",
        tags: ["CSS Layout"],
        status: "unsolved",
        description: "Position a box absolutely, 10px from the top and 20px from the right.",
        initialCode: "<style>\n  .box {\n    /* Your CSS here */\n  }\n</style>\n<div class='box'>Floating</div>",
        validation: (code) => code.includes("position: absolute") && code.includes("top: 10px") && code.includes("right: 20px")
    },
    {
        id: "css-trans-7",
        title: "Color Transition",
        difficulty: "Easy",
        tags: ["Animations"],
        status: "unsolved",
        description: "Add a transition to the background-color property taking 0.5 seconds.",
        initialCode: "<style>\n  .btn {\n    background-color: blue;\n    /* Your CSS here */\n  }\n</style>\n<button class='btn'>Hover Me</button>",
        validation: (code) => code.includes("transition:") && code.includes("0.5s")
    },
    {
        id: "css-media-8",
        title: "Media Query",
        difficulty: "Medium",
        tags: ["Responsive Design"],
        status: "unsolved",
        description: "Write a media query that hides an element with class .nav when the max-width is 600px.",
        initialCode: "<style>\n  /* Your Media Query here */\n</style>\n<div class='nav'>Menu</div>",
        validation: (code) => code.includes("@media") && code.includes("max-width: 600px") && code.includes("display: none")
    },
    {
        id: "css-var-9",
        title: "CSS Variable",
        difficulty: "Medium",
        tags: ["Advanced CSS"],
        status: "unsolved",
        description: "Declare a root CSS variable '--primary' set to purple, and apply it to a paragraph's color.",
        initialCode: "<style>\n  :root {\n    /* Declare variable */\n  }\n  p {\n    /* Use variable */\n  }\n</style>\n<p>Hello Varia</p>",
        validation: (code) => code.includes("--primary: purple") && code.includes("color: var(--primary)")
    },
    {
        id: "css-pseudo-10",
        title: "Hover Effect",
        difficulty: "Easy",
        tags: ["CSS Selectors"],
        status: "unsolved",
        description: "Change the color of an anchor tag to green when it is hovered.",
        initialCode: "<style>\n  /* Your CSS here */\n</style>\n<a href='#'>Link</a>",
        validation: (code) => code.includes("a:hover") && code.includes("color: green")
    },
    {
        id: "css-shadow-11",
        title: "Box Shadow",
        difficulty: "Medium",
        tags: ["Design"],
        status: "unsolved",
        description: "Apply a box-shadow to a card element.",
        initialCode: "<style>\n  .card {\n    /* Your CSS here */\n  }\n</style>\n<div class='card'>Card</div>",
        validation: (code) => code.includes("box-shadow:")
    },
    {
        id: "css-transform-12",
        title: "Rotate Elements",
        difficulty: "Medium",
        tags: ["Animations"],
        status: "unsolved",
        description: "Use the transform property to rotate an element 45 degrees.",
        initialCode: "<style>\n  .box {\n    /* Your CSS here */\n  }\n</style>\n<div class='box'>Card</div>",
        validation: (code) => code.includes("transform:") && code.includes("rotate(45deg)")
    },
    {
        id: "css-zindex-13",
        title: "Z-Index Layering",
        difficulty: "Medium",
        tags: ["CSS Layout"],
        status: "unsolved",
        description: "Give an absolute positioned element a z-index of 99.",
        initialCode: "<style>\n  .overlay {\n    position: absolute;\n    /* Your CSS here */\n  }\n</style>\n<div class='overlay'>Card</div>",
        validation: (code) => code.includes("z-index: 99")
    },
    {
        id: "css-anim-14",
        title: "Keyframe Animation",
        difficulty: "Hard",
        tags: ["Animations"],
        status: "unsolved",
        description: "Define a keyframe animation called 'fade' that goes from opacity 0 to 1.",
        initialCode: "<style>\n  /* Define keyframes here */\n</style>\n<div class='box'>Card</div>",
        validation: (code) => code.includes("@keyframes fade") && code.includes("opacity: 0") && code.includes("opacity: 1")
    },
    {
        id: "js-if-4",
        title: "Age Check",
        difficulty: "Easy",
        tags: ["Logic"],
        status: "unsolved",
        description: "Write an if/else block that alerts 'Adult' if age >= 18, else 'Minor'.",
        initialCode: "<script>\n  let age = 20;\n  // Your code here\n</script>",
        validation: (code) => code.includes("if") && code.includes("else") && code.includes("Adult") && code.includes("Minor")
    },
    {
        id: "js-loop-5",
        title: "For Loop",
        difficulty: "Medium",
        tags: ["Logic"],
        status: "unsolved",
        description: "Write a for loop that logs the numbers 1 through 5 to the console.",
        initialCode: "<script>\n  // Your loop here\n</script>",
        validation: (code) => code.includes("for") && code.includes("console.log")
    },
    {
        id: "js-arr-6",
        title: "Array Mapping",
        difficulty: "Medium",
        tags: ["Data Structures"],
        status: "unsolved",
        description: "Use the map() array method to multiply every number into a new array.",
        initialCode: "<script>\n  const nums = [1, 2, 3];\n  // let mapped = ...\n</script>",
        validation: (code) => code.includes(".map")
    },
    {
        id: "js-obj-7",
        title: "Object Property Access",
        difficulty: "Easy",
        tags: ["Data Structures"],
        status: "unsolved",
        description: "Access the 'username' property of a user object.",
        initialCode: "<script>\n  const user = { username: 'test', age: 25 };\n  // alert user.username;\n</script>",
        validation: (code) => code.includes("user.username") || code.includes("user['username']")
    },
    {
        id: "js-arrow-8",
        title: "Arrow Function Swap",
        difficulty: "Medium",
        tags: ["Advanced JS"],
        status: "unsolved",
        description: "Convert a standard function to an ES6 arrow function named 'subtract'.",
        initialCode: "<script>\n  // const subtract = ...\n</script>",
        validation: (code) => code.includes("const subtract = (") && code.includes("=>")
    },
    {
        id: "js-class-9",
        title: "Class Creation",
        difficulty: "Hard",
        tags: ["Object-Oriented"],
        status: "unsolved",
        description: "Create a class named 'Animal' with a constructor.",
        initialCode: "<script>\n  // Your class here\n</script>",
        validation: (code) => code.includes("class Animal") && code.includes("constructor")
    },
    {
        id: "js-promise-10",
        title: "Create a Promise",
        difficulty: "Hard",
        tags: ["Async"],
        status: "unsolved",
        description: "Create a new Promise and resolve it with the text 'Done'.",
        initialCode: "<script>\n  // const myPromise = ...\n</script>",
        validation: (code) => code.includes("new Promise") && code.includes("resolve('Done')")
    },
    {
        id: "js-async-11",
        title: "Async Await",
        difficulty: "Hard",
        tags: ["Async"],
        status: "unsolved",
        description: "Create an async function named 'loadData' and await a fetch request.",
        initialCode: "<script>\n  // your async function\n</script>",
        validation: (code) => code.includes("async function loadData") && code.includes("await fetch")
    },
    {
        id: "js-err-12",
        title: "Try / Catch",
        difficulty: "Medium",
        tags: ["Logic"],
        status: "unsolved",
        description: "Wrap an undefined function call in a try/catch block.",
        initialCode: "<script>\n  // try { ... } catch (e) { ... }\n</script>",
        validation: (code) => code.includes("try {") && code.includes("catch")
    },
    {
        id: "js-event-13",
        title: "Click Listener",
        difficulty: "Medium",
        tags: ["Web Interactivity"],
        status: "unsolved",
        description: "Attach a click event listener to a button with the id 'btn'.",
        initialCode: "<button id='btn'>Click</button>\n<script>\n  // addEventListener\n</script>",
        validation: (code) => code.includes("addEventListener") && code.includes("'click'")
    },
    {
        id: "js-storage-14",
        title: "Local Storage Set",
        difficulty: "Hard",
        tags: ["Web APIs"],
        status: "unsolved",
        description: "Save a key 'theme' with value 'dark' into localStorage.",
        initialCode: "<script>\n  // localStorage...\n</script>",
        validation: (code) => code.includes("localStorage.setItem") && code.includes("theme") && code.includes("dark")
    },
    {
        id: "html-attr-7",
        title: "HTML Attributes",
        difficulty: "Easy",
        tags: ["HTML Fundamentals", "Attributes"],
        status: "unsolved",
        description: "Create an anchor tag with an href attribute pointing to example.com and a title attribute.",
        initialCode: "<!-- Write your HTML here -->\n",
        validation: (code) => code.includes("<a ") && code.includes("href=") && code.includes("title=")
    },
    {
        id: "html-format-8",
        title: "Text Emphasis",
        difficulty: "Easy",
        tags: ["HTML Text", "Formatting"],
        status: "unsolved",
        description: "Mark a word as important using the strong tag and another as emphasized using the em tag.",
        initialCode: "<p>This is a normal text but this word is very important, and this one has emphasis.</p>",
        validation: (code) => code.includes("<strong>") && code.includes("<em>")
    },
    {
        id: "html-img-9",
        title: "Image Embedding",
        difficulty: "Easy",
        tags: ["HTML Images"],
        status: "unsolved",
        description: "Embed an image with an src attribute of 'logo.png' and an alt attribute 'Logo'.",
        initialCode: "<!-- Image tag here -->\n",
        validation: (code) => code.includes("<img ") && code.includes("src=") && code.includes("alt=")
    },
    {
        id: "html-block-10",
        title: "Divs and Spans",
        difficulty: "Medium",
        tags: ["Structure"],
        status: "unsolved",
        description: "Create a div block that contains a span for grouping inline elements.",
        initialCode: "<!-- Write a div containing a span -->\n",
        validation: (code) => code.includes("<div>") && code.includes("<span>")
    },
    {
        id: "html-class-11",
        title: "Classes and IDs",
        difficulty: "Easy",
        tags: ["Attributes"],
        status: "unsolved",
        description: "Create a paragraph with an id of 'main-text' and a class of 'highlighted'.",
        initialCode: "<p>Special Text</p>",
        validation: (code) => code.includes("id=") && code.includes("class=")
    },
    {
        id: "html-semantic-12",
        title: "Semantic HTML",
        difficulty: "Medium",
        tags: ["Structure"],
        status: "unsolved",
        description: "Create a layout structure using a header, main, and footer element.",
        initialCode: "<!-- Layout here -->\n",
        validation: (code) => code.includes("<header>") && code.includes("<main>") && code.includes("<footer>")
    },
    {
        id: "html-media-13",
        title: "Audio and Video",
        difficulty: "Medium",
        tags: ["Media"],
        status: "unsolved",
        description: "Embed a video element with controls enabled.",
        initialCode: "<!-- Video element here -->\n",
        validation: (code) => code.includes("<video ") && code.includes("controls")
    },
    {
        id: "html-iframe-14",
        title: "HTML Iframe",
        difficulty: "Medium",
        tags: ["Advanced", "Embed"],
        status: "unsolved",
        description: "Embed another webpage using an iframe with a src attribute.",
        initialCode: "<!-- Iframe element here -->\n",
        validation: (code) => code.includes("<iframe ") && code.includes("src=")
    }
];

const TESTS = [
    // HTML Assessments
    {
        id: "html-beg",
        title: "HTML Beginner",
        questions: 10,
        duration: "10 min",
        level: "Beginner",
        icon: "layout",
        color: "blue"
    },
    {
        id: "html-int",
        title: "HTML Intermediate",
        questions: 10,
        duration: "15 min",
        level: "Intermediate",
        icon: "layout",
        color: "blue"
    },
    {
        id: "html-adv",
        title: "HTML Advanced",
        questions: 10,
        duration: "20 min",
        level: "Advanced",
        icon: "layout",
        color: "blue"
    },
    // CSS Assessments
    {
        id: "css-beg",
        title: "CSS Beginner",
        questions: 10,
        duration: "10 min",
        level: "Beginner",
        icon: "palette",
        color: "primary"
    },
    {
        id: "css-int",
        title: "CSS Intermediate",
        questions: 10,
        duration: "15 min",
        level: "Intermediate",
        icon: "palette",
        color: "primary"
    },
    {
        id: "css-adv",
        title: "CSS Advanced",
        questions: 10,
        duration: "20 min",
        level: "Advanced",
        icon: "palette",
        color: "primary"
    },
    // JS Assessments
    {
        id: "js-beg",
        title: "JS Beginner",
        questions: 10,
        duration: "10 min",
        level: "Beginner",
        icon: "zap",
        color: "amber"
    },
    {
        id: "js-int",
        title: "JS Intermediate",
        questions: 10,
        duration: "15 min",
        level: "Intermediate",
        icon: "zap",
        color: "amber"
    },
    {
        id: "js-adv",
        title: "JS Advanced",
        questions: 10,
        duration: "20 min",
        level: "Advanced",
        icon: "zap",
        color: "amber"
    }
];

const QUIZZES = {
    "html-01": [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Tabular Markup Logic", "None of the above"],
            answer: 0
        },
        {
            question: "Which tag is the root element of an HTML page?",
            options: ["&lt;body&gt;", "&lt;head&gt;", "&lt;html&gt;", "&lt;doctype&gt;"],
            answer: 2
        }
    ],
    "html-04": [
        {
            question: "Which heading represents the second most important level?",
            options: ["&lt;h1&gt;", "&lt;h2&gt;", "&lt;h3&gt;", "&lt;h6&gt;"],
            answer: 1
        },
        {
            question: "What is the standard tag for a paragraph?",
            options: ["&lt;para&gt;", "&lt;txt&gt;", "&lt;p&gt;", "&lt;div&gt;"],
            answer: 2
        }
    ],
    "html-05": [
        {
            question: "Which tag is used to create an unordered list?",
            options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
            answer: 1
        },
        {
            question: "What tag defines an individual list item?",
            options: ["&lt;item&gt;", "&lt;ul&gt;", "&lt;ld&gt;", "&lt;li&gt;"],
            answer: 3
        }
    ],
    "html-06": [
        {
            question: "Which attribute is required for an anchor (&lt;a&gt;) tag to link to a page?",
            options: ["src", "link", "href", "path"],
            answer: 2
        }
    ],
    "html-11": [
        {
            question: "Which tag defines a standard data cell in a table?",
            options: ["&lt;table&gt;", "&lt;th&gt;", "&lt;tr&gt;", "&lt;td&gt;"],
            answer: 3
        }
    ],
    "html-12": [
        {
            question: "Which element is used to collect user input in a form?",
            options: ["&lt;form&gt;", "&lt;input&gt;", "&lt;label&gt;", "&lt;button&gt;"],
            answer: 1
        }
    ],
    "css-01": [
        {
            question: "What does CSS stand for?",
            options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"],
            answer: 1
        },
        {
            question: "How do you select an element with class 'blue' in CSS?",
            options: ["#blue", "blue", ".blue", "*blue"],
            answer: 2
        }
    ],
    "css-02": [
        {
            question: "What is the outermost layer of the CSS Box Model?",
            options: ["Padding", "Border", "Margin", "Content"],
            answer: 2
        },
        {
            question: "Which property adds space inside an element, between content and border?",
            options: ["Margin", "Padding", "Space", "Buffer"],
            answer: 1
        }
    ],
    "css-03": [
        {
            question: "Which property do you set to 'flex' to start using Flexbox?",
            options: ["flex-direction", "layout", "display", "position"],
            answer: 2
        },
        {
            question: "Which Flexbox property centers items along the main axis?",
            options: ["align-items", "justify-content", "flex-flow", "axis-center"],
            answer: 1
        }
    ],
    "css-04": [
        {
            question: "Which property is used to change the font of an element?",
            options: ["font-family", "text-style", "font-weight", "typeface"],
            answer: 0
        }
    ],
    "js-01": [
        {
            question: "Which keyword is used to declare a variable in modern JS (ES6+)?",
            options: ["var", "let", "const", "Both let and const"],
            answer: 3
        },
        {
            question: "What is the value of 'Alice' in: const name = 'Alice'?",
            options: ["Number", "String", "Boolean", "Object"],
            answer: 1
        }
    ],
    "js-02": [
        {
            question: "What keyword is used to return a value from a function?",
            options: ["send", "output", "result", "return"],
            answer: 3
        }
    ],
    "js-03": [
        {
            question: "What does DOM stand for?",
            options: ["Data Object Model", "Document Object Model", "Direct Output Method", "Digital Origin Management"],
            answer: 1
        },
        {
            question: "Which method selects an element by its ID?",
            options: ["document.query()", "document.get()", "document.getElementById()", "document.select()"],
            answer: 2
        }
    ],
    "html-beg": [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Tabular Markup Logic", "Home Tool Markup Language"], answer: 0 },
        { question: "Which tag is used for the largest heading?", options: ["&lt;h6&gt;", "&lt;h1&gt;", "&lt;heading&gt;", "&lt;head&gt;"], answer: 1 },
        { question: "How do you create a line break?", options: ["&lt;break&gt;", "&lt;br&gt;", "&lt;lb&gt;", "&lt;hr&gt;"], answer: 1 },
        { question: "What is the correct tag for a paragraph?", options: ["&lt;p&gt;", "&lt;para&gt;", "&lt;text&gt;", "&lt;div&gt;"], answer: 0 },
        { question: "Which character is used to indicate an end tag?", options: ["*", "^", "/", "<"], answer: 2 },
        { question: "How can you make a numbered list?", options: ["&lt;list&gt;", "&lt;dl&gt;", "&lt;ul&gt;", "&lt;ol&gt;"], answer: 3 },
        { question: "Which tag is used to create a hyperlink?", options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"], answer: 0 },
        { question: "What tag is used for a single line input field?", options: ["&lt;input&gt;", "&lt;text&gt;", "&lt;field&gt;", "&lt;textbox&gt;"], answer: 0 },
        { question: "Which element defines the title of an HTML document?", options: ["&lt;meta&gt;", "&lt;head&gt;", "&lt;title&gt;", "&lt;link&gt;"], answer: 2 },
        { question: "What is the correct HTML for inserting an image?", options: ["&lt;img href='url'&gt;", "&lt;img src='url'&gt;", "&lt;image src='url'&gt;", "&lt;picture&gt;"], answer: 1 }
    ],
    "html-int": [
        { question: "Which HTML5 element is used to specify a footer?", options: ["&lt;bottom&gt;", "&lt;section-footer&gt;", "&lt;footer&gt;", "&lt;aside&gt;"], answer: 2 },
        { question: "Which tag is used to define a multiline input field?", options: ["&lt;input type='text'&gt;", "&lt;input type='textarea'&gt;", "&lt;textarea&gt;", "&lt;textblock&gt;"], answer: 2 },
        { question: "Which attribute is used to provide an alternative text for an image?", options: ["title", "alt", "src", "desc"], answer: 1 },
        { question: "Which HTML element is used to group related elements in a form?", options: ["&lt;fieldset&gt;", "&lt;group&gt;", "&lt;formset&gt;", "&lt;div&gt;"], answer: 0 },
        { question: "Which tag defines a table row?", options: ["&lt;table&gt;", "&lt;th&gt;", "&lt;tr&gt;", "&lt;td&gt;"], answer: 2 },
        { question: "What does the &lt;canvas&gt; element do?", options: ["Display audio", "Draw graphics via JS", "Store data", "Create forms"], answer: 1 },
        { question: "Which tag is used to define a navigation set of links?", options: ["&lt;nav&gt;", "&lt;links&gt;", "&lt;menu&gt;", "&lt;navigate&gt;"], answer: 0 },
        { question: "What is the correct HTML for adding a background color?", options: ["&lt;body style='background-color:yellow;'&gt;", "&lt;body bg='yellow'&gt;", "&lt;background&gt;yellow&lt;/background&gt;", "None"], answer: 0 },
        { question: "Which HTML5 attribute is used to specify that an input field must be filled?", options: ["validate", "placeholder", "required", "mandatory"], answer: 2 },
        { question: "Which element is used to display a scalar measurement within a range?", options: ["&lt;range&gt;", "&lt;meter&gt;", "&lt;gauge&gt;", "&lt;scale&gt;"], answer: 1 }
    ],
    "html-adv": [
        { question: "Which element represents the main content of the &lt;body&gt;?", options: ["&lt;section&gt;", "&lt;article&gt;", "&lt;main&gt;", "&lt;div&gt;"], answer: 2 },
        { question: "What is the correct way to handle multiple sources for video?", options: ["source attribute", "src list", "&lt;source&gt; elements", "video-src tag"], answer: 2 },
        { question: "Which element is used for drawing vector graphics?", options: ["&lt;canvas&gt;", "&lt;svg&gt;", "&lt;vector&gt;", "&lt;graphics&gt;"], answer: 1 },
        { question: "What is the primary purpose of Semantic HTML?", options: ["Styling", "Accessibility/Structure", "Interactivity", "Performance"], answer: 1 },
        { question: "Which attribute triggers an event when a page has finished loading?", options: ["onload", "onfinished", "oncomplete", "onready"], answer: 0 },
        { question: "What is the correct way to embed another webpage?", options: ["&lt;embed&gt;", "&lt;object&gt;", "&lt;iframe&gt;", "&lt;frame&gt;"], answer: 2 },
        { question: "Which meta tag helps with responsive design on mobile?", options: ["charset", "viewport", "description", "keywords"], answer: 1 },
        { question: "What does the 'defer' attribute in a &lt;script&gt; tag do?", options: ["Pauses script", "Executes late", "Blocks rendering", "None"], answer: 1 },
        { question: "Which element is used to specify self-contained content?", options: ["&lt;aside&gt;", "&lt;figure&gt;", "&lt;section&gt;", "&lt;div&gt;"], answer: 1 },
        { question: "How do you define a template that is not rendered on page load?", options: ["&lt;tpl&gt;", "&lt;content&gt;", "&lt;template&gt;", "&lt;script type='text/template'&gt;"], answer: 2 }
    ],
    "css-beg": [
        { question: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"], answer: 1 },
        { question: "How do you select an element with class 'blue'?", options: ["#blue", "blue", ".blue", "*blue"], answer: 2 },
        { question: "Which property is used to change the background color?", options: ["color", "bg-color", "background-color", "fill"], answer: 2 },
        { question: "Which CSS property is used to change the text color?", options: ["fgcolor", "color", "text-color", "font-color"], answer: 1 },
        { question: "What is the outermost layer of the Box Model?", options: ["Padding", "Border", "Margin", "Content"], answer: 2 },
        { question: "Which property controls the text size?", options: ["text-style", "font-size", "text-size", "height"], answer: 1 },
        { question: "How do you select an element with ID 'header'?", options: [".header", "header", "#header", "*header"], answer: 2 },
        { question: "Which property makes text bold?", options: ["font:bold;", "style:bold;", "font-weight:bold;", "text:bold;"], answer: 2 },
        { question: "How do you add a comment in CSS?", options: ["// comment", "# comment", "/* comment */", "&lt;!-- comment --&gt;"], answer: 2 },
        { question: "Which unit is relative to the font-size of the element?", options: ["px", "em", "pt", "vh"], answer: 1 }
    ],
    "css-int": [
        { question: "How do you display a border (top=10, bottom=5, left=20, right=1)?", options: ["10px 1px 5px 20px", "10px 20px 5px 1px", "5px 20px 10px 1px", "20px 10px 5px 1px"], answer: 0 },
        { question: "Which property is used to start using Flexbox?", options: ["flex-direction", "layout", "display:flex", "position"], answer: 2 },
        { question: "Which property centers items along the main axis in Flexbox?", options: ["align-items", "justify-content", "flex-flow", "axis-center"], answer: 1 },
        { question: "Which position value keeps an element in the flow but allows offsets?", options: ["absolute", "relative", "fixed", "static"], answer: 1 },
        { question: "How do you make an element take up 3 columns in CSS Grid?", options: ["grid-span: 3", "grid-column: span 3", "grid-row: 3", "grid-fill: 3"], answer: 1 },
        { question: "Which property adds space inside an element?", options: ["Margin", "Padding", "Space", "Gap"], answer: 1 },
        { question: "Which property is used to change the list item marker?", options: ["list-style-type", "list-marker", "bullet-style", "list-type"], answer: 0 },
        { question: "What is the default value of the position property?", options: ["relative", "absolute", "static", "fixed"], answer: 2 },
        { question: "Which property controls the transparency of an element?", options: ["visibility", "filter", "opacity", "display"], answer: 2 },
        { question: "Which display value makes an element invisible but keeps its space?", options: ["display:none", "visibility:hidden", "opacity:0", "filter:blur(100)"], answer: 1 }
    ],
    "css-adv": [
        { question: "How do you use a CSS variable?", options: ["$var", "var(--name)", "val(name)", "--name"], answer: 1 },
        { question: "Which property is used to rotate an element?", options: ["rotate()", "transform", "skew", "turn"], answer: 1 },
        { question: "Which pseudo-class targets the first child of an element?", options: [":first", ":nth-child(0)", ":first-child", ":child(1)"], answer: 2 },
        { question: "What does Z-index control?", options: ["Horizontal order", "Vertical order", "Stacking order", "Size"], answer: 2 },
        { question: "How do you create a smooth transition on hover?", options: ["animate", "transition", "transform", "motion"], answer: 1 },
        { question: "Which media query targets screens smaller than 600px?", options: ["@media (min-width: 600px)", "@media (max-width: 600px)", "@media screen-600", "@media tiny"], answer: 1 },
        { question: "What is the purpose of @keyframes?", options: ["Linking pages", "Defining animations", "Setting fonts", "Responsive design"], answer: 1 },
        { question: "Which property controls how an image scales inside a container?", options: ["object-fit", "image-scale", "fit-inside", "scale-type"], answer: 0 },
        { question: "Which selector targets an element when mouse is over it?", options: [":active", ":focus", ":hover", ":visited"], answer: 2 },
        { question: "What does '!important' do?", options: ["Nothing", "Overrides all other styles", "Makes text bold", "Causes an error"], answer: 1 }
    ],
    "js-beg": [
        { question: "Which keyword declares a modern constant?", options: ["var", "let", "const", "def"], answer: 2 },
        { question: "What operator is used to assign a value?", options: ["*", "-", "=", "=="], answer: 2 },
        { question: "How do you write 'Hello' in an alert box?", options: ["msg('Hello')", "alert('Hello')", "alertBox('Hello')", "msgBox('Hello')"], answer: 1 },
        { question: "Which keyword declares a modern variable?", options: ["var", "let", "constant", "variable"], answer: 1 },
        { question: "What is the value of 'Alice' in JS type system?", options: ["Number", "String", "Boolean", "Object"], answer: 1 },
        { question: "How to write an IF statement in JS?", options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5"], answer: 2 },
        { question: "Which built-in method returns character at index?", options: ["characterAt()", "charAt()", "getCharAt()", "indexAt()"], answer: 1 },
        { question: "How do you create a function in JS?", options: ["function myFunction()", "function:myFunction()", "def myFunction()", "function = myFunction()"], answer: 0 },
        { question: "How to add a single-line comment in JS?", options: ["' comment", "// comment", "# comment", "&lt;!-- comment --&gt;"], answer: 1 },
        { question: "How do you call a function 'myFunc'?", options: ["call myFunc()", "myFunc()", "exec myFunc()", "invoke myFunc()"], answer: 1 }
    ],
    "js-int": [
        { question: "How does a FOR loop start?", options: ["for (i <= 5; i++)", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5"], answer: 2 },
        { question: "How do you write a comment with multiple lines?", options: ["// comment", "/* comment */", "# comment", "-- comment"], answer: 1 },
        { question: "Which method selects an element by ID?", options: ["query()", "get()", "getElementById()", "select()"], answer: 2 },
        { question: "What is the correct way to write an array?", options: ["[1,2,3]", "(1,2,3)", "{1,2,3}", "<1,2,3>"], answer: 0 },
        { question: "Which operator compares both value and type?", options: ["==", "=", "===", "!=="], answer: 2 },
        { question: "What does DOM stand for?", options: ["Data Object Model", "Document Object Model", "Direct Output Method", "None"], answer: 1 },
        { question: "Which method adds a new item to end of array?", options: ["add()", "push()", "append()", "insert()"], answer: 1 },
        { question: "How do you round 7.25 to nearest integer?", options: ["round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "Math.ceil(7.25)"], answer: 2 },
        { question: "Which event occurs when user clicks an element?", options: ["onmouseclick", "onchange", "onclick", "onmouseover"], answer: 2 },
        { question: "How do you find number with highest value of x and y?", options: ["Math.high(x,y)", "ceil(x,y)", "Math.max(x,y)", "Math.top(x,y)"], answer: 2 }
    ],
    "js-adv": [
        { question: "How do you create a promise?", options: ["new Promise()", "make Promise()", "Promise.create()", "Promise()"], answer: 0 },
        { question: "Which operator is used to wait for a promise?", options: ["wait", "await", "then", "stop"], answer: 1 },
        { question: "What keyword is used to return value from function?", options: ["send", "output", "return", "exit"], answer: 2 },
        { question: "How do you declare an async function?", options: ["async function f()", "function async f()", "f() async", "async:f()"], answer: 0 },
        { question: "Which method is used to parse JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObj()", "parse()"], answer: 0 },
        { question: "What is 'strict mode' in JS?", options: ["Safe mode", "Strict parsing", "'use strict'", "No mode"], answer: 2 },
        { question: "Which method joins two or more arrays?", options: ["join()", "merge()", "concat()", "combine()"], answer: 2 },
        { question: "How do you create a class in ES6?", options: ["class MyClass {}", "MyClass = class {}", "new class MyClass", "object MyClass"], answer: 0 },
        { question: "Which keyword refers to current object?", options: ["self", "that", "this", "target"], answer: 2 },
        { question: "What does 'Array.map()' do?", options: ["Filters array", "Sorts array", "Transforms every element", "Deletes data"], answer: 2 }
    ]
};


// --- State Management ---
class Store {
    constructor() {
        this.STORAGE_KEY = 'l2c_db_v1';
        this.state = this.loadState() || this.getInitialState();
    }

    getInitialState() {
        return {
            users: [
                { id: 'admin', username: 'admin', password: 'admin', fullname: 'Administrator', role: 'admin', joinedAt: 'January 2026' },
                { id: 'learner', username: 'learner', password: 'learner', fullname: 'Learner User', role: 'learner', joinedAt: 'January 2026' }
            ],
            currentUser: null,
            /* Topic: Storage & Async Programming | CO Number: CO4 */
            /* Topic: Browser storage | CO Number: CO4 */
            progress: {}
        };
    }

    loadState() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (!data) return null;
            const state = JSON.parse(data);
            // Defensive check: ensure users is a clean array of actual user objects
            if (state && Array.isArray(state.users)) {
                state.users = state.users.filter(u => u && typeof u === 'object' && u.username);
                // Patch: Ensure all users have a joinedAt date
                state.users.forEach(u => {
                    if (!u.joinedAt) u.joinedAt = 'March 2026';
                });
            }

            // Migration: Convert old string progress to object with timestamp
            if (state && state.progress) {
                Object.keys(state.progress).forEach(userId => {
                    const up = state.progress[userId];
                    if (up.modules && up.modules.length > 0 && typeof up.modules[0] === 'string') {
                        up.modules = up.modules.map(id => ({ id, timestamp: new Date().toISOString() }));
                    }
                    if (up.problems && up.problems.length > 0 && typeof up.problems[0] === 'string') {
                        up.problems = up.problems.map(id => ({ id, timestamp: new Date().toISOString() }));
                    }
                });
            }

            return state;
        } catch (e) {
            console.error("Failed to load state:", e);
            return null;
        }
    }

    saveState() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    }

    // User Methods
    validateLogin(username, password) {
        if (!username || !password) return null;
        const user = this.state.users.find(u =>
            u && u.username && u.username.toLowerCase() === username.toLowerCase() &&
            u.password === password
        );
        if (user) {
            this.state.currentUser = user;
            this.saveState();
            return user;
        }
        return null;
    }

    registerUser(fullname, username, password) {
        if (this.state.users.some(u => u && u.username && u.username.toLowerCase() === username.toLowerCase())) {
            return { error: 'Username already exists' };
        }

        const newUser = {
            id: 'user_' + Date.now().toString(36),
            username: username,
            password: password,
            fullname: fullname,
            role: 'learner',
            joinedAt: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        };

        this.state.users.push(newUser);
        this.saveState();
        return { user: newUser };
    }

    ensureDefaultUsers() {
        const defaults = [
            { id: 'admin', username: 'admin', password: 'admin', fullname: 'Administrator', role: 'admin' },
            { id: 'learner', username: 'learner', password: 'learner', fullname: 'Learner User', role: 'learner' }
        ];

        let changed = false;
        defaults.forEach(def => {
            if (!this.state.users.some(u => u.id === def.id)) {
                this.state.users.push(def);
                changed = true;
            }
        });

        if (changed) this.saveState();
    }

    // Remove all non-default users + clear all progress
    cleanupToDefaults() {
        const defaultIds = ['admin', 'learner'];
        this.state.users = this.state.users.filter(u => defaultIds.includes(u.id));
        this.state.progress = {};
        this.saveState();
    }

    logout() {
        this.state.currentUser = null;
        this.saveState();
        navigateTo('home');
    }

    getCurrentUser() {
        return this.state.currentUser;
    }

    // Progress Methods
    getUserProgress(userId) {
        if (!this.state.progress[userId]) {
            this.state.progress[userId] = { modules: [], problems: [] };
        }
        return this.state.progress[userId];
    }

    completeModule(moduleId) {
        const user = this.getCurrentUser();
        if (!user) return;
        const progress = this.getUserProgress(user.id);
        if (!progress.modules.find(m => m.id === moduleId)) {
            progress.modules.push({ id: moduleId, timestamp: new Date().toISOString() });
            this.saveState();
        }
    }

    solveProblem(problemId) {
        const user = this.getCurrentUser();
        if (!user) return;
        const progress = this.getUserProgress(user.id);
        if (!progress.problems.find(p => p.id === problemId)) {
            progress.problems.push({ id: problemId, timestamp: new Date().toISOString() });
            this.saveState();
        }
    }
}

// --- App Control ---
const store = new Store();
let currentView = 'home'; // Default to Home

document.addEventListener('DOMContentLoaded', () => {
    // Run cleanup only once to remove old Guest User data
    if (!localStorage.getItem('l2c_cleaned_v1')) {
        store.cleanupToDefaults();
        localStorage.setItem('l2c_cleaned_v1', 'true');
    }
    store.ensureDefaultUsers();
    lucide.createIcons();
    initApp();
});

function initApp() {
    const user = store.getCurrentUser();
    if (user) {
        setupUserUI(user);
        navigateTo('dashboard');
    } else {
        navigateTo('home');
    }
}

// --- View Navigation ---
const views = ['dashboard', 'courses', 'curriculum', 'problems', 'editor', 'compiler', 'login', 'leaderboard', 'learning', 'profile', 'tests', 'quiz', 'admin-dashboard'];
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const view = item.dataset.view;
        navigateTo(view);
    });
});

function navigateTo(viewId) {
    // Role-based Access Control
    const targetNavItem = Array.from(navItems).find(i => i.dataset.view === viewId);
    if (store.getCurrentUser() && targetNavItem && targetNavItem.dataset.role === 'admin' && store.getCurrentUser().role !== 'admin') {
        alert('Access Denied: Administrator role required.');
        return navigateTo('dashboard');
    }

    currentView = viewId;

    const homeView = document.getElementById('home-view');
    const loginView = document.getElementById('login-view');
    const appContainer = document.getElementById('app-container');

    // Reset visibility
    [homeView, loginView, appContainer].forEach(el => el?.classList.add('hidden'));

    if (viewId === 'home') {
        homeView.classList.remove('hidden');
    } else if (viewId === 'login') {
        loginView.classList.remove('hidden');
        lucide.createIcons();
    } else {
        appContainer.classList.remove('hidden');

        // Update Sidebar
        navItems.forEach(item => {
            if (item.dataset.view === viewId) item.classList.add('active');
            else item.classList.remove('active');
        });

        // Toggle Inner Views
        views.forEach(v => {
            const el = document.getElementById(`${v}-view`);
            if (el) el.classList.add('hidden');
        });
        const target = document.getElementById(`${viewId}-view`);
        if (target) target.classList.remove('hidden');

        renderView(viewId);
    }
}

// Role toggle for login
let selectedLoginRole = 'student';

function setLoginRole(role) {
    selectedLoginRole = role;
    const btnStudent = document.getElementById('role-btn-student');
    const btnAdmin = document.getElementById('role-btn-admin');
    const userInput = document.getElementById('login-username');
    const passInput = document.getElementById('login-password');

    if (role === 'student') {
        btnStudent.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/25');
        btnStudent.classList.remove('text-slate-400', 'hover:text-slate-200');
        btnAdmin.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/25');
        btnAdmin.classList.add('text-slate-400', 'hover:text-slate-200');

        userInput.value = 'learner';
        passInput.value = 'learner';
    } else {
        btnAdmin.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/25');
        btnAdmin.classList.remove('text-slate-400', 'hover:text-slate-200');
        btnStudent.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/25');
        btnStudent.classList.add('text-slate-400', 'hover:text-slate-200');

        userInput.value = 'admin';
        passInput.value = 'admin';
    }
}

let authMode = 'login'; // 'login' or 'signup'

function toggleAuthMode(mode) {
    authMode = mode;
    const btnLogin = document.getElementById('mode-btn-login');
    const btnSignup = document.getElementById('mode-btn-signup');
    const fullnameGroup = document.getElementById('signup-fullname-group');
    const roleSelectorGroup = document.getElementById('role-selector-group');
    const authExtras = document.getElementById('auth-extras');
    const submitBtn = document.getElementById('auth-submit-btn');
    const authTitle = document.getElementById('auth-title');
    const authSubtitle = document.getElementById('auth-subtitle');

    if (mode === 'login') {
        btnLogin.className = 'flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all duration-300 bg-white text-slate-900 shadow-sm';
        btnSignup.className = 'flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all duration-300 text-slate-500 hover:text-slate-700';
        fullnameGroup.classList.add('hidden');
        roleSelectorGroup.classList.remove('hidden');
        authExtras.classList.remove('hidden');
        submitBtn.innerHTML = 'Login Now';
        authTitle.innerText = 'Welcome Back';
        authSubtitle.innerText = 'Enter your details to access your dashboard.';
        setLoginRole(selectedLoginRole); // reset fields
    } else {
        btnSignup.className = 'flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all duration-300 bg-white text-slate-900 shadow-sm';
        btnLogin.className = 'flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all duration-300 text-slate-500 hover:text-slate-700';
        fullnameGroup.classList.remove('hidden');
        roleSelectorGroup.classList.add('hidden');
        authExtras.classList.add('hidden');
        submitBtn.innerHTML = 'Create Account';
        authTitle.innerText = 'Join Learn2Code';
        authSubtitle.innerText = 'Create an account to track your progress.';

        // Clear fields for fresh signup
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        document.getElementById('signup-fullname').value = '';
    }
}

function handleAuthSubmit() {
    const user = document.getElementById('login-username').value.trim();
    const pass = document.getElementById('login-password').value.trim();

    // UI Loading state
    const submitBtn = document.getElementById('auth-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin mx-auto"></i>';
    lucide.createIcons();
    submitBtn.disabled = true;

    setTimeout(() => {
        try {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            lucide.createIcons();

            if (authMode === 'login') {
                const authenticatedUser = store.validateLogin(user, pass);
                if (authenticatedUser) {
                    setupUserUI(authenticatedUser);
                    navigateTo('dashboard');
                } else {
                    alert('Invalid username or password');
                }
            } else {
                // Registration mode
                const fullname = document.getElementById('signup-fullname').value.trim();
                if (!fullname || !user || !pass) {
                    alert('Please fill in all fields.');
                    return;
                }

                const result = store.registerUser(fullname, user, pass);
                if (result.error) {
                    alert(result.error);
                } else {
                    // Auto login after successful registration
                    const authenticatedUser = store.validateLogin(user, pass);
                    if (authenticatedUser) {
                        setupUserUI(authenticatedUser);
                        navigateTo('dashboard');
                    } else {
                        alert('Registration successful! Please login.');
                        toggleAuthMode('login');
                    }
                }
            }
        } catch (e) {
            console.error("Auth Error:", e);
            submitBtn.innerHTML = 'Error';
            submitBtn.disabled = false;
            alert('An unexpected error occurred. Please try again.');
        }
    }, 800);
}

function setupUserUI(user) {
    document.getElementById('user-name').textContent = user.fullname;
    document.getElementById('user-role').textContent = user.role;
    document.querySelectorAll('.user-name-display').forEach(el => el.textContent = user.fullname);
    const initials = user.fullname.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('user-avatar').textContent = initials;

    // Sidebar visibility based on role
    navItems.forEach(item => {
        const requiredRole = item.dataset.role;
        if (requiredRole && requiredRole !== user.role) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        }
    });
}

function handleLogout() {
    if (confirm('Are you sure you want to sign out?')) {
        store.logout();
        // Reset to default admin credentials
        document.getElementById('login-username').value = 'admin';
        document.getElementById('login-password').value = 'admin';
    }
}

function showApp() {
    const user = store.getCurrentUser();
    if (user) setupUserUI(user);
    navigateTo('home');
}

// --- Renders ---
function renderView(view) {
    /* Topic: DOM manipulation examples | CO Number: CO4 */
    switch (view) {
        case 'dashboard': renderDashboard(); break;
        case 'courses':
        case 'learning': renderCourses(); break;
        case 'problems': renderProblems(); break;
        case 'compiler': initCompiler(); break;
        case 'profile': renderProfile(); break;
        case 'admin-dashboard': renderAdminDashboard(); break;
        case 'tests': renderTests(); break;
        case 'leaderboard': renderLeaderboard(); break;
        case 'quiz': /* Quiz is rendered by startQuiz */ break;
    }
}

// --- Compiler Logic ---
function initCompiler() {
    const htmlEditor = document.getElementById('compiler-html');
    const cssEditor = document.getElementById('compiler-css');
    const jsEditor = document.getElementById('compiler-js');
    const btn = document.getElementById('run-compiler-btn');

    // Initial content
    if (!htmlEditor.value) {
        htmlEditor.value = `<h1>Hello Compiler!</h1>
    <p>Try editing the HTML, CSS, and JS tabs and click Run.</p>`;
    }
    if (!cssEditor.value) {
        cssEditor.value = `body {
    font-family: sans-serif;
    text-align: center;
    padding-top: 50px;
    background-color: #f8fafc;
}
h1 { color: #0891b2; }`;
    }
    if (!jsEditor.value) {
        jsEditor.value = `console.log("Hello from the compiler!");`;
    }

    btn.onclick = () => runCompilerCode();
    runCompilerCode();
    lucide.createIcons();
}

function switchCompilerTab(tab) {
    // Update tabs
    const tabs = ['html', 'css', 'js'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        const editor = document.getElementById(`compiler-${t}`);
        if (t === tab) {
            btn.classList.add('bg-slate-900', 'text-white');
            btn.classList.remove('text-slate-500', 'hover:bg-slate-200');
            editor.classList.remove('hidden');
        } else {
            btn.classList.remove('bg-slate-900', 'text-white');
            btn.classList.add('text-slate-500', 'hover:bg-slate-200');
            editor.classList.add('hidden');
        }
    });
}

function runCompilerCode() {
    const html = document.getElementById('compiler-html').value;
    const css = document.getElementById('compiler-css').value;
    const js = document.getElementById('compiler-js').value;
    const preview = document.getElementById('compiler-preview');

    const combinedCode = `
    <!DOCTYPE html>
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}<\/script>
            </body>
        </html>
    `;
    /* Topic: Web client-server architecture | CO Number: CO1 */
    /* Topic: Browser basics | CO Number: CO1 */
    const doc = preview.contentDocument || preview.contentWindow.document;
    doc.open();
    doc.write(combinedCode);
    doc.close();
}

// 1. Dashboard
function renderDashboard() {
    const user = store.getCurrentUser();
    const progress = store.getUserProgress(user.id);

    document.getElementById('stat-modules').textContent = progress.modules.length;
    document.getElementById('stat-problems').textContent = progress.problems.length;
    document.getElementById('stat-streak').textContent = progress.modules.length > 0 ? '1' : '0'; // Mock logic for now

    // Injected Course list
    const container = document.getElementById('dashboard-courses');
    container.innerHTML = COURSES.map(c => {
        const courseModules = MODULES.filter(m => m.courseId === c.id);
        const completedInCourse = progress.modules.filter(mObj => courseModules.find(m => m.id === mObj.id)).length;
        const pct = courseModules.length > 0 ? Math.round((completedInCourse / courseModules.length) * 100) : 0;

        return `
    <div class="flex items-center space-x-4 p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition border border-transparent hover:border-slate-100" onclick="startCourse('${c.id}')">
                <div class="w-12 h-12 rounded-lg bg-cover bg-center shadow-sm" style="background-image: url('${c.image}')"></div>
                <div class="flex-1">
                    <h4 class="font-bold text-slate-900 text-sm">${c.title}</h4>
                    <div class="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden">
                        <div class="bg-primary h-full transition-all duration-500" style="width: ${pct}%"></div>
                    </div>
                </div>
                <i data-lucide="chevron-right" class="w-5 h-5 text-slate-400"></i>
            </div>
    `;
    }).join('');
    lucide.createIcons();

    // Chart (Mock Data)
    initChart(progress);
}

function initChart(progress) {
    const ctx = document.getElementById('activityChart').getContext('2d');
    if (window.myChart) window.myChart.destroy();

    // Calculate real activity for the current week
    const activityData = [0, 0, 0, 0, 0, 0, 0]; // Mon-Sun
    const now = new Date();
    const currentDay = now.getDay(); // 0 is Sun, 1-6 is Mon-Sat
    const diffToMonday = now.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
    const monday = new Date(now.setDate(diffToMonday));
    monday.setHours(0, 0, 0, 0);

    const aggregate = (item) => {
        const itemDate = new Date(item.timestamp);
        if (itemDate >= monday) {
            const d = itemDate.getDay(); // 0-6
            const idx = d === 0 ? 6 : d - 1; // Map Sun(0)->6, Mon(1)->0...
            activityData[idx]++;
        }
    };

    progress.modules.forEach(aggregate);
    progress.problems.forEach(aggregate);

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [{
                label: 'Activity',
                data: activityData,
                backgroundColor: '#0891b2',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#f1f5f9' },
                    ticks: {
                        color: '#94a3b8',
                        font: { weight: '600' },
                        stepSize: 1,
                        precision: 0
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8', font: { weight: '600' } }
                }
            }
        }
    });
}

// 2. Courses
function renderCourses() {
    const container = document.getElementById('courses-grid');
    container.innerHTML = COURSES.map(c => {
        const courseModules = MODULES.filter(m => m.courseId === c.id);
        return `
    <div class="bg-white border border-slate-100 shadow-sm course-card rounded-3xl flex flex-col overflow-hidden transition-all">
                <div class="course-image" style="background-image: url('${c.image}')"></div>
                <div class="p-6 flex-1 flex flex-col">
                    <div class="flex justify-between items-start mb-3">
                        <span class="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-lg uppercase tracking-wider">${c.category}</span>
                        <span class="text-xs font-bold text-slate-400">${c.level}</span>
                    </div>
                    <h3 class="text-xl font-black text-slate-900 mb-3">${c.title}</h3>
                    <p class="text-slate-500 font-medium text-sm flex-1 mb-6">${c.description}</p>
                    <div class="flex items-center text-xs font-bold text-slate-400 mb-6">
                        <i data-lucide="clock" class="w-4 h-4 mr-2"></i> ${c.duration}
                        <span class="mx-3 text-slate-200">|</span>
                        <i data-lucide="book" class="w-4 h-4 mr-2"></i> ${courseModules.length} Modules
                    </div>
                    <button onclick="startCourse('${c.id}')" class="w-full bg-slate-900 hover:bg-primary text-white py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1">Continue Learning</button>
                </div>
            </div>
    `;
    }).join('');
    lucide.createIcons();
}

let currentCourseId = null;
function startCourse(courseId) {
    currentCourseId = courseId;
    currentModuleIndex = 0;
    navigateTo('curriculum');
    renderCurriculum();
}

// 3. Curriculum
let currentModuleIndex = 0;
function renderCurriculum() {
    const list = document.getElementById('module-list');
    const user = store.getCurrentUser();
    const progress = store.getUserProgress(user.id);

    const filteredModules = MODULES.filter(m => m.courseId === currentCourseId);

    list.innerHTML = filteredModules.map((m, idx) => {
        const isCompleted = progress.modules.find(mod => mod.id === m.id);
        const isActive = idx === currentModuleIndex;
        return `
    <div class="module-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" onclick="loadModule(${idx})">
        <div class="flex justify-between items-center">
            <span class="font-medium truncate">${idx + 1}. ${m.title}</span>
            ${isCompleted ? '<i data-lucide="check-circle" class="w-4 h-4"></i>' : ''}
        </div>
            </div>
    `;
    }).join('');
    lucide.createIcons();

    // Load Content
    const module = filteredModules[currentModuleIndex];
    document.getElementById('module-content').innerHTML = `
    <h1 class="text-4xl font-black text-slate-900 mb-6 tracking-tight">${module.title}</h1>
        <div class="text-slate-600 space-y-4 font-medium leading-relaxed">
            ${module.content}
        </div>
        <div class="mt-12 flex flex-col md:flex-row gap-6">
            ${QUIZZES[module.id] ? `
                <div class="flex-1 p-8 bg-emerald-50 border border-emerald-100 rounded-3xl flex items-center justify-between">
                    <div>
                        <h4 class="text-lg font-black text-slate-900 mb-1">Concept Quiz</h4>
                        <p class="text-slate-500 text-sm font-medium">Verify your understanding of this topic.</p>
                    </div>
                    <button onclick="startQuiz('${module.id}')" class="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-black hover:shadow-lg hover:shadow-emerald-300/30 transition-all flex items-center">
                        <i data-lucide="help-circle" class="w-5 h-5 mr-2"></i> Take Quiz
                    </button>
                </div>
            ` : ''}
            ${module.problemId ? `
                <div class="flex-1 p-8 bg-primary/5 border border-primary/10 rounded-3xl flex items-center justify-between">
                    <div>
                        <h4 class="text-lg font-black text-slate-900 mb-1">Coding Practice</h4>
                        <p class="text-slate-500 text-sm font-medium">Solve the interactive practice problem.</p>
                    </div>
                    <button onclick="openEditor('${module.problemId}')" class="bg-primary text-white px-8 py-3 rounded-2xl font-black hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center">
                        <i data-lucide="code-2" class="w-5 h-5 mr-2"></i> Solve Problem
                    </button>
                </div>
            ` : ''}
        </div>
`;

    // Buttons
    const prevBtn = document.getElementById('prev-module-btn');
    const nextBtn = document.getElementById('next-module-btn');

    prevBtn.disabled = currentModuleIndex === 0;
    prevBtn.onclick = () => loadModule(currentModuleIndex - 1);

    nextBtn.onclick = () => {
        store.completeModule(module.id);
        if (currentModuleIndex < filteredModules.length - 1) {
            loadModule(currentModuleIndex + 1);
        } else {
            navigateTo('dashboard');
        }
    };
}

function loadModule(idx) {
    const filteredModules = MODULES.filter(m => m.courseId === currentCourseId);
    if (idx >= 0 && idx < filteredModules.length) {
        currentModuleIndex = idx;
        renderCurriculum();
    }
}

// 4. Problems
function renderProblems() {
    const list = document.getElementById('problems-list');
    const user = store.getCurrentUser();
    const progress = store.getUserProgress(user.id);

    list.innerHTML = PROBLEMS.map(p => {
        const isSolved = progress.problems.find(prob => prob.id === p.id);
        const difficultyClass = `difficulty-${p.difficulty.toLowerCase()}`;
        return `
    <div class="bg-white border border-slate-100 shadow-sm p-5 rounded-3xl flex items-center justify-between problem-item cursor-pointer hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-slate-200/50" onclick="openEditor('${p.id}')">
                <div class="flex items-center space-x-5">
                    <div class="w-12 h-12 rounded-2xl ${isSolved ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'} flex items-center justify-center">
                        <i data-lucide="${isSolved ? 'check-circle' : 'code-2'}" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 text-lg">${p.title}</h4>
                        <div class="flex space-x-2 mt-2">
                            ${p.tags.map(t => `<span class="text-[10px] font-bold bg-slate-50 px-2.5 py-1 rounded-lg text-slate-500 uppercase tracking-widest">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-6">
                    <span class="difficulty-badge ${difficultyClass}">${p.difficulty}</span>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-slate-300"></i>
                </div>
            </div>
    `;
    }).join('');
    lucide.createIcons();
}

// 5. Editor
let currentProblem = null;
function openEditor(problemId) {
    currentProblem = PROBLEMS.find(p => p.id === problemId);
    if (!currentProblem) return;

    navigateTo('editor');

    const p = currentProblem;

    // Difficulty color
    const diffColor = { Easy: 'emerald', Medium: 'amber', Hard: 'red' }[p.difficulty] || 'slate';

    // Tags
    const tagsHTML = (p.tags || []).map(t =>
        `< span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-md" > ${t}</span > `
    ).join('');

    // Requirements — derive human-readable hints from validation source
    const validationStr = p.validation ? p.validation.toString() : '';
    const requirements = deriveRequirements(p.id, validationStr);
    const renderInlineCode = (text) => text.replace(/`([^`]+)`/g, (_, code) => {
        const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<code class="px-1.5 py-0.5 bg-slate-100 text-primary font-mono text-xs rounded font-bold">${escaped}</code>`;
    });
    const requirementsHTML = requirements.map(r =>
        `<li class="flex items-start space-x-2 text-sm text-slate-700">
            <span class="mt-1 text-emerald-400 flex-shrink-0">&#10003;</span>
            <span>${renderInlineCode(r)}</span>
        </li>`
    ).join('');

    document.getElementById('problem-title').textContent = p.title;
    document.getElementById('problem-diff').textContent = p.difficulty;
    document.getElementById('problem-diff').className = `difficulty-badge difficulty-${p.difficulty.toLowerCase()}`;
    document.getElementById('problem-tags').innerHTML = tagsHTML;

    document.getElementById('problem-desc').innerHTML = `
        <div class="space-y-5">
            <div>
                <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Description</h3>
                <p class="text-slate-700 leading-relaxed text-sm">${p.description}</p>
            </div>
            ${requirementsHTML ? `
            <div>
                <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Requirements</h3>
                <ul class="space-y-1.5">${requirementsHTML}</ul>
            </div>
            ` : ''}
            <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 class="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">💡 How to Submit</h4>
                <p class="text-xs text-blue-700 leading-relaxed">Write your code in the editor, click <strong>Run Code</strong> to preview, then click <strong>Submit</strong> to check your answer.</p>
            </div>
        </div>
    `;

    const editor = document.getElementById('code-editor');
    editor.value = p.initialCode;

    // Auto-run on input
    editor.oninput = () => runCode(false);
    document.getElementById('run-code-btn').onclick = () => runCode(false);

    // Back button
    document.querySelector('.back-to-problems').onclick = () => navigateTo('problems');

    lucide.createIcons();
    runCode(false);
}

// Derive human-readable requirements from problem validation
function deriveRequirements(problemId, validationStr) {
    const reqMap = {
        'html-struct-1': ['Include `<!DOCTYPE html>` declaration', 'Add `<html>` root element', 'Add a `<head>` section with a `<title>`', 'Add a `<body>` section with a heading'],
        'html-text-2': ['Use `<b>` or `<strong>` for bold text', 'Use `<i>` or `<em>` for italic text'],
        'html-lists-3': ['Create an unordered list `<ul>` with at least 3 items', 'Create an ordered list `<ol>` with at least 3 steps'],
        'html-links-4': ['Add 3 anchor tags `<a href="...">` for navigation', 'Include an `<img>` tag below the nav'],
        'html-table-5': ['Wrap content in a `<table>` element', 'Add `<th>` header cells for Day, Time, Subject', 'Add at least one data row with `<tr>` and `<td>`'],
        'html-forms-6': ['Wrap in a `<form>` element', 'Add an email input (`type="email"`)', 'Add a password input (`type="password"`)', 'Add a submit button'],
        'html-attr-7': ['Add an `<a>` tag', 'Include `href=` attribute', 'Include `title=` attribute'],
        'html-format-8': ['Use `<strong>` tag', 'Use `<em>` tag'],
        'html-img-9': ['Add an `<img>` tag', 'Include `src=` attribute', 'Include `alt=` attribute'],
        'html-block-10': ['Add a `<div>` element', 'Add a `<span>` element'],
        'html-class-11': ['Include `id=` attribute', 'Include `class=` attribute'],
        'html-semantic-12': ['Add a `<header>` element', 'Add a `<main>` element', 'Add a `<footer>` element'],
        'html-media-13': ['Add a `<video>` element', 'Include `controls` attribute'],
        'html-iframe-14': ['Add an `<iframe>` element', 'Include `src=` attribute'],
        'html-attr-7': ['Add an `<a>` tag', 'Include `href=` attribute', 'Include `title=` attribute'],
        'html-format-8': ['Use `<strong>` tag', 'Use `<em>` tag'],
        'html-img-9': ['Add an `<img>` tag', 'Include `src=` attribute', 'Include `alt=` attribute'],
        'html-block-10': ['Add a `<div>` element', 'Add a `<span>` element'],
        'html-class-11': ['Include `id=` attribute', 'Include `class=` attribute'],
        'html-semantic-12': ['Add a `<header>` element', 'Add a `<main>` element', 'Add a `<footer>` element'],
        'html-media-13': ['Add a `<video>` element', 'Include `controls` attribute'],
        'html-iframe-14': ['Add an `<iframe>` element', 'Include `src=` attribute'],
        'css-select-1': ['Target the `h1` selector in CSS', 'Set `color: blue`', 'Set `text-align: center`'],
        'js-vars-1': ['Create two variables for the numbers 5 and 10', 'Add them together', 'Show the result (15) with `alert()`'],
        'css-box-1': ['Target `.box` in CSS', 'Set `width: 200px`', 'Set `padding: 20px`', 'Add a `border` with a color'],
        'css-flex-1': ['Set `display: flex` on the container', 'Add `justify-content: center`', 'Add `align-items: center`'],
        'js-func-1': ['Define `function multiply(a, b)`', 'Use `*` to multiply the parameters', 'Return the result with `return`'],
        'js-dom-1': ['Select a DOM element using `document.getElementById()`', 'Change its `style.backgroundColor`'],
        'css-grid-5': ['Apply `display: grid`', 'Use `grid-template-columns`'],
        'css-pos-6': ['Apply `position: absolute`', 'Include `top: 10px`', 'Include `right: 20px`'],
        'css-trans-7': ['Include `transition:` property', 'Specify `0.5s` duration'],
        'css-media-8': ['Use `@media` rule', 'Include `max-width: 600px`', 'Include `display: none`'],
        'css-var-9': ['Declare `--primary: purple`', 'Apply `color: var(--primary)`'],
        'css-pseudo-10': ['Target `a:hover` selector', 'Include `color: green`'],
        'css-shadow-11': ['Use `box-shadow:` property'],
        'css-transform-12': ['Use `transform:` property', 'Include `rotate(45deg)` function'],
        'css-zindex-13': ['Apply `z-index: 99`'],
        'css-anim-14': ['Use `@keyframes fade`', 'Include `opacity: 0` and `opacity: 1`'],
        'js-if-4': ['Use an `if/else` statement', 'Include `Adult` and `Minor`'],
        'js-loop-5': ['Use a `for` loop', 'Log to console'],
        'js-arr-6': ['Use `.map` array method'],
        'js-obj-7': ['Access `user.username` or `user["username"]`'],
        'js-arrow-8': ['Declare arrow function `const subtract = (`', 'Use `=>` syntax'],
        'js-class-9': ['Use `class Animal`', 'Include a `constructor`'],
        'js-promise-10': ['Use `new Promise`', 'Call `resolve("Done")`'],
        'js-async-11': ['Define `async function loadData`', 'Use `await fetch`'],
        'js-err-12': ['Use `try {` block', 'Use `catch` block'],
        'js-event-13': ['Use `addEventListener`', 'Listen for `"click"`'],
        'js-storage-14': ['Use `localStorage.setItem`', 'Save key `theme` with value `dark`'],
    };
    return reqMap[problemId] || [];
}

function runCode(notify) {
    const code = document.getElementById('code-editor').value;
    const preview = document.getElementById('code-preview');

    if (preview) {
        preview.srcdoc = code;
    }

    /* Topic: DOM & Events | CO Number: CO4 */
    /* Topic: Event handling | CO Number: CO4 */
    if (notify && currentProblem && currentProblem.validation) {
        if (currentProblem.validation(code)) {
            store.solveProblem(currentProblem.id);
            showEditorToast('✅ Correct! Problem Solved.', 'success');
            setTimeout(() => navigateTo('problems'), 1500);
        } else {
            showEditorToast('❌ Not quite right. Keep trying!', 'error');
        }
    }
}

function submitCode() {
    const code = document.getElementById('code-editor').value;
    if (!code.trim()) {
        showEditorToast('⚠️ Please write some code first.', 'error');
        return;
    }
    if (!currentProblem) return;

    // Update preview first
    const preview = document.getElementById('code-preview');
    if (preview) preview.srcdoc = code;

    if (currentProblem.validation) {
        if (currentProblem.validation(code)) {
            store.solveProblem(currentProblem.id);
            showEditorToast('✅ Correct! Problem marked as solved.', 'success');
            setTimeout(() => navigateTo('problems'), 1500);
        } else {
            showEditorToast('❌ Incorrect output. Check the goal and try again.', 'error');
        }
    } else {
        // No validation — accept all submissions
        store.solveProblem(currentProblem.id);
        showEditorToast('✅ Submitted successfully!', 'success');
        setTimeout(() => navigateTo('problems'), 1500);
    }
}

function showEditorToast(message, type) {
    let toast = document.getElementById('editor-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'editor-toast';
        toast.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:9999;padding:12px 24px;border-radius:12px;font-weight:700;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,0.15);transition:opacity 0.3s;';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.background = type === 'success' ? '#10b981' : '#ef4444';
    toast.style.color = '#fff';
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// 6. Profile
function renderProfile() {
    const user = store.getCurrentUser();
    if (!user) return;

    const progress = store.getUserProgress(user.id);
    const totalModules = MODULES.length;
    const totalProblems = PROBLEMS.length;

    const modulesCompleted = progress.modules.length;
    const problemsSolved = progress.problems.length;

    const modulesPct = totalModules > 0 ? Math.round((modulesCompleted / totalModules) * 100) : 0;
    const problemsPct = totalProblems > 0 ? Math.round((problemsSolved / totalProblems) * 100) : 0;
    const overallProgress = Math.round((modulesPct + problemsPct) / 2);

    // Populate Info
    document.getElementById('profile-full-name').textContent = user.fullname;
    document.getElementById('profile-username').textContent = user.username;
    document.getElementById('profile-role-badge').textContent = user.role;
    document.getElementById('profile-joined-date').textContent = user.joinedAt || 'March 2026';
    document.getElementById('profile-avatar-large').textContent = user.fullname.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    // Populate Stats
    document.getElementById('profile-stat-modules').textContent = modulesCompleted;
    document.getElementById('profile-stat-problems').textContent = problemsSolved;
    document.getElementById('profile-stat-progress').textContent = `${overallProgress}%`;

    // Populate Bars
    document.getElementById('profile-course-pct').textContent = `${modulesPct}%`;
    document.getElementById('profile-course-bar').style.width = `${modulesPct}%`;

    document.getElementById('profile-challenge-pct').textContent = `${problemsPct}%`;
    document.getElementById('profile-challenge-bar').style.width = `${problemsPct}%`;

    lucide.createIcons();
}

// 7. Admin Dashboard
function renderAdminDashboard() {
    const users = store.state.users;
    const progress = store.state.progress;

    // Only count learner/student users (not admin)
    const learnerUsers = users.filter(u => u.role !== 'admin');

    let totalSubmissions = 0;
    let completedModules = 0;

    users.forEach(user => {
        const p = progress[user.id];
        if (p) {
            totalSubmissions += (p.problems ? p.problems.length : 0);
            completedModules += (p.modules ? p.modules.length : 0);
        }
    });

    const allModuleCount = COURSES.reduce((sum, course) => sum + (course.modules ? course.modules.length : 0), 0);
    const totalModules = learnerUsers.length * allModuleCount;
    const passRate = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

    document.getElementById('admin-stat-users').textContent = learnerUsers.length;
    document.getElementById('admin-stat-submissions').textContent = totalSubmissions;
    document.getElementById('admin-stat-passrate').textContent = passRate + '%';

    // Render real activity feed
    const activityContainer = document.getElementById('admin-activity-feed');
    if (activityContainer) {
        let activityItems = [];
        users.forEach(user => {
            const p = progress[user.id];
            if (p) {
                const initials = user.fullname ? user.fullname.split(' ').map(w => w[0]).join('').toUpperCase() : user.username[0].toUpperCase();
                (p.problems || []).forEach(probObj => {
                    const probId = typeof probObj === 'string' ? probObj : probObj.id;
                    const problem = PROBLEMS.find(pr => pr.id === probId);
                    activityItems.push(`
                        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">${initials}</div>
                                <div>
                                    <p class="text-sm font-bold text-slate-900">${user.fullname || user.username}</p>
                                    <p class="text-xs text-slate-500">Solved "${problem ? problem.title : probId}"</p>
                                </div>
                            </div>
                            <span class="text-[10px] font-bold text-slate-400">Recent</span>
                        </div>`);
                });
                (p.modules || []).forEach(modObj => {
                    const modId = typeof modObj === 'string' ? modObj : modObj.id;
                    const mod = MODULES.find(m => m.id === modId);
                    const modTitle = mod ? mod.title : modId;
                    activityItems.push(`
                        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm">${initials}</div>
                                <div>
                                    <p class="text-sm font-bold text-slate-900">${user.fullname || user.username}</p>
                                    <p class="text-xs text-slate-500">Completed "${modTitle}"</p>
                                </div>
                            </div>
                            <span class="text-[10px] font-bold text-slate-400">Recent</span>
                        </div>`);
                });
            }
        });

        activityContainer.innerHTML = activityItems.length > 0
            ? activityItems.slice(-5).reverse().join('')
            : `<p class="text-slate-400 text-sm text-center py-6">No recent activity yet.</p>`;
    }

    lucide.createIcons();
}

// Helper: Back buttons in views
const backBtn = document.querySelector('.back-btn');
if (backBtn) {
    backBtn.addEventListener('click', () => navigateTo('learning'));
}

// 8. Tests/Assessments
function renderTests() {
    const container = document.getElementById('tests-grid');
    if (!container) return;

    container.innerHTML = TESTS.map(t => `
        <div class="bg-white border border-slate-100 shadow-sm p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:shadow-xl hover:shadow-slate-200/50">
            <div class="w-16 h-16 bg-${t.color}-500/10 text-${t.color}-600 rounded-2xl flex items-center justify-center mb-6">
                <i data-lucide="${t.icon}" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-black text-slate-900 mb-2">${t.title}</h3>
            <div class="flex items-center space-x-3 text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">
                <span>${t.questions} Qs</span>
                <span>•</span>
                <span>${t.duration}</span>
                <span>•</span>
                <span>${t.level}</span>
            </div>
            <button onclick="startTest('${t.id}')" class="w-full bg-slate-900 hover:bg-primary text-white font-bold py-3 rounded-xl transition-all transform hover:-translate-y-1">Start Assessment</button>
        </div>
    `).join('');
    lucide.createIcons();
}

function startTest(testId) {
    const questions = QUIZZES[testId];
    if (!questions) {
        alert("This assessment is coming soon!");
        return;
    }
    /* Topic: Exception handling | CO Number: CO5 */
    startQuiz(testId, 'tests');
}

// 9. Quiz Engine
let quizState = {
    moduleId: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    source: 'curriculum'
};

function startQuiz(moduleId, source = 'curriculum') {
    const questions = QUIZZES[moduleId];
    if (!questions || questions.length === 0) {
        console.error("No questions found for module:", moduleId);
        alert("This quiz is currently unavailable.");
        return;
    }

    quizState = {
        moduleId: moduleId,
        questions: questions,
        currentIndex: 0,
        score: 0,
        source: source
    };

    // Update back button in quiz view based on source (header 'X' button)
    const backBtn = document.querySelector('#quiz-view button[onclick*="navigateTo"]');
    if (backBtn) {
        backBtn.setAttribute('onclick', `navigateTo('${source}')`);
    }

    const quizContent = document.getElementById('quiz-content');
    const quizResults = document.getElementById('quiz-results');

    if (quizContent) quizContent.classList.remove('hidden');
    if (quizResults) quizResults.classList.add('hidden');

    /* Topic: DOM & Events | CO Number: CO4 */
    renderQuizQuestion();
    navigateTo('quiz');
}

function renderQuizQuestion() {
    if (!quizState.questions || quizState.questions.length === 0) return;

    const q = quizState.questions[quizState.currentIndex];
    if (!q) return;

    const badge = document.getElementById('quiz-badge');
    const progressBar = document.getElementById('quiz-progress-bar');
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');

    if (!badge || !progressBar || !questionEl || !optionsEl) {
        console.error("Quiz UI elements not found!");
        return;
    }

    const total = quizState.questions.length;
    const current = quizState.currentIndex + 1;
    const progress = (current / total) * 100;

    badge.textContent = `Question ${current}/${total}`;
    progressBar.style.width = `${progress}%`;
    questionEl.innerHTML = q.question;

    optionsEl.innerHTML = q.options.map((opt, idx) => `
        <button onclick="handleQuizAnswer(${idx})" 
            class="quiz-option group w-full text-left p-5 border-2 border-slate-100 rounded-2xl font-bold flex items-center justify-between transition-all hover:border-primary hover:bg-primary/5">
            <span class="flex items-center">
                <span class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 mr-4 group-hover:bg-primary group-hover:text-white transition-colors">${String.fromCharCode(65 + idx)}</span>
                <span class="text-slate-700">${opt}</span>
            </span>
            <i data-lucide="chevron-right" class="w-5 h-5 text-slate-300 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all"></i>
        </button>
    `).join('');
    lucide.createIcons();
}

function handleQuizAnswer(idx) {
    const q = quizState.questions[quizState.currentIndex];
    const isCorrect = idx === q.answer;

    if (isCorrect) quizState.score++;

    // Visual feedback (optional enhance later)
    if (quizState.currentIndex < quizState.questions.length - 1) {
        quizState.currentIndex++;
        renderQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById('quiz-content').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('quiz-score-text').textContent = `You scored ${quizState.score} out of ${quizState.questions.length} correct.`;

    const backBtnResults = document.querySelector('#quiz-results button[onclick*="navigateTo"]');
    if (backBtnResults) {
        backBtnResults.setAttribute('onclick', `navigateTo('${quizState.source}')`);
        backBtnResults.innerHTML = `<i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i> Back to ${quizState.source === 'tests' ? 'Tests' : 'Curriculum'}`;
        lucide.createIcons();
    }

    // Complete module on success?
    /* Topic: Storage & Async Programming | CO Number: CO4 */
    if (quizState.score === quizState.questions.length && !quizState.moduleId.startsWith('test-')) {
        store.completeModule(quizState.moduleId);
    }
}

function renderLeaderboard() {
    const listContainer = document.getElementById('leaderboard-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';

    // Calculate scores
    const leaderboardData = store.state.users.map(user => {
        const progress = store.getUserProgress(user.id);
        const score = progress.problems ? progress.problems.length : 0;
        return { user, score };
    });

    // Sort descending by score
    leaderboardData.sort((a, b) => b.score - a.score);

    // Render list
    leaderboardData.forEach((data, index) => {
        const rank = index + 1;
        const isCurrentUser = store.getCurrentUser() && store.getCurrentUser().id === data.user.id;

        let rankBadge = `<span class="text-slate-500 font-bold">#${rank}</span>`;
        if (rank === 1) rankBadge = `<span class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm mx-auto"><i data-lucide="crown" class="w-4 h-4"></i></span>`;
        if (rank === 2) rankBadge = `<span class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm mx-auto">#2</span>`;
        if (rank === 3) rankBadge = `<span class="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm mx-auto">#3</span>`;

        const row = document.createElement('div');
        row.className = `grid grid-cols-12 gap-4 p-4 items-center transition-colors hover:bg-slate-50 text-center ${isCurrentUser ? 'bg-primary/5' : ''}`;

        row.innerHTML = `
            <div class="col-span-2">
                ${rankBadge}
            </div>
            <div class="col-span-6 flex items-center text-left">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-white flex items-center justify-center font-bold mr-4 shadow-md">
                    ${data.user.fullname.charAt(0).toUpperCase()}
                </div>
                <div>
                    <div class="font-bold text-slate-800 flex items-center gap-2">
                        ${data.user.fullname}
                        ${isCurrentUser ? '<span class="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider">You</span>' : ''}
                    </div>
                    <div class="text-xs text-slate-400">@${data.user.username}</div>
                </div>
            </div>
            <div class="col-span-4">
                <div class="inline-flex items-center px-3 py-1 bg-green-50 text-green-600 rounded-full font-bold">
                    <i data-lucide="check-circle-2" class="w-4 h-4 mr-2"></i>
                    ${data.score} Solved
                </div>
            </div>
        `;

        listContainer.appendChild(row);
    });

    lucide.createIcons();
}
