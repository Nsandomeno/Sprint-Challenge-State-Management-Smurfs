1. What problem does the context API help solve?

Context API allows you to eliminate 'middle-men' components needed to pass data down the component tree manually and it also enables the ability to have a child update a parent component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - actions describe possible changes to state. State can only change in a way that a given action describes making the state finite/immutable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state holds data that is global to the component tree while component state holds component-specific information (it may still be passed around manually). As the complexity of logic and size of state for an application grow, the benefits to using application state increase.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows you to make redux asynchronous. Our action creators can now interact with external data that may also be dynamic. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite state management system because the idea of having a global state makes sense to me. It can never really hurt (despite the setup time for small applications that don't experience significant benefits from global state) and always help!
