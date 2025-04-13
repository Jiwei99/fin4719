import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3">About DBS</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">Company Profile</Link></li>
            <li><Link href="/investors" className="hover:underline">Investor Relations</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
            <li><Link href="/sustainability" className="hover:underline">Sustainability</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:underline">Terms of Use</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/security" className="hover:underline">Security & Fraud</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:support@dbs.com" className="hover:underline">support@dbs.com</a></li>
            <li>Phone: <a href="tel:+6563711111" className="hover:underline">+65 6371 1111</a></li>
            <li><a href="https://www.dbs.com" className="hover:underline" target="_blank" rel="noreferrer">www.dbs.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 text-center py-4 text-xs text-neutral-400">
        © {new Date().getFullYear()} DBS Bank Ltd. Co. Reg. No. 196800306E. All rights reserved.
      </div>
    </footer>
  );
}
