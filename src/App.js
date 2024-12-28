import './App.css';
import SectionHeader from './components/SectionHeader';
import ContentHeader from './components/ContentHeader';
import products      from './data/products.json';
import ProductsList from './components/ProductsList';
import PageContent from './components/PageContent';
function App() {
  return (
    <>
    {/* <!-- HEADER Section --> */}
    <header id="site-header">
      <div className="row">
        <div className="col-12">
          <div className="site-navbar">
            <h1 className="box-logo">
              <a className="home-link" href=".">
                <img className="site-logo" src="/img/site-logo.png" alt="Site logo" />
                <span className="site-logo-text">Cakes <span className="site-logo-highlighted">Cafe</span></span>
              </a>
            </h1>
            <ul className="navbar-menu">
              <li className="menu-item"><a className="menu-link" href=".">Home</a></li>
              <li className="menu-item"><a className="menu-link" href=".">About us</a></li>
              <li className="menu-item"><a className="menu-link active" href=".">Our menu</a></li>
              <li className="menu-item"><a className="menu-link" href=".">Blog</a></li>
              <li className="menu-item"><a className="menu-link" href=".">Contacts</a></li> 
            </ul>
          </div>
        </div>
      </div>
    </header>
    
    {/* <!-- PAGE CONTENT Section --> */}
    <PageContent>
    <ContentHeader>
      <SectionHeader title="Our main menu"/>
    </ContentHeader>
      <ProductsList data={products} />
    </PageContent>    
  
    {/* <!-- FOOTER Section --> */}
    <section id="site-footer">
      <div className="row">
        <div className="col-12">
          <div className="copyright-content">
            <span className="copyright-date">Cakes Cafe &copy; 2023</span> 
            <span className="icon-bull"> &bull; </span> 
            <a className="privacy-policy" href="." title="Privacy Policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
