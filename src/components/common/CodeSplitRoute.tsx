
import React, { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface CodeSplitRouteProps extends RouteProps {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  fallback?: React.ReactNode;
}

/**
 * Component for code-split routes with suspense
 */
const CodeSplitRoute: React.FC<CodeSplitRouteProps> = ({ 
  component: Component, 
  fallback = <div className="flex items-center justify-center min-h-screen">Loading...</div>,
  ...rest 
}) => {
  return (
    <Route
      {...rest}
      element={
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      }
    />
  );
};

export default CodeSplitRoute;
