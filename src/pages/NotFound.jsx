import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="section notfound">
        <div className="container">
          <h1 className="text-gradient">404</h1>
          <p>Oops! This page tripped the circuit.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </PageTransition>
  );
}
