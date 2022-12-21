const resolveRoutes = (route) => {
    if (route) {
        let validRoute = route === '/bienvenida' ? route : '/404';
        return validRoute;
    }
    return `/${route}`; // /match (otra que no sea / o /bienvenida)
};

export default resolveRoutes;
