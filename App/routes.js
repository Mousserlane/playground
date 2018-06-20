// import React from 'react'
// import { IndexRoute, Route } from 'react-router'
// import { BrowserRouter as Router, Switch } from 'react-router-dom'; //use HashRouter for serving static files

// import { createBrowserHistory } from 'history';

import { MainContainer, Showcase }  from './containers';

// export const getRoutes = (store) => { 
//     const browserHistory = createBrowserHistory();
//     return(
//         <Router history={browserHistory}>
//           <div>
//             <Route path='/' component={MainContainer} /> {/* path disini bersifat regex. jadi dia bakal ngerender semua 
//             yang punya tanda '/' makanya kalo gak pake exact, component kita bakal dirender bersamaan */}
//             <Switch>
//             <Route path='/go' render={()=>{ <h1>GO!</h1> }} />
//             </Switch>
//           </div>
//         </Router>
//     )
// }

export const Routes = [
  {path:'/', 
   exact: true, 
   component: MainContainer
  },
  {path:'/toys',
   component: Showcase,
   routes: [
     {
       path: '/d3-js',
     },
     {
       path: '/analytics'
     },
     {
       path: '/snapsvg'
     },
     {
       path: '/react-bootstrap'
     }
   ]
  },
]