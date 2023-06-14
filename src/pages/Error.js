import MainNavigation from "../components/layout/MainNavigation";

const ErrorPage = () => {
    return (
        <>
          <MainNavigation />
          <div className="app-container">
            <br />
            <h3>Error 404! Page not found.</h3>
          </div>
        </>
    );
}
 
export default ErrorPage;