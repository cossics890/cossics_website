import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button className="page-btn page-nav" disabled={page === 1} onClick={() => onChange(page - 1)}>
        <FiChevronLeft /> Prev
      </button>
      {pages.map((p) => (
        <button key={p} className={`page-btn ${p === page ? 'active' : ''}`} onClick={() => onChange(p)}>
          {p === page && <motion.span layoutId="page-active" className="page-active" />}
          <span className="page-num">{p}</span>
        </button>
      ))}
      <button className="page-btn page-nav" disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        Next <FiChevronRight />
      </button>
    </div>
  );
}
