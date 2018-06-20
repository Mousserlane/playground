import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Server } from 'http';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Routes } from './routes';
import { App } from './containers';
import { NotFound } from './components';
import { Provider } from 'react-redux';
import renderer from './html-renderer/renderer';

const app = new Express();
const server = new Server(app);

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '../static/templateview'));

app.use(
    '/static', Express.static(path.join(__dirname, '../static'))
);

app.get('*', (req, res) => {
    //we're doing URL matching here
    const matchRoute = Routes.reduce((acc, route) => matchPath(req.url, route.path, route.exact) || acc, null);

    var context = {}
    if(!matchRoute) {
        res.status(404).send(renderer(<NotFound />));
        return;
    }
    if(context.url){
        res.redirect(301, context.url)
    }else{
    //var locationName;
        res.status(200).send(renderer(
            <StaticRouter context={context} location={req.url}>
                <App />
            </StaticRouter>
        ));
    }

});
//MARK: For React Router 3
// app.get('*', (req, res) => {
//     matchPath( //match as two parameters, the objects and the function
//         {routes, location: req.url},
//         (error, redirectLocation, renderProps) => {
//             if(error)
//                 return res.status(500).send(error.message);
//             if(redirectLocation)
//                 return res.redirect(redirectLocation.pathname + redirectLocation.search)
            
//             let renderer;
//             if(renderProps){
//                 const context = {}
//                 // renderer = renderToString(<RouterContext {...renderProps}/>);
//                 renderer = renderToString(
//                 <Provider store={store}>
//                   <StaticRouter 
//                     location={req.url}
//                     context={context}>{getRoutes(store)}</StaticRouter>
//                 </Provider>
//                 )
//             }

//             else{
//                 renderer = `<h1>404 Page Not Found</h1>`;
//                 res.status(404);
//             }
//             res.render('index', {renderer});
//         }
//     );
// });

const PORT = 1442;

app.listen(PORT, err => {
    if(err){
        return console.error(err);
    }
    console.info(`The Server is Running on https://localhost:${PORT}`);
});