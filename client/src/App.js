import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// load styles
import './styles/app.css'
// load components
import { Navbar, PrivateRoute, Spinner } from './components/Shared'

// load store
import store from './store'

// load routes
import Login from './routes/Login'
const Home = lazy(() => import('./routes/Home'))
const CardFormCreate = lazy(() => import('./routes/CardForm/Create'))
const CardFormEdit = lazy(() => import('./routes/CardForm/Edit'))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Suspense
                            fallback={
                                <Spinner
                                    loading={true}
                                    styling={{
                                        position: 'relative',
                                        top: '90px'
                                    }}
                                />
                            }
                        >
                            <PrivateRoute exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
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
                        </Suspense>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
