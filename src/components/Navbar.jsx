import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar() {
  return <>
    <nav className="navbar bg-black text-white navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <div className="d-flex flex-row align-items-center justify-content-between w-100">
          <Link className="navbar-brand d-flex align-items-center" to="#">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Logo" width="100" height="24" className="d-inline-block align-text-top" />
          </div>
          <div className="d-flex flex-column ms-2 align-items-start">
            <span>عدسة</span>
            <span>عالم التصوير الفوتوغرافي</span>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex align-items-center justify-content-center collapse navbar-collapse" id="navbarSupportedContent">
          <div className="border border-1 rounded-pill d-flex flex-row align-items-center justify-content-between">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">الرئيسية</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">
                  المدونة</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">من نحن </Link>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between gap-2 ms-3">
            <button className="">
              <svg class="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <a className="bg-danger text-white border-0 rounded-pill p-3" href="">ابدأ القراءة</a>
          </div>
        </div>
      </div>
    </nav>
  </>;
}
