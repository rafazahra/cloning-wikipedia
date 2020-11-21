import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div>
                <Mui.Container fixed style={{ fontFamily:'Times-new-roman'}}>
                    <Mui.Grid container spacing={3}>
                            <Mui.Grid item xs={12} sm={2}>
                                <img src="/wikipedia1.png" width="150" height="150" /><br />
                                    <justify /><br />
                                        <a href="/">Main page</a><br />
                                        <a href="/">Contents</a><br />
                                        <a href="/">Current events</a><br />
                                        <a href="/">Random article</a><br />
                                        <a href="/">About wikipedia</a><br />
                                        <a href="/">Contact us</a><br />
                                        <a href="/">Donate</a><br /><br />
                                    <p>Contribute</p><hr />
                                        <a href="/">Help</a><br />
                                        <a href="/">Learn to edit</a><br />
                                        <a href="/">Community portal</a><br />
                                        <a href="/">Recent changes</a><br />
                                        <a href="/">Upload file</a><br /><br />
                                    <p>Tools</p><hr />
                                        <a href="/">What links here</a><br />
                                        <a href="/">Related changes</a><br />
                                        <a href="/">Special pages</a><br />
                                        <a href="/">Permanent link</a><br />
                                        <a href="/">Page information</a><br />
                                        <a href="/">Cite this page</a><br />
                                        <a href="/">Wikidata item</a><br /><br />
                                    <p>Print/export</p><hr />
                                        <a href="/">Download as PDF</a><br />
                                        <a href="/">Printable version</a><br /><br />
                                    <p>Languages</p><hr />
                            </Mui.Grid>
                            
                            <Mui.Grid item xs={12} sm={10}>
                                        <h1>React (web framework)</h1><hr />
                                            <p>From Wikipedia, the free encyclopedia</p>
                                                <p>
                                                    <b>React</b> (also known as <b>React.js</b> or <b>ReactJS</b>) is an <a href="/">open-source, front end, JavaScript library<sup>[3]</sup></a> 
                                                    for building <a href="/">user interfaces</a> or UI components. It is maintained by <a href="/">Facebook</a> and a community 
                                                    of individual developers and companies.<a href="/"><sup>[4][5][6]</sup></a> React can be used as a base in the development 
                                                    of <a href="/">single-page</a> or mobile applications. However, React is only concerned with rendering data to 
                                                    the <a href="/">DOM</a>, and so creating React applications usually requires the use of additional libraries 
                                                    for <a href="/">state management</a> and routing.<a href="/"><sup>[7][8]</sup> Redux<sup>[9]</sup></a> and React 
                                                    Router<a href="/"><sup>[10]</sup>sup</a> are respective examples of such libraries.
                                                </p><br />
                        
                        <Mui.Card variant="outlined"  style={{width:275}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom style={{fontWeight:"700"}}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a align="center">contents <a href="/">[hide]</a></a>
                                </Mui.Typography>

                                <Mui.Typography variant="p" component="p">
                                    1.<a href="/"> Basic Usage</a><br/>
                                    2.<a href="/"> Notable features</a><br/>
                                        &nbsp;&nbsp;&nbsp;2.1 <a href="/">Components</a><br/>
                                        &nbsp;&nbsp;&nbsp;2.2 <a href="/">Functional components</a><br/>
                                        &nbsp;&nbsp;&nbsp;2.3 <a href="/">Class-based components</a><br/>
                                        &nbsp;&nbsp;&nbsp;2.4 <a href="/">Virtual DOM</a><br/>
                                        &nbsp;&nbsp;&nbsp;2.5 <a href="/">Lifecycle methods</a><br/>
                                        &nbsp;&nbsp;&nbsp;2.6 <a href="/">JSX</a><br/>
                                        &nbsp;&nbsp;&nbsp;2.7 <a href="/">Architecture beyond HTML</a><br/>
                                        &nbsp;&nbsp;&nbsp;2.8 <a href="/">React hooks</a><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.1 <a href="/">Rules of hooks</a><br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.2 <a href="/">Custom hooks</a><br/>
                                    3. <a href="/">Common idioms</a><br/>
                                        &nbsp;&nbsp;&nbsp;3.1 <a href="/">Use of the Flux architecture</a><br/>
                                    4. <a href="/">Future development</a><br/>
                                    5. <a href="/">History</a><br/>
                                    6. <a href="/">Licensing</a><br/>
                                    7. <a href="/">See also</a><br/>
                                    8. <a href="/">References</a><br/>
                                    9. <a href="/">External links</a><br/> 
                                </Mui.Typography>
                            </Mui.CardContent>

                                <Mui.CardActions>
                                    <Mui.Button size="small"></Mui.Button>
                                </Mui.CardActions>

                        </Mui.Card>

                                <h2>Basic Usage [<a href="/">edit</a>]</h2><hr />
                                    <p>The following is a rudimentary example of React usage in HTML with <a href="/">JSX</a> and JavaScript.</p><br />

                                            <Mui.Card variant="outlined"  style={{width:400}}>
                                                <Mui.CardContent>
                                                    <p>
                                                        1 &lt;div id="myReactApp"&gt;&lt;/div&gt;<br />
                                                        2 <br />
                                                        3 &lt;script type="text/babel"&gt;<br />
                                                        4 &nbsp;&nbsp;  function Greeter(props) &#125;<br />
                                                        5 &nbsp;&nbsp;&nbsp;&nbsp; return &lt;h1&gt;&#123;props.greeting&#125;&lt;/h1&gt;<br />
                                                        6 &nbsp;&nbsp; &#125;<br />
                                                        7 &nbsp;&nbsp; var App = &lt;Greeter greeting="Hello World!" /&gt;;<br />
                                                        8 &nbsp;&nbsp; ReactDOM.render(App, document.getElementById('myReactApp'));<br />
                                                        9 &lt;/script&gt;
                                                    </p>
                                            </Mui.CardContent>
                                            </Mui.Card>

                                                <p>The Greeter function is a React component that accepts a property greeting. The variable 
                                                    App is an instance of the Greeter component where the greeting property is set to 
                                                    'Hello World!'. The ReactDOM.render method then renders our Greeter component inside 
                                                    the <a href="/">DOM</a> element with id myReactApp.</p>
                                                    <p>When displayed in a web browser the result will be</p>
                                                <Mui.Card variant="outlined"  style={{width:200}}>
                                                    <Mui.CardContent>
                                                        <p>
                                                            &lt;div id="myReactApp"&gt;<br />
                                                            &nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;<br />
                                                            &lt;div&gt;
                                                        </p>
                                                    </Mui.CardContent>
                                                </Mui.Card>

                                                    
                                <h2>Notable features [<a href="/">edit</a>]</h2><hr />
                                    <h3><b>Component</b> [<a href="/">edit</a>]</h3>
                                        <p>React code is made of entities called components. Components can be rendered to a particular 
                                            element in the DOM using the React DOM library. When rendering a component, one can pass in 
                                            values that are known as "props"<a href="/"><sup>[11]</sup></a>:</p><br />
                                            <Mui.Card variant="outlined"  style={{width:800}}>
                                                <Mui.CardContent>
                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;ReactDOM.render(&lt;Greeter greeting="Hello World!" /&gt;, document.getElementById('myReactApp'));</p>
                                            </Mui.CardContent>
                                            </Mui.Card>
                                        <p>The two primary ways of declaring components in React is via functional components and class-based components.</p>

                                    <h3><b>Functional components</b>[<a href="/">edit</a>]</h3>  
                                        <p>Functional components are declared with a function that then returns some JSX.</p><br />
                                                <Mui.Card variant="outlined"  style={{width:500}}>
                                                    <Mui.CardContent>
                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;const Greeting = (props) =&lt; &lt;div&gt;Hello, &#123;props.name&#125;!&lt;/div&gt;;
                                                        </p>
                                                    </Mui.CardContent>
                                                </Mui.Card>
                                    <h3><b>Class-based components</b>[<a href="/">edit</a>]</h3>
                                        <p>Class-based components are declared using <a href="/">ES6</a> classes.</p>
                                        <Mui.Card variant="outlined"  style={{width:400}}>
                                            <Mui.CardContent>
                                                <p>
                                                    &nbsp;&nbsp;class ParentComponent extends React.Component &#123;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;state = &#123; color: 'green' &#125;;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ChilComponent color=&#123;this.color.color&#125; /&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                                                    &nbsp;&nbsp;&#125;
                                                </p>
                                            </Mui.CardContent>
                                        </Mui.Card>
                                    <h3><b>Virtual DOM</b>[<a href="/">edit</a>]</h3>
                                        <p>Another notable feature is the use of a virtual <a href="/">Document Object Model</a>, or virtual DOM. React creates an 
                                            <a href="/">in-memory</a> data-structure cache, computes the resulting differences, and then updates the browser's 
                                            displayed DOM efficiently.<sup>[12]</sup>. This process is called <b>reconciliation</b>. This allows the programmer 
                                            to write code as if the entire page is rendered on each change, while the React libraries only render 
                                            subcomponents that actually change. This selective rendering provides a major performance boost. It 
                                            saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.</p>

                                    <h3><b>Lifecycle methods</b>[<a href="/">edit</a>]</h3>
                                        <p>Lifecycle methods use a form of <a href="/">hooking</a> that allows the execution of code at set points during a component's 
                                            lifetime.</p>
                                            <ul>
                                                <li>shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.</li>
                                                <li>componentDidMount is called once the component has "mounted" (the component has been created in the user interface, often by associating it with a <a href="/">DOM</a> node). This is commonly used to trigger data loading from a remote source via an <a href="/">API</a>.</li>
                                                <li>componentWillUnmount is called immediately before the component is torn down or "unmounted". This is commonly used to clear resource-demanding dependencies to the component that will not simply be removed with the unmounting of the component (e.g., removing any setInterval() instances that are related to the component, or an "<a href="/">eventListener</a>" set on the "document" because of the presence of the component)</li>
                                                <li>render is the most important lifecycle method and the only required one in any component. It is usually called every time the component's state is updated, which should be reflected in the user interface.</li>
                                            </ul>

                                    <h3><b>JSX</b>[<a href="/">edit</a>]</h3>
                                        <p>JSX, or JavaScript <a href="/">XML</a>, is an extension to the JavaScript language syntax.<sup><a>[13]</a></sup> Similar in appearance to HTML, 
                                            JSX provides a way to structure component rendering using syntax familiar to many developers. React 
                                            components are typically written using JSX, although they do not have to be (components may also be 
                                            written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for <a href="/">PHP</a> called <a href="/">XHP</a>.</p>
                                        <p>An example of JSX code:</p><br />
                                        <Mui.Card variant="outlined"  style={{width:500}}>
                                            <Mui.CardContent>
                                            <p>
                                                1 class App extends React.Component &#123;<br />
                                                2 &nbsp;&nbsp;&nbsp; render() &#123;<br />
                                                3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                                                4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
                                                5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Header&lt;/p&gt;
                                            </p>
                                            </Mui.CardContent>
                                        </Mui.Card>    
                                        <h4><b>Nested elements</b></h4>
                                                <p>Multiple elements on the same level need to be wrapped in a single React element such as the &lt;div&gt; element shown above, 
                                                    a fragment delineated by &lt;Fragment&gt; or in its shorthand form &lt; &gt; , or returned as an array.<sup><a href="/">[14][15]</a></sup></p>
                                        <h4><b>Attributes</b></h4>
                                                <p>JSX provides a range of element attributes designed to mirror those provided by HTML. Custom attributes can 
                                                    also be passed to the component.<sup><a href="/">[16]</a></sup> All attributes will be received by the component as props.</p>
                                        <h4><b>JavaScript expressions</b></h4>
                                                <p>JavaScript <a href="/">expressions</a> (but not <a href="/">statements</a>) can be used inside JSX with curly brackets &#123; &#125; :</p><br />
                                                <Mui.Card variant="outlined"  style={{width:300}}>
                                                    <Mui.CardContent>
                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&#123;10+1&#125;&lt;/h1&gt;<br /></p>
                                                    </Mui.CardContent>
                                                </Mui.Card>
                                                    <p>The example above will render</p>
                                        <h4><b>Conditional statements</b></h4>
                                                <p><a href="/">If–else statements</a> cannot be used inside JSX but conditional expressions can be used instead. The example below will render 
                                                        &#123; i === 1 ? 'true' : 'false' &#125; as the string 'true' because i is equal to 1</p><br />
                                                <p>
                                                    1  class App extends React.Component &#123;<br />
                                                    2  &nbsp;&nbsp;&nbsp; render() &#123;<br />
                                                    3  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const i = 1; <br />
                                                    4  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return (<br />
                                                    5  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;<br />
                                                    6  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h1&gt;&#123; i === 1 ? 'true' : 'false' &#123;&lt;&gt;<br />
                                                    7  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    8  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; );<br />
                                                    9  &nbsp;&nbsp;&nbsp; &#125;<br />
                                                    10  &#125;
                                                </p><br />
                                                    <p>The above will render:</p><br />
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; &lt;div&gt;<br />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h1&gt;true&lt;/h1&gt;<br />
                                                            &nbsp;&nbsp;&nbsp; &lt;div&gt;<br />
                                                        </p><br />
                                                    <p>Functions and JSX can be used in conditionals:</p>
                                                        <p>
                                                            1  class App extends React.Component &#123;<br />
                                                            2  &nbsp;&nbsp;&nbsp; render() &#123;<br />
                                                            3  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const sections = [1, 2, 3]; <br />
                                                            4  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return ( <br />
                                                            5  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;<br />
                                                            6  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#123;sections.length &gt; 0 &amp;&amp; sections.map(n =&gt; (<br />
                                                            7  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>/* 'key' is used by react to keep track of list items and their changes */</i><br />
                                                            8  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>/* Each 'key' must be unique */</i><br />
                                                            9  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div key=&#123;"section-" + n&#125;&gt;Section &#123;n&#125;&lt;/div&gt;<br />
                                                            10  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ))&#125;<br />
                                                            11  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                            12  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; );<br />
                                                            13  &nbsp;&nbsp;&nbsp; &#125;;<br />
                                                            14  &#125;
                                                        </p><br />
                                                    <p>The above will render:</p><br />
                                                        <p>
                                                            &nbsp;&nbsp;&nbsp; &lt;div&gt;<br />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;Section 1&lt;/div&gt;<br />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;Section 2&lt;/div&gt;<br />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;Section 3&lt;/div&gt;<br />
                                                            &nbsp;&nbsp;&nbsp; &lt;div&gt;<br />
                                                        </p><br />
                                                            <p>Code written in JSX requires conversion with a tool such as <a href="/">Babel</a> before it can be understood by web browsers.
                                                                <sup><a href="/">[17]</a></sup> This processing is generally performed during a software build process before the application is <a href="/">deployed</a>.</p>

                                    <h3><b>Architecture beyond HTML[<a href="/">edit</a>]</b></h3>
                                        <p>The basic architecture of React applies beyond rendering HTML in the browser. For example, Facebook has dynamic 
                                            charts that render to tags,<sup><a href="/">[18]</a></sup> and Netflix and <a href="/">PayPal</a> use universal loading to render identical 
                                            HTML on both the server and client.<sup><a href="/">[19][20]</a></sup></p>
                                    <h3><b>React hooks</b>[<a href="/">edit</a>]</h3>
                                        <p>Hooks are functions that let developers "hook into" React state and lifecycle features from function components.
                                            <sup><a href="/">[21]</a></sup> They make code readable and easily understandable. Hooks don’t work inside classes — they let you use 
                                            React without classes.<sup><a href="/">[22]</a></sup></p>
                                        <p>React provides a few built-in Hooks like useState,<sup><a href="/">[23]</a></sup> useContext, useReducer and useEffect<sup><a href="/">[24]</a></sup> to name a few. 
                                            They are all stated in the Hooks API Reference.<sup><a href="/">[25]</a></sup> useState and useEffect, which are the most used, are for 
                                            controlling states and side effects respectively in React Components.</p>

                                        <h4><b>Rules of hooks</b>[<a href="/">edit</a>]</h4>
                                            <p>There are also rules of hooks<sup><a href="/">[26]</a></sup> which must be followed before they can be used.</p>
                                                <ol>
                                                    <li>Hooks should only be called at the top level (not inside loops or if statements).</li>
                                                    <li>Hooks should only be called from React function components, not normal functions or class components.</li>
                                                </ol>
                                        <h4><b>Custom hooks</b>[<a href="/">edit</a>]</h4>
                                            <p>Building your own hooks<sup><a href="/">[27]</a></sup> which are called custom hooks lets you extract component logic into reusable 
                                                functions. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. 
                                                The rules of hooks also apply to them i.e, custom hooks should be written in compliance with the rules enforced 
                                                by React or else there will be high chance of breaking the code's integrity. Check the following link to learn 
                                                the <a href="/">rules for creating the custom hooks</a>.</p><br />


                                <h2>Common idioms</h2>[<a href="/">edit</a>]<hr />
                                    <p>React does not attempt to provide a complete "application library". It is designed specifically for building user 
                                        interfaces<sup><a hrwf="/">[3]</a></sup> and therefore does not include many of the tools some developers might consider necessary to build 
                                        an application. This allows the choice of whichever libraries the developer prefers to accomplish tasks such as 
                                        performing network access or local data storage. Common patterns of usage have emerged as the library matures.</p>

                                    <h3><b>Use of the Flux architecture</b>[<a href="/">edit</a>]</h3>
                                        <p>To support React's concept of unidirectional data flow (which might be contrasted with <a href="/">AngularJS's</a> bidirectional 
                                            flow), the Flux architecture represents an alternative to the popular <a href="/">model-view-controller</a> architecture. Flux 
                                            features actions which are sent through a central dispatcher to a store, and changes to the store are propagated 
                                            back to the view.<sup><a href="/">[28]</a></sup> When used with React, this propagation is accomplished through component properties.</p>
                                                <p>Flux can be considered a variant of the <a href="/">observer pattern.<sup>[29]</sup></a></p>
                                                        <p>A React component under the Flux architecture should not directly modify any props passed to it, but should be passed 
                                                            callback functions that create actions which are sent by the dispatcher to modify the store. The action is an object 
                                                            whose responsibility is to describe what has taken place: for example, an action describing one user "following" 
                                                            another might contain a user id, a target user id, and the type USER_FOLLOWED_ANOTHER_USER.<sup><a href="/">[30]</a></sup> The stores, which 
                                                            can be thought of as models, can alter themselves in response to actions received from the dispatcher.</p>
                                                        <p>This pattern is sometimes expressed as "properties flow down, actions flow up". Many implementations of Flux have 
                                                            been created since its inception, perhaps the most well-known being <a href="/">Redux</a>, which features a single store, 
                                                            often called a <a>single source of truth</a>.<sup><a href="/">[31]</a></sup></p>
                                    <br />


                                <h2>Future development[<a href="/">edit</a>]</h2><hr />
                                    <p>Project status can be tracked via the core team discussion forum.<sup><a href="/">[32]</a></sup> However, major changes to React go through 
                                        the Future of React repository issues and <a href="/">pull requests.<sup>[33][34]</sup></a> This enables the React community to provide 
                                        feedback on new potential features, experimental APIs and JavaScript syntax improvements.</p>
                                    <br />


                                <h2>History[<a href="/">edit</a>]</h2><hr />
                                    <p>React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React 
                                        called "FaxJS".<sup><a href="/">[35][36]</a></sup> He was influenced by <a href="/">XHP</a>, an <a href="/">HTML</a> component library for <a href="/">PHP</a>. It was first deployed 
                                        on Facebook's <a href="/">News Feed</a> in 2011 and later on <a href="/">Instagram</a> in 2012.<sup><a href="/">[37]</a></sup> It was open-sourced at JSConf US in May 
                                        2013.<sup><a href="/">[36]</a></sup></p>
                                            <p><a href="/">React Native</a>, which enables native <a href="/">Android, iOS</a>, and <a href="/">UWP</a> development with React, was announced at 
                                                Facebook's React Conf in February 2015 and open-sourced in March 2015.</p>  
                                                    <p>On April 18, 2017, Facebook announced <a href="/">React Fiber</a>, a new core algorithm of React library for building <a href="/">user interfaces</a>.
                                                    <sup><a href="/">[38]</a></sup> React Fiber was to become the foundation of any future improvements and feature development 
                                                        of the React library.<sup>[39][needs update]</sup></p>
                                                            <p>On September 26, 2017, React 16.0 was released to the public.<sup><a href="/">[40]</a></sup></p>
                                                    <p>On February 16, 2019, React 16.8 was released to the public.<sup><a href="/">[41]</a></sup> The release introduced React Hooks.<sup><a href="/">[42]</a></sup></p>
                                            <p>On August 10, 2020, the React team announced the first release candidate for React v17.0, notable as the first 
                                                major release without major changes to the React developer-facing API.<sup><a href="/">[43]</a></sup></p><br></br>


                                                <h4 align="center"><b>Versions</b></h4>


                            <h2>Licensing [<a href="/">edit</a>]</h2><hr />
                                    <p>The initial public release of React in May 2013 used the <a href="/">Apache License 2.0</a>. In October 2014, React 0.12.0 replaced 
                                        this with the <a href="/">3-clause BSD license</a> and added a separate PATENTS text file that permits usage of any Facebook 
                                        patents related to the software:<sup><a href="/">[44]</a></sup></p>
                                        <Mui.Card variant="outlined"  style={{width:1000}}>
                                            <Mui.CardContent>
                                            The license granted hereunder will terminate, automatically and without notice, for anyone that makes any claim (including 
                                            by filing any lawsuit, assertion or other action) alleging (a) direct, indirect, or contributory infringement or inducement 
                                            to infringe any patent: (i) by Facebook or any of its subsidiaries or affiliates, whether or not such claim is related to 
                                            the Software, (ii) by any party if such claim arises in whole or in part from any software, product or service of Facebook 
                                            or any of its subsidiaries or affiliates, whether or not such claim is related to the Software, or (iii) by any party relating 
                                            to the Software; or (b) that any right in any patent claim of Facebook is invalid or unenforceable.
                                            </Mui.CardContent>
                                        </Mui.Card>

                                    <p>This unconventional clause caused some controversy and debate in the React user community, because it could be interpreted to empower 
                                        Facebook to revoke the license in many scenarios, for example, if Facebook sues the licensee prompting them to take "other action" 
                                        by publishing the action on a blog or elsewhere. Many expressed concerns that Facebook could unfairly exploit the termination clause 
                                        or that integrating React into a product might complicate a startup company's future acquisition.<sup><a href="/">[45]</a></sup></p><br />
                                    <p>Based on community feedback, Facebook updated the patent grant in April 2015 to be less ambiguous and more permissive:<sup><a href="/">[46]</a></sup></p>   
                                    <Mui.Card variant="outlined" style={{width:1000}}>
                                        <Mui.CardContent>
                                        The license granted hereunder will terminate, automatically and without notice, if you (or any of your subsidiaries, corporate 
                                        affiliates or agents) initiate directly or indirectly, or take a direct financial interest in, any Patent Assertion: (i) against 
                                        Facebook or any of its subsidiaries or corporate affiliates, (ii) against any party if such Patent Assertion arises in whole or 
                                        in part from any software, technology, product or service of Facebook or any of its subsidiaries or corporate affiliates, or (iii) 
                                        against any party relating to the Software. [...] A "Patent Assertion" is any lawsuit or other action alleging direct, indirect, or 
                                        contributory infringement or inducement to infringe any patent, including a cross-claim or counterclaim.<sup><a href="/">[47]</a></sup>
                                        </Mui.CardContent>
                                    </Mui.Card>
                                    <p>
                                        The <a href="/">Apache Software Foundation</a> considered this licensing arrangement to be incompatible with its licensing policies, as it "passes along 
                                    risk to downstream consumers of our software imbalanced in favor of the licensor, not the licensee, thereby violating our Apache legal 
                                    policy of being a universal donor", and "are not a subset of those found in the [Apache License 2.0], and they cannot be sublicensed as 
                                    [Apache License 2.0]".<sup><a href="/">[48]</a></sup> In August 2017, Facebook dismissed the Apache Foundation's downstream concerns and refused to reconsider their 
                                    license.<sup><a href="/">[49][50]</a></sup> The following month, <a href="/">WordPress</a> decided to switch its Gutenberg and Calypso projects away from React.<sup><a href="/">[51]</a></sup>
                                    </p>
                                    <p>
                                    On September 23, 2017, Facebook announced that the following week, it would re-license Flow, <a href="/">Jest</a>, React, and Immutable.js under a standard 
                                    <a href="/">MIT License</a>; the company stated that React was "the foundation of a broad ecosystem of open source software for the web", and that they did 
                                    not want to "hold back forward progress for nontechnical reasons".<sup><a href="/">[52]</a></sup>
                                    </p>
                                    <p>On September 26, 2017, React 16.0.0 was released with the MIT license.<sup><a href="/">[53]</a></sup> The MIT license change has also been backported to 
                                        the 15.x release line with React 15.6.2.<sup><a href="/">[54]</a></sup></p>


                            <h2>See also [<a href="/">edit</a>]</h2><hr />
                            <ul>
                                <li><a href="/">React Native</a></li>
                                <li><a href="/">AngularJS</a></li>
                                <li><a href="/">Angular</a></li>
                                <li><a href="/">Backbone.js</a></li>
                                <li><a href="/">Ember.js</a></li>
                                <li><a href="/">Svelte</a></li>
                                <li><a href="/">Vue.js</a></li>
                                <li><a href="/">Comparison of JavaScript libraries</a></li>
                                <li><a href="/">Web Component</a></li>
                            </ul><br />

                            <h2>References [<a href="/">edit</a>]</h2><hr />
                    
                    
            </Mui.Grid>
            </Mui.Grid>
            </Mui.Container>
            </div>
        )
    }
}

export default Home;