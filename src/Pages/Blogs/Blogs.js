import React from "react"

const Blogs = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl text-center">
        How will you improve the performance of a React Application?
      </h2>
      <p>
        we will discuss five important ways to optimize the performance of a
        React application, including pre-optimization techniques. These include:
      </p>
      <div>
        <ul>
          <li>1. Keeping component state local where necessary</li>
          <li>
            2. Memoizing React components to prevent unnecessary re-renders
          </li>
          <li>3. Code-splitting in React using dynamic import()</li>
          <li>4. Windowing or list virtualization in React</li>
          <li>5. Lazy loading images in React</li>
        </ul>
      </div>

      <h2 className="text-3xl text-center">
        What are the different ways to manage a state in a React application?
      </h2>
      <p>
        Every React component has a built-in state. This state is an object
        which stores the property values that belong to a component. State is
        able to keep data from different components in-sync because each state
        update re-renders all relevant components. The built-in way that React
        provides for setting component states is by using setState() and adding
        “local state” to a class. There are several other ways to manage state​s
        in React, including the use of: 1. Hooks 2. React Context API 3. Apollo
        Link State We will, however, focus on the use of the setState() method.
      </p>
      <h2 className="text-3xl text-center">
        How does prototypical inheritance work?
      </h2>
      <p>
        Every object with its methods and properties contains an internal and
        hidden property known as [[Prototype]]. The Prototypal Inheritance is a
        feature in javascript used to add methods and properties in objects. It
        is a method by which an object can inherit the properties and methods of
        another object. Traditionally, in order to get and set the [[Prototype]]
        of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
        Nowadays, in modern language, it is being set using __proto__.
      </p>
    </div>
  )
}

export default Blogs
