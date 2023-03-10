import { Route, Routes as RoutesWrapper } from 'react-router-dom';

import { mainLayoutRoutes } from './consts';

function AllRoutes() {
  const {routes, Layout} = mainLayoutRoutes
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component, title }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component/>
          </Layout>
        }
        />
      ))}
    </RoutesWrapper>
  )
}

export default AllRoutes