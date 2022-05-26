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

      <h2 className="text-3xl text-center mt-5">
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
      <h2 className="text-3xl text-center mt-5">
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
      <h2 className="text-3xl text-center mt-5">
        What is a unit test? Why should write unit tests?
      </h2>
      <p>
        Unit tests are typically automated tests written and run by software
        developers to ensure that a section of an application (known as the
        "unit") meets its design and behaves as intended. In procedural
        programming, a unit could be an entire module, but it is more commonly
        an individual function or procedure.
      </p>
      <p>
        Unit testing ensures that all code meets quality standards before it's
        deployed. This ensures a reliable engineering environment where quality
        is paramount. Over the course of the product development life cycle,
        unit testing saves time and money, and helps developers write better
        code, more efficiently.
      </p>
      <h2 className="text-3xl text-center mt-5">
        Why you do not set the state directly in React. For example, if you have
        const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h2>
      <p>
        One should never update the state directly because of the following
        reasons: If you update it directly, calling the setState() afterward may
        just replace the update you made. When you directly update the state, it
        does not change this.state immediately. Instead, it creates a pending
        state transition, and accessing it after calling this method will only
        return the present value. You will lose control of the state across all
        components.
      </p>
    </div>
  )
}

export default Blogs
