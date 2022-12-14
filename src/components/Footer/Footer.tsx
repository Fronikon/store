import './Footer.css';
import { memo } from 'react';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a className="course-link" href="https://rs.school/js/">
          <img
            className="course-logo"
            width="55px"
            height="40px"
            src="https://rs.school/images/rs_school_js.svg"
            alt="Rss-course"
          />
        </a>
        <a className="website-author" href="https://github.com/Fronikon">Dmitry Beresnev (Fronikon)</a>
        <span>2022</span>
      </div>
    </footer>
  );
});