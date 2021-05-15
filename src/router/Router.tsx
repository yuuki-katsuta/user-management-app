import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { HomeRoutes } from './HomeRoutes';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      {/* Home配下のルーティングを設定 */}
      <Route
        path='/home'
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  );
});
