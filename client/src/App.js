import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// load styles
import './styles/app.css'
// load components
import { Navbar, PrivateRoute } from './components/Shared'

// load routes
import Login from './routes/Login'
import Home from './routes/Home'
import CardFormCreate from './routes/CardForm/Create'
import CardFormEdit from './routes/CardForm/Edit'
// load store
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute
                            exact
                            path="/card/create"
                            component={CardFormCreate}
                        />
                        <PrivateRoute
                            exact
                            path="/card/:id/edit"
                            component={CardFormEdit}
                        />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
