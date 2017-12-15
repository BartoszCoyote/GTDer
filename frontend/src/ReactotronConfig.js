import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

Reactotron
    .configure() // we can use plugins here -- more on this later
    .use(reactotronRedux()) //  <- here i am!

    .connect() // let's connect!