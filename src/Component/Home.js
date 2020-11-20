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
                        <p>The following is a rudimentary example of React usage in HTML with JSX and JavaScript.</p>
                        <p>

                        </p>

                        <br /><br />
                        <h2>Notable features [<a href="/">edit</a>]</h2><hr />
                        <h3><b>Component</b> [<a href="/">edit</a>]</h3>
                        <p>React code is made of entities called components. Components can be rendered to a particular 
                           element in the DOM using the React DOM library. When rendering a component, one can pass in 
                           values that are known as "props"<a href="/"><sup>[11]</sup></a>:</p>

                        <p>The two primary ways of declaring components in React is via functional components and class-based components.</p>
                        <h3><b>Functional components</b></h3>  
                        <p>Functional components are declared with a function that then returns some JSX.</p>
                        <h3><b>Class-based components</b></h3>
                        <p>Class-based components are declared using ES6 classes.</p>
                        <h3><b>Virtual DOM</b></h3>
                        <p>Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an 
                            in-memory data-structure cache, computes the resulting differences, and then updates the browser's 
                            displayed DOM efficiently.<sup>[12]</sup>. This process is called reconciliation. This allows the programmer 
                            to write code as if the entire page is rendered on each change, while the React libraries only render 
                            subcomponents that actually change. This selective rendering provides a major performance boost. It 
                            saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.</p>
                        <h3><b>Lifecycle methods</b></h3>
                        <p>Lifecycle methods use a form of hooking that allows the execution of code at set points during a component's 
                            lifetime.</p>
                            <ul>
                                <li>shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.</li>
                                <li>componentDidMount is called once the component has "mounted" (the component has been created in the user interface, often by associating it with a DOM node). This is commonly used to trigger data loading from a remote source via an API.</li>
                                <li>componentWillUnmount is called immediately before the component is torn down or "unmounted". This is commonly used to clear resource-demanding dependencies to the component that will not simply be removed with the unmounting of the component (e.g., removing any setInterval() instances that are related to the component, or an "eventListener" set on the "document" because of the presence of the component)</li>
                                <li>render is the most important lifecycle method and the only required one in any component. It is usually called every time the component's state is updated, which should be reflected in the user interface.</li>
                            </ul>
                        <h3><b>JSX</b></h3>
                        <p>JSX, or JavaScript XML, is an extension to the JavaScript language syntax.<sup>[13]</sup> Similar in appearance to HTML, 
                            JSX provides a way to structure component rendering using syntax familiar to many developers. React 
                            components are typically written using JSX, although they do not have to be (components may also be 
                            written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for PHP called XHP.</p>
                        <p>An example of JSX code:</p>
                        <h4><b>Nested elements</b></h4>
                        <p>Multiple elements on the same level need to be wrapped in a single React element such as the element shown above, 
                            a fragment delineated by or in its shorthand form, or returned as an array.<sup>[14][15]</sup></p>
                        <h4><b>Attributes</b></h4>
                        <p>JSX provides a range of element attributes designed to mirror those provided by HTML. Custom attributes can 
                            also be passed to the component.<sup>[16]</sup> All attributes will be received by the component as props.</p>
                        <h4><b>JavaScript expressions</b></h4>
                        <p>JavaScript expressions (but not statements) can be used inside JSX with curly brackets:</p>
                        <p>The example above will render</p>
                        <h4><b>Conditional statements</b></h4>
                        <p>If–else statements cannot be used inside JSX but conditional expressions can be used instead. The example below will render 
                             as the string 'true' because i is equal to 1</p>
                        <p>The above will render:</p>
                        <p>Functions and JSX can be used in conditionals:</p>
                        <p>The above will render:</p>
                        <p>Code written in JSX requires conversion with a tool such as Babel before it can be understood by web browsers.
                            <sup>[17]</sup> This processing is generally performed during a software build process before the application is deployed.</p>
                        <h3><b>Architecture beyond HTML</b></h3>
                        <p>The basic architecture of React applies beyond rendering HTML in the browser. For example, Facebook has dynamic 
                            charts that render to tags,<sup>[18]</sup> and Netflix and PayPal use universal loading to render identical 
                            HTML on both the server and client.<sup>[19][20]</sup></p>
                        <h3><b>React hooks</b></h3>
                        <p>Hooks are functions that let developers "hook into" React state and lifecycle features from function components.
                            <sup>[21]</sup> They make code readable and easily understandable. Hooks don’t work inside classes — they let you use 
                            React without classes.<sup>[22]</sup></p>
                        <p>React provides a few built-in Hooks like useState,<sup>[22]</sup> useContext, useReducer and useEffect[24] to name a few. 
                            They are all stated in the Hooks API Reference.[25] useState and useEffect, which are the most used, are for 
                            controlling states and side effects respectively in React Components.</p>
                        <h4><b>Rules of hooks</b></h4>
                        <p>There are also rules of hooks[26] which must be followed before they can be used.</p>
                        <ol>
                            <li>Hooks should only be called at the top level (not inside loops or if statements).</li>
                            <li>Hooks should only be called from React function components, not normal functions or class components.</li>
                        </ol>
                        <h4><b>Custom hooks</b></h4>
                        <p>Building your own hooks[27] which are called custom hooks lets you extract component logic into reusable 
                            functions. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. 
                            The rules of hooks also apply to them i.e, custom hooks should be written in compliance with the rules enforced 
                            by React or else there will be high chance of breaking the code's integrity. Check the following link to learn 
                            the rules for creating the custom hooks.</p>

                            <br />
                        <h2>Common idioms</h2><hr />
                        <p>React does not attempt to provide a complete "application library". It is designed specifically for building user 
                            interfaces[3] and therefore does not include many of the tools some developers might consider necessary to build 
                            an application. This allows the choice of whichever libraries the developer prefers to accomplish tasks such as 
                            performing network access or local data storage. Common patterns of usage have emerged as the library matures.</p>
                        <h3><b>Use of the Flux architecture</b></h3>
                        <p>To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional 
                            flow), the Flux architecture represents an alternative to the popular model-view-controller architecture. Flux 
                            features actions which are sent through a central dispatcher to a store, and changes to the store are propagated 
                            back to the view.[28] When used with React, this propagation is accomplished through component properties.</p>
                        <p>Flux can be considered a variant of the observer pattern.[29]</p>
                        <p>A React component under the Flux architecture should not directly modify any props passed to it, but should be passed 
                            callback functions that create actions which are sent by the dispatcher to modify the store. The action is an object 
                            whose responsibility is to describe what has taken place: for example, an action describing one user "following" 
                            another might contain a user id, a target user id, and the type USER_FOLLOWED_ANOTHER_USER.[30] The stores, which 
                            can be thought of as models, can alter themselves in response to actions received from the dispatcher.</p>
                            <br />
                        <h2>Future development</h2><hr />
                        <p>Project status can be tracked via the core team discussion forum.[32] However, major changes to React go through 
                            the Future of React repository issues and pull requests.[33][34] This enables the React community to provide 
                            feedback on new potential features, experimental APIs and JavaScript syntax improvements.</p>
                            <br />
                        <h2>History</h2><hr />
                        <p>React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React 
                            called "FaxJS".[35][36] He was influenced by XHP, an HTML component library for PHP. It was first deployed 
                            on Facebook's News Feed in 2011 and later on Instagram in 2012.[37] It was open-sourced at JSConf US in May 
                            2013.[36]</p>
                        <p>React Native, which enables native Android, iOS, and UWP development with React, was announced at 
                            Facebook's React Conf in February 2015 and open-sourced in March 2015.</p>  
                        <p>On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React library for building user 
                            interfaces.[38] React Fiber was to become the foundation of any future improvements and feature development 
                            of the React library.<sup>[39][needs update]</sup></p>
                        <p>On September 26, 2017, React 16.0 was released to the public.[40]</p>
                        <p>On February 16, 2019, React 16.8 was released to the public.[41] The release introduced React Hooks.[42]</p>
                        <p>On August 10, 2020, the React team announced the first release candidate for React v17.0, notable as the first 
                            major release without major changes to the React developer-facing API.[43]</p>
                            <h4 align="center"><b>Versions</b></h4>
                        
                    </Mui.Grid>
                    <Mui.Grid item xs={12} sm={10}>
                        <Mui.Card variant="outlined"  style={{width:380}}>
                        <Mui.CardContent>
                        <Mui.Typography  gutterBottom style={{fontWeight:"700"}}>
                            <img src="/react.png" width="250" height="180"></img>
                        </Mui.Typography>
                        <Mui.Typography variant="p" component="p">

                        </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                        <Mui.Button size="small"></Mui.Button>
                        </Mui.CardActions>
                        </Mui.Card>
                    </Mui.Grid>
                    
                    
            </Mui.Grid>
            </Mui.Container>
            </div>
        )
    }
}

export default Home;