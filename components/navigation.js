import dynamic from 'next/dynamic';

// Load components
// const Navigation = dynamic(() => import('../components/navigation'));

function Navigation() {
  return <div className="Navigation">
    <div>
      <img src="/static/components/navigation/tht-logo.svg" className="logo" />
    </div>
    <nav>
      <ul>
        <li>
          <a>How</a>
        </li>
        <li>
          <a>What</a>
        </li>
        <li>
          <a>Act</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .Navigation {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.95);
        padding: 8px 24px;

        display: flex;
        justify-content: space-between;
        z-index: 10;
      }
      @media (min-width: 480px) {
        .Navigation {
          padding: 30px 56px;
        }
      }
      .logo {
        width: 50px;
        height: 50px;
        display: block;
      }
      nav {
        display: none;
        margin-top: 34px;
      }
      nav ul {
        display: flex;
        justify-content: space-between;
      }
      ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      nav a {
        line-height: 44px;
        color: #0F2247;
        font-family: "Maison Neue", sans-serif;
        font-size: 17px;
        font-weight: 300;
        line-height: 20px;
        display: block;
        margin: 0 5px;
      }
      @media(min-width: 480px) {
        nav {
          display: block;
        }
      }
    `}</style>
  </div>
}

export default Navigation;
