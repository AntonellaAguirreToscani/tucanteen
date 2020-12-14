import {  h } from '@stencil/core';

export const PrivateRoutes = ({ component, ...props}: { [key: string]: any}) => {
  const Component = component;
  let isAutenticated = props.isAutenticated;
  let order= props.order;
  return (
    <stencil-route {...props} routeRender ={
      () => {
        if (isAutenticated == "true"){
          return <Component {...props} {...order}></Component>;
        }
        return <stencil-router-redirect url="/login"></stencil-router-redirect>
      }
    }/>
  );
}
